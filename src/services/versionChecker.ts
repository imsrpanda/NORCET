import { 
  APP_VERSION, 
  FIREBASE_VERSION_ENDPOINT, 
  RemoteVersionData, 
  UpdateInfo, 
  isNewerVersion 
} from '../config/appVersion';

const STORAGE_KEYS = {
  LAST_CHECK: 'pocket_norcet_last_version_check',
  DISMISSED_VERSION: 'pocket_norcet_dismissed_update_version',
};

// 24 Hours in Milliseconds: Check once per day
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export interface CheckVersionResult {
  hasUpdate: boolean;
  updateInfo: UpdateInfo | null;
  checkedTodaySkipped?: boolean;
  error?: string;
}

/**
 * Checks if a newer version exists in Firebase.
 * 
 * By default (force = false):
 * - Runs ONLY once in 24 hours to save network calls & battery.
 * - If already checked within the last 24 hours, returns null immediately.
 * 
 * If force = true:
 * - Bypasses the 24-hour throttle (useful for manual 'Check for updates' button).
 */
export async function checkForAppUpdate(force: boolean = false): Promise<CheckVersionResult> {
  const now = Date.now();
  const lastCheckStr = localStorage.getItem(STORAGE_KEYS.LAST_CHECK);

  // Daily Throttle Check
  if (!force && lastCheckStr) {
    const lastCheckTime = parseInt(lastCheckStr, 10);
    if (!isNaN(lastCheckTime) && now - lastCheckTime < ONE_DAY_MS) {
      return {
        hasUpdate: false,
        updateInfo: null,
        checkedTodaySkipped: true,
      };
    }
  }

  // Attempt fetch from Firebase Remote Endpoint
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout

    const response = await fetch(FIREBASE_VERSION_ENDPOINT, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-cache',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // Save check timestamp only upon successful network contact
    localStorage.setItem(STORAGE_KEYS.LAST_CHECK, String(now));

    if (!response.ok) {
      return {
        hasUpdate: false,
        updateInfo: null,
        error: `HTTP ${response.status}`,
      };
    }

    const data: RemoteVersionData = await response.json();

    if (!data || !data.latestVersion) {
      return { hasUpdate: false, updateInfo: null };
    }

    const hasNewVersion = isNewerVersion(data.latestVersion, APP_VERSION);

    if (hasNewVersion) {
      // Normalize release notes into string array
      let notes: string[] = [];
      if (Array.isArray(data.releaseNotes)) {
        notes = data.releaseNotes;
      } else if (typeof data.releaseNotes === 'string') {
        notes = [data.releaseNotes];
      } else {
        notes = [
          'High-yield clinical nursing updates',
          'Exam arena question updates and bug fixes',
          'Performance and offline stability enhancements',
        ];
      }

      const updateInfo: UpdateInfo = {
        latestVersion: data.latestVersion,
        currentVersion: APP_VERSION,
        releaseNotes: notes,
        updateUrl: data.updateUrl || 'https://github.com/imsrpanda/NORCET/releases/latest',
        forceUpdate: !!data.forceUpdate,
      };

      return {
        hasUpdate: true,
        updateInfo,
      };
    }

    return {
      hasUpdate: false,
      updateInfo: null,
    };
  } catch (err: any) {
    // If endpoint is not reachable (e.g. offline or Firebase not yet initialized), fail silently
    return {
      hasUpdate: false,
      updateInfo: null,
      error: err?.message || 'Network error',
    };
  }
}

/**
 * Helper to record that user dismissed an optional update.
 */
export function dismissUpdate(version: string) {
  try {
    localStorage.setItem(STORAGE_KEYS.DISMISSED_VERSION, version);
  } catch (e) {
    // Ignore storage issues
  }
}
