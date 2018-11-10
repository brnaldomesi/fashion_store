import { Actions } from 'react-native-router-flux';
import { FirebaseService } from '../services';
import { PRODUCT_CLEAN, PRODUCT_DELETE, PRODUCT_SAVE, PRODUCT_UPDATE } from './types';

export const productClean = () => {
    return {
      type: PRODUCT_CLEAN
    };
};

export const productDelete = ({ id }) => {
  return (dispatch) => {
    FirebaseService.deleteProduct(id)
      .then(() => {
        dispatch({ type: PRODUCT_DELETE });
        Actions.pop();
      });
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

    result.then(() => {
      dispatch({ type: PRODUCT_SAVE });
      Actions.pop();
    });
  };
};
