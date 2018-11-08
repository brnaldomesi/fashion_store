import DeviceInfo from 'react-native-device-info';
import { Navigation } from 'react-native-navigation';

import CameraScreen from './CameraScreen';
import GalleryScreen from './GalleryScreen';
import LoadingScreen from './LoadingScreen';
import LoginScreen from './LoginScreen';
import ProductScreen from './ProductScreen';
import ProductsScreen from './ProductsScreen';

import colors from '../colors';
import fonts from '../fonts';
import imgAppBack from '../../assets/images/app-back.png';


// Public

export const CAMERA_SCREEN = screenUniqueName('CameraScreen');
export const GALLERY_SCREEN = screenUniqueName('GalleryScreen');
export const LOADING_SCREEN = screenUniqueName('LoadingScreen');
export const LOGIN_SCREEN = screenUniqueName('LoginScreen');
export const PRODUCT_SCREEN = screenUniqueName('ProductScreen');
export const PRODUCTS_SCREEN = screenUniqueName('ProductsScreen');

export function registerScreens(store, Provider) {
  Navigation.registerComponent(CAMERA_SCREEN, () => CameraScreen, store, Provider);
  Navigation.registerComponent(GALLERY_SCREEN, () => GalleryScreen, store, Provider);
  Navigation.registerComponent(LOADING_SCREEN, () => LoadingScreen, store, Provider);
  Navigation.registerComponent(LOGIN_SCREEN, () => LoginScreen, store, Provider);
  Navigation.registerComponent(PRODUCT_SCREEN, () => ProductScreen, store, Provider);
  Navigation.registerComponent(PRODUCTS_SCREEN, () => ProductsScreen, store, Provider);
}

export function startSingleScreenApp(screenName, animationType = 'slide-down', title = null) {
  Navigation.startSingleScreenApp({
    screen: {
      screen: screenName,
      title,
      navigatorStyle
    },
    appStyle: {
      ...appStyle
    },
    animationType
  });
}

export function navigatorPush(navigator, screen, title, passProps = {}) {
  navigator.push({
    screen,
    title,
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

export function showModal(navigator, screen, title, passProps = {}) {
  navigator.showModal({
    screen,
    title,
    passProps,
    navigatorStyle,
    animationType: 'slide-up'
  });
}

export function dismissModal(navigator) {
  navigator.dismissModal({
    animationType: 'slide-down'
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
