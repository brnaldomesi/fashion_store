import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { LOGIN_SCREEN, PRODUCT_SCREEN, navigatorPush, startSingleScreenApp } from './';
import { ProductItem } from '../components';

import colors from '../colors';
import i18n from '../i18n';
import imgAppAdd from '../../assets/images/app-add.png';
import imgAppLogout from '../../assets/images/app-logout.png';

const LOGOUT_BUTTON_ID = 'logout';
const ADD_BUTTON_ID = 'add';


type Props = {};
export default class ProductsScreen extends Component<Props> {

  static navigatorButtons = {
    leftButtons: [
      {
        id: LOGOUT_BUTTON_ID,
        icon: imgAppLogout
      }
    ],
    rightButtons: [
      {
        id: ADD_BUTTON_ID,
        icon: imgAppAdd
      }
    ]
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    this.props.navigator.setTitle({
      title: i18n.t('products.title')
    });
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === LOGOUT_BUTTON_ID) {
        this.onPressLogout();
      } else if (event.id === ADD_BUTTON_ID) {
        this.onPressAdd();
      }
    }
  }

  onPressAdd() {
    navigatorPush(this.props.navigator, PRODUCT_SCREEN);
  }

  onPressLogout() {
    startSingleScreenApp(LOGIN_SCREEN, 'fade');
  }

  onPressItem(item) {
    navigatorPush(this.props.navigator, PRODUCT_SCREEN, item);
  }

  render() {
    const {
      containerStyle,
      flatListContainerStyle
    } = styles;

    return (
      <FlatList
        style={containerStyle}
        contentContainerStyle={flatListContainerStyle}
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          <ProductItem
            margin={padding}
            item={item}
            onPress={() => this.onPressItem(item)}
          />
        }
      />
    );
  }

}

const padding = 14;
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: colors.white
  },
  flatListContainerStyle: {
    paddingTop: padding / 2,
    paddingBottom: padding / 2,
    paddingLeft: padding,
    paddingRight: padding
  }
});
