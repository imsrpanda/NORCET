import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pocketnorcet.app',
  appName: 'PocketNORCET',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
