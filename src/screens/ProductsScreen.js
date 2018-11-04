import firebase from 'react-native-firebase';

import React, { Component } from 'react';
import { Alert, FlatList, StyleSheet } from 'react-native';
import { LOGIN_SCREEN, PRODUCT_SCREEN, navigatorPush, startSingleScreenApp } from './';
import { ProductItem } from '../components';
import colors from '../colors';
import i18n from '../i18n';
import imgAppAdd from '../../assets/images/app-add.png';
import imgAppLogout from '../../assets/images/app-logout.png';

import ProductsBusiness from '../business/ProductsBusiness';


const LOGOUT_BUTTON_ID = 'logout';
const ADD_BUTTON_ID = 'add';
type Props = {};
export default class ProductsScreen extends Component<Props> {

  static navigatorButtons = {
    leftButtons: [{ id: LOGOUT_BUTTON_ID, icon: imgAppLogout }],
    rightButtons: [{ id: ADD_BUTTON_ID, icon: imgAppAdd }]
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.ref = firebase.firestore().collection('products');
    this.unsubscribe = null;

    this.state = {
        products: []
    };
  }

  componentWillMount() {
    this.props.navigator.setTitle({
      title: i18n.t('products.title')
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onConfirmLogout() {
    ProductsBusiness.signOut();
    startSingleScreenApp(LOGIN_SCREEN, 'fade');
  }

  onCollectionUpdate = (querySnapshot) => {
    const products = [];

    querySnapshot.forEach((doc) => {
      const { thumbnailUrl, name, price, color, size } = doc.data();
      products.push({ key: doc.id, thumbnailUrl, name, price, color, size });
    });

    this.setState({ products });
  }

  onNavigatorEvent(event) {
    if (event.type !== 'NavBarButtonPress') {
      return;
    }

    if (event.id === LOGOUT_BUTTON_ID) {
      this.onPressLogout();
    } else if (event.id === ADD_BUTTON_ID) {
      this.onPressAdd();
    }
  }

  onPressAdd() {
    navigatorPush(this.props.navigator, PRODUCT_SCREEN);
  }

  onPressLogout() {
    Alert.alert(
      i18n.t('products.logout.title'),
      i18n.t('products.logout.message'),
      [
        { text: i18n.t('products.logout.ok'), onPress: () => this.onConfirmLogout() },
        { text: i18n.t('app.cancel'), style: 'cancel' }
      ], { cancelable: true }
    );
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
        data={this.state.products}
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
