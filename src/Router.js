import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import i18n from './i18n';

import LaunchScreen from './screens/LaunchScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';

const RouterComponent = () => (
  <Router>
    <Scene key='root'>
      <Scene key='mainLaunch' hideNavBar>
        <Scene key='launch' component={LaunchScreen} />
      </Scene>

      <Scene key='mainLogin' hideNavBar>
        <Scene key='login' component={LoginScreen} />
      </Scene>

      <Scene key='main' hideNavBar>
        <Scene
          key='products'
          component={ProductsScreen}
          title={i18n.t('products.title')}
          hideNavBar={false}
          leftTitle='Log Out'
          onLeft={() => { Actions.mainLaunch(); }}
          rightTitle='Add'
          onRight={() => { Actions.product(); }}
        />

        <Scene
          key='product'
          component={ProductScreen}
          title={i18n.t('product.title')}
          hideNavBar={false}
        />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
