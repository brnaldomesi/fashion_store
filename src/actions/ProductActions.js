import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FirebaseService } from '../services';
import { PRODUCT_CLEAN, PRODUCT_DELETE, PRODUCT_SAVE, PRODUCT_UPDATE } from './types';
import i18n from '../i18n';

// Public

export const productClean = () => {
    return {
      type: PRODUCT_CLEAN
    };
};

export const productDelete = ({ id, name }) => {
  return (dispatch) => {
    Alert.alert(
       i18n.t('app.deleteMessage'),
       name,
       [
         { text: i18n.t('app.yes'), onPress: () => onPressProductDelete(dispatch, id) },
         { text: i18n.t('app.cancel'), style: 'cancel' }
       ],
       { cancelable: true }
     );
  };
};

export const productUpdate = ({ prop, value }) => {
    return {
      type: PRODUCT_UPDATE,
      payload: { prop, value }
    };
};

export const productSave = ({ id = null, imageUrl, name, price, color, size }) => {
  return (dispatch) => {
    let result;

    if (id === null) {
      result = FirebaseService.addProduct(imageUrl, name, price, color, size);
    } else {
      result = FirebaseService.setProduct(id, imageUrl, name, price, color, size);
    }

    result
      .then(() => {
        dispatch({ type: PRODUCT_SAVE });
        Actions.pop();
      })
      .catch(() => {
        Alert.alert(
          i18n.t('app.attention'),
          i18n.t('product.save.failureMessage'),
          [{ text: i18n.t('app.ok') }],
          { cancelable: true }
        );
      });
  };
};

// Private

const onPressProductDelete = (dispatch, id) => {
  FirebaseService.deleteProduct(id)
    .then(() => {
      dispatch({ type: PRODUCT_DELETE });
      Actions.pop();
    })
    .catch(() => {
      Alert.alert(
        i18n.t('app.attention'),
        i18n.t('app.deleteFailureMessage'),
        [{ text: i18n.t('app.ok') }],
        { cancelable: true }
      );
    });
};
