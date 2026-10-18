import { 
  APP_VERSION, 
  FIREBASE_VERSION_ENDPOINT, 
  isNewerVersion 
} from '../config/appVersion';

const STORAGE_KEY_LAST_CHECK = 'pocket_norcet_last_version_check';
const ONE_DAY_MS = 24 * 60 * 60 * 1000; // Check once every 24 hours

/**
 * Checks version against Firebase once daily.
 * Returns the new version string (e.g. '1.0.1') if an update is available, or null.
 * 
 * @param force If true, skips the 24-hour rate limit (e.g. for manual check button).
 */
export async function checkForAppUpdate(force: boolean = false): Promise<string | null> {
  const now = Date.now();
  const lastCheckStr = localStorage.getItem(STORAGE_KEY_LAST_CHECK);

  // Once-in-a-day check: Skip if already checked within the last 24 hours
  if (!force && lastCheckStr) {
    const lastCheckTime = parseInt(lastCheckStr, 10);
    if (!isNaN(lastCheckTime) && now - lastCheckTime < ONE_DAY_MS) {
      return null;
    }
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(FIREBASE_VERSION_ENDPOINT, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      cache: 'no-cache',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // Save check timestamp to ensure it runs only once a day
    localStorage.setItem(STORAGE_KEY_LAST_CHECK, String(now));

    if (!response.ok) return null;

    const data = await response.json();
    if (!data) return null;

    // Support Cloud Firestore (fields.version.stringValue) or Realtime Database (version / latestVersion)
    const remoteVersion: string = 
      typeof data === 'string' 
        ? data 
        : String(data.fields?.version?.stringValue || data.version || data.latestVersion || '');

    if (remoteVersion && isNewerVersion(remoteVersion, APP_VERSION)) {
      return remoteVersion;
    }

    return null;
  } catch {
    // Fail silently on network errors/offline
    return null;
  }
}
