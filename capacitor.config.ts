import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.arjunkhetia.app',
  appName: 'Angular-Capacitor-Project',
  webDir: 'dist/angular-capacitor-project',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.3:4200',
    cleartext: true
  }
};

export default config;
