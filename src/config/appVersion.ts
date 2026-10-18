/**
 * PocketNORCET Application Version & Firebase Remote Config
 * 
 * To release a new update:
 * 1. Update APP_VERSION below when releasing a new build.
 * 2. In Firebase (e.g. Firebase Realtime Database or Firestore or Remote Config),
 *    maintain the 'app_version' node:
 *    {
 *      "latestVersion": "1.1.0",
 *      "minVersion": "1.0.0",
 *      "releaseNotes": [
 *        "Added AIIMS NORCET 2024 Stage I & II full question sets",
 *        "Enhanced responsive layout for tablets and desktop screens",
 *        "Improved offline caching and clinical rationales"
 *      ],
 *      "updateUrl": "https://github.com/imsrpanda/NORCET/releases/latest",
 *      "forceUpdate": false
 *    }
 */

export const APP_VERSION = '1.0.0';
export const APP_BUILD_NUMBER = 1;
export const APP_RELEASE_DATE = '2026-10-18';

export interface RemoteVersionData {
  latestVersion: string;
  minVersion?: string;
  releaseNotes?: string[] | string;
  updateUrl?: string;
  forceUpdate?: boolean;
}

export interface UpdateInfo {
  latestVersion: string;
  currentVersion: string;
  releaseNotes: string[];
  updateUrl: string;
  forceUpdate: boolean;
}

/**
 * Firebase Realtime Database / Firestore / REST endpoint URL.
 * You can set this via VITE_FIREBASE_VERSION_URL in an .env file or update the fallback below.
 * Example: 'https://<your-project-id>-default-rtdb.firebaseio.com/app_version.json'
 */
export const FIREBASE_VERSION_ENDPOINT = 
  (import.meta.env.VITE_FIREBASE_VERSION_URL as string) ||
  'https://pocketnorcet-default-rtdb.firebaseio.com/app_version.json';

/**
 * Compare semantic versions (e.g., '1.1.0' vs '1.0.0')
 * Returns:
 *   1 if v1 > v2
 *  -1 if v1 < v2
 *   0 if v1 === v2
 */
export function compareSemver(v1: string, v2: string): number {
  const clean1 = v1.replace(/^v/i, '').trim();
  const clean2 = v2.replace(/^v/i, '').trim();

  const parts1 = clean1.split('.').map((p) => parseInt(p, 10) || 0);
  const parts2 = clean2.split('.').map((p) => parseInt(p, 10) || 0);

  const maxLength = Math.max(parts1.length, parts2.length);

  for (let i = 0; i < maxLength; i++) {
    const p1 = parts1[i] || 0;
    const p2 = parts2[i] || 0;
    if (p1 > p2) return 1;
    if (p1 < p2) return -1;
  }

  return 0;
}

/**
 * Checks if remote version is strictly newer than current app version
 */
export function isNewerVersion(remoteVersion: string, currentVersion: string = APP_VERSION): boolean {
  return compareSemver(remoteVersion, currentVersion) > 0;
}
