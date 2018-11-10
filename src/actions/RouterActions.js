import { Actions } from 'react-native-router-flux';
import { GoogleService, FirebaseService } from '../services';

export const logout = () => {
  return () => {
    GoogleService.signOut();
    FirebaseService.signOut();
    Actions.mainLogin();
  };
};

export const addProduct = () => {
  return () => {
      Actions.product();
  };
};
