import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from '../actions/types';
import i18n from '../i18n';

const INITIAL_STATE = {
  loading: false,
  user: null,
  errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        user: null,
        errorMessage: ''
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        errorMessage: i18n.t('login.enter.message')
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        errorMessage: ''
      };

    default:
      return state;
  }
};
