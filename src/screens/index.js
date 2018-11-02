import DeviceInfo from 'react-native-device-info';
import { Navigation } from 'react-native-navigation';

import LoginScreen from './LoginScreen';

export function registerScreens() {
  Navigation.registerComponent(screenUniqueName('LoginScreen'), () => LoginScreen);
}

export function screenUniqueName(name) {
  return `${DeviceInfo.getBundleId()}.${name}`;
}
