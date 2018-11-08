import { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { LOGIN_SCREEN, PRODUCTS_SCREEN, registerScreens, startSingleScreenApp } from './screens';
import { AppBusiness } from './business';
import i18n from './i18n';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
registerScreens(store, Provider);

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);

    AppBusiness.configure();
    AppBusiness.signInSilentlyIfNeeded()
      .then(() => { startSingleScreenApp(PRODUCTS_SCREEN, 'none', i18n.t('products.title')); })
      .catch(() => { startSingleScreenApp(LOGIN_SCREEN, 'none'); });
  }

}
