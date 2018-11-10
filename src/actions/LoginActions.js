import { Actions } from 'react-native-router-flux';
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from './types';
import { GoogleService, FirebaseService } from '../services';

export const login = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN });

    GoogleService.signIn()
      .then(userInfo => {
        FirebaseService.signIn(userInfo.idToken, userInfo.accessToken)
          .then(user => loginSuccess(dispatch, user))
          .catch(error => {
            GoogleService.signOut();
            loginFail(dispatch, error);
          });
      })
      .catch(() => loginFail(dispatch));
  };
};

const loginSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_SUCCESS, payload: user });
  Actions.main();
};

const loginFail = (dispatch) => {
  dispatch({ type: LOGIN_FAIL });
};
