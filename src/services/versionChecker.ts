import { 
  APP_VERSION, 
  FIREBASE_VERSION_ENDPOINT, 
  isNewerVersion 
} from '../config/appVersion';

const STORAGE_KEY_LAST_CHECK = 'pocket_norcet_last_version_check';
const STORAGE_KEY_PENDING_UPDATE = 'pocket_norcet_pending_update';
const ONE_DAY_MS = 24 * 60 * 60 * 1000; // Check once every 24 hours

// In-flight singleton promise to prevent duplicate concurrent checks (e.g. React 18 StrictMode)
let inFlightPromise: Promise<string | null> | null = null;

/**
 * Checks version against Firebase.
 * 
 * - Network call to Firebase is throttled to once every 24 hours to save API calls.
 * - If a pending update was previously detected and the app is still outdated,
 *   it returns the new version on app launch.
 * - Deduplicates concurrent calls during page loads / React StrictMode.
 * - If force = true, bypasses the 24-hour network throttle.
 */
export function checkForAppUpdate(force: boolean = false): Promise<string | null> {
  if (!force && inFlightPromise) {
    return inFlightPromise;
  }

  const checkTask = async (): Promise<string | null> => {
    const now = Date.now();
    const lastCheckStr = localStorage.getItem(STORAGE_KEY_LAST_CHECK);
    const pendingUpdate = localStorage.getItem(STORAGE_KEY_PENDING_UPDATE);

    // If an update was already detected earlier and the local app is still outdated:
    if (pendingUpdate && isNewerVersion(pendingUpdate, APP_VERSION)) {
      return pendingUpdate;
    }

    // 24-hour throttle: Skip network check if already checked within 24 hours
    if (!force && lastCheckStr) {
      const lastCheckTime = parseInt(lastCheckStr, 10);
      if (!isNaN(lastCheckTime) && now - lastCheckTime < ONE_DAY_MS) {
        return null;
      }
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const response = await fetch(FIREBASE_VERSION_ENDPOINT, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
        cache: 'no-cache',
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Record successful check timestamp to throttle subsequent network calls
      localStorage.setItem(STORAGE_KEY_LAST_CHECK, String(now));

      if (!response.ok) {
        return null;
      }

      const data = await response.json();
      if (!data) return null;

      // Support Cloud Firestore (fields.version.stringValue) or Realtime Database (version / latestVersion)
      const remoteVersion: string = 
        typeof data === 'string' 
          ? data 
          : String(data.fields?.version?.stringValue || data.version || data.latestVersion || '');

      if (remoteVersion && isNewerVersion(remoteVersion, APP_VERSION)) {
        localStorage.setItem(STORAGE_KEY_PENDING_UPDATE, remoteVersion);
        return remoteVersion;
      } else {
        localStorage.removeItem(STORAGE_KEY_PENDING_UPDATE);
        return null;
      }
    } catch {
      // If network error/offline, return cached pending update if one exists
      return (pendingUpdate && isNewerVersion(pendingUpdate, APP_VERSION)) ? pendingUpdate : null;
    }
  };

  if (!force) {
    inFlightPromise = checkTask().finally(() => {
      inFlightPromise = null;
    });
    return inFlightPromise;
  }

  return checkTask();
}
