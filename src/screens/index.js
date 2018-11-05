import DeviceInfo from 'react-native-device-info';
import { Navigation } from 'react-native-navigation';

import LoadingScreen from './LoadingScreen';
import LoginScreen from './LoginScreen';
import ProductScreen from './ProductScreen';
import ProductsScreen from './ProductsScreen';

import colors from '../colors';
import fonts from '../fonts';
import imgAppBack from '../../assets/images/app-back.png';


// Public

export const LOADING_SCREEN = screenUniqueName('LoadingScreen');
export const LOGIN_SCREEN = screenUniqueName('LoginScreen');
export const PRODUCT_SCREEN = screenUniqueName('ProductScreen');
export const PRODUCTS_SCREEN = screenUniqueName('ProductsScreen');

export function registerScreens() {
  Navigation.registerComponent(LOADING_SCREEN, () => LoadingScreen);
  Navigation.registerComponent(LOGIN_SCREEN, () => LoginScreen);
  Navigation.registerComponent(PRODUCT_SCREEN, () => ProductScreen);
  Navigation.registerComponent(PRODUCTS_SCREEN, () => ProductsScreen);
}

export function startSingleScreenApp(screenName, animationType = 'slide-down') {
  Navigation.startSingleScreenApp({
    screen: {
      screen: screenName,
      navigatorStyle
    },
    appStyle: {
      ...appStyle
    },
    animationType
  });
}

export function navigatorPush(navigator, screen, passProps = {}) {
  navigator.push({
    screen,
    navigatorStyle,
    backButtonTitle: '',
    passProps
  });
}

export function navigatorPop(navigator) {
  navigator.pop({
    animated: true
  });
}

export function showLightBox(navigator, tapBackgroundToDismiss = false) {
  navigator.showLightBox({
    screen: LOADING_SCREEN,
    style: {
      backgroundBlur: 'dark',
      tapBackgroundToDismiss
    }
  });
}

export function dismissLightBox(navigator) {
  navigator.dismissLightBox();
}

// Private

function screenUniqueName(name) {
  return `${DeviceInfo.getBundleId()}.${name}`;
}

const appStyle = {
  orientation: 'portrait',
  statusBarColor: colors.purple,
  backButtonImage: imgAppBack
};

const navigatorStyle = {
  // Android and iOS
  navBarTextFontFamily: fonts.bold,
  navBarTextFontSize: 22,
  navBarBackgroundColor: colors.white,
  navBarButtonColor: colors.grayDark,
  topBarElevationShadowEnabled: true,
  navBarNoBorder: true,
  // Android only
  navBarTitleTextCentered: true
};
