import { Navigation } from 'react-native-navigation';
import { registerScreens, screenUniqueName } from './src/screens';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: screenUniqueName('LoginScreen'),
    title: 'Login'
  },
  animationType: 'none'
});
