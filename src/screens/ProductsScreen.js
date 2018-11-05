import React, { Component } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { LOGIN_SCREEN, PRODUCT_SCREEN, navigatorPush, startSingleScreenApp } from './';
import { LoadingView, ProductItem } from '../components';
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
    this.collection = ProductsBusiness.productsCollection();
    this.unsubscribe = null;
  }

  state = {
      isLoading: true,
      products: []
  };

  componentWillMount() {
    this.props.navigator.setTitle({ title: i18n.t('products.title') });
  }

  componentDidMount() {
    this.unsubscribe = this.collection.onSnapshot(this.onCollectionUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onConfirmDelete(id) {
    ProductsBusiness.deleteProduct(id)
      .catch(() => {
        Alert.alert(
          i18n.t('app.attention'),
          i18n.t('app.deleteFailureMessage'),
          [{ text: i18n.t('app.ok') }],
          { cancelable: true }
        );
      });
  }

  onConfirmLogout() {
    ProductsBusiness.signOut();
    startSingleScreenApp(LOGIN_SCREEN, 'fade');
  }

  onCollectionUpdate = (querySnapshot) => {
    const products = ProductsBusiness.onProductsCollectionUpdate(querySnapshot);
    this.setState({
      isLoading: false,
      products
    });
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

  onPressItemDelete(item) {
    Alert.alert(
      i18n.t('app.deleteMessage'),
      item.name,
      [
        { text: i18n.t('app.deleteOk'), onPress: () => this.onConfirmDelete(item.id) },
        { text: i18n.t('app.cancel'), style: 'cancel' }
      ],
      { cancelable: true }
    );
  }

  renderList() {
    const {
      containerStyle,
      flatListContainerStyle
    } = styles;

    return (
      <View style={containerStyle}>
        <FlatList
          contentContainerStyle={flatListContainerStyle}
          data={this.state.products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            <ProductItem
              margin={padding}
              item={item}
              onPress={() => this.onPressItem(item)}
              onPressDelete={() => this.onPressItemDelete(item)}
            />
          }
        />
      </View>
    );
  }

  render() {
    return (
      this.state.isLoading ? <LoadingView /> : this.renderList()
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
