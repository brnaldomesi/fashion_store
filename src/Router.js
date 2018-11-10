import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ActionConst, Lightbox, Scene, Stack, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { addProduct, logout } from './actions';
import i18n from './i18n';
import colors from './colors';
import fonts from './fonts';
import imgAppAdd from '../assets/images/app-add.png';
import imgAppIcon from '../assets/images/app-back.png';
import imgAppLogout from '../assets/images/app-logout.png';

import LaunchScreen from './screens/LaunchScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';
import { LoadingLightbox } from './components';

type Props = {};
class RouterComponent extends Component<Props> {

  render() {
    const { sceneStyle, navigationBarStyle, navigationBarTitleStyle } = styles;
    return (
      <Router sceneStyle={sceneStyle}>

        <Stack key='root'>
          <Stack hideNavBar>
            <Scene component={LaunchScreen} />
          </Stack>

          <Stack key='login' type={ActionConst.REPLACE} hideNavBar>
            <Scene component={LoginScreen} />
          </Stack>

          <Lightbox key='main' type={ActionConst.REPLACE} hideNavBar>
            <Stack
              navigationBarStyle={navigationBarStyle}
              titleStyle={navigationBarTitleStyle}
              headerLayoutPreset='center'
              backButtonImage={imgAppIcon}
              hideNavBar
            >
              <Scene
                component={ProductsScreen}
                title={i18n.t('products.title')}
                hideNavBar={false}
                leftButtonImage={imgAppLogout}
                onLeft={() => this.props.logout()}
                rightButtonImage={imgAppAdd}
                onRight={() => this.props.addProduct()}
              />
              <Scene
                key='product'
                component={ProductScreen}
                title={i18n.t('product.title')}
                hideNavBar={false}
              />
            </Stack>

            <Scene key="loadingLightbox" component={LoadingLightbox} />
          </Lightbox>

        </Stack>
      </Router>
    );
  }

}

const styles = StyleSheet.create({
  sceneStyle: {
    backgroundColor: colors.white
  },
  navigationBarStyle: {
    backgroundColor: colors.grayUltraLight,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 3
  },
  navigationBarTitleStyle: {
    color: colors.black,
    fontFamily: fonts.bold,
    fontSize: 22
  }
});

export default connect(null, { addProduct, logout })(RouterComponent);
