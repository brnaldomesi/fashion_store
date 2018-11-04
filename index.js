import GoogleService from './src/services/GoogleService';
import {
  LOGIN_SCREEN,
  PRODUCTS_SCREEN,
  registerScreens, startSingleScreenApp
} from './src/screens';


registerScreens();

GoogleService.configure();
GoogleService.signInSilentlyIfNeeded()
  .then(() => {
    startSingleScreenApp(PRODUCTS_SCREEN, 'none');
  })
  .catch(() => {
    startSingleScreenApp(LOGIN_SCREEN, 'none');
  });
