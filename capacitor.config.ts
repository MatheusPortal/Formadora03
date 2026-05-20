import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'formadora03',
  webDir: 'www',
  
  plugins: {
    StatusBar: {
      overlay: false
    }
  }
};

export default config;
