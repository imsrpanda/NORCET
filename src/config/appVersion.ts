/**
 * App Version & Update Settings
 */
export const APP_VERSION = '1.0.0';

// Hardcoded Update URL used by the update button
export const UPDATE_URL = 'https://github.com/imsrpanda/NORCET';

// Firebase Firestore endpoint for project 'awsome-7bd09'
export const FIREBASE_VERSION_ENDPOINT =
  (import.meta.env.VITE_FIREBASE_VERSION_URL as string) ||
  'https://firestore.googleapis.com/v1/projects/awsome-7bd09/databases/(default)/documents/app_version/current';

/**
 * Compare two semver strings (e.g. '1.0.1' > '1.0.0')
 */
export function isNewerVersion(remoteVersion: string, currentVersion: string = APP_VERSION): boolean {
  const p1 = remoteVersion.replace(/^v/i, '').trim().split('.').map(Number);
  const p2 = currentVersion.replace(/^v/i, '').trim().split('.').map(Number);
  const len = Math.max(p1.length, p2.length);

  for (let i = 0; i < len; i++) {
    const v1 = p1[i] || 0;
    const v2 = p2[i] || 0;
    if (v1 > v2) return true;
    if (v1 < v2) return false;
  }
  return false;
}
