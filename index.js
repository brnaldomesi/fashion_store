import {
  LOGIN_SCREEN,
  PRODUCTS_SCREEN,
  registerScreens, startSingleScreenApp
} from './src/screens';

import AppBusiness from './src/business/AppBusiness';

registerScreens();

AppBusiness.configure();
AppBusiness.signInSilentlyIfNeeded()
  .then(() => {
    startSingleScreenApp(PRODUCTS_SCREEN, 'none');
  })
  .catch(() => {
    startSingleScreenApp(LOGIN_SCREEN, 'none');
  });
