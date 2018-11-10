import { FirebaseService } from '../services';
import { PRODUCTS_DELETE, PRODUCTS_FETCH, PRODUCTS_FETCH_SUCCESS } from './types';

export const productsDelete = ({ id }) => {
  return (dispatch) => {
    FirebaseService.deleteProduct(id)
      .then(() => {
        dispatch({ type: PRODUCTS_DELETE });
      });
  };
};

export const productsFetch = () => {
  return (dispatch) => {
    dispatch({ type: PRODUCTS_FETCH });

    FirebaseService.productsCollection()
      .onSnapshot((querySnapshot) => {
        const products = [];

        querySnapshot.forEach((doc) => {
          const { imageUrl, name, price, color, size } = doc.data();
          products.push({ id: doc.id, imageUrl, name, price, color, size });
        });

        dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: products });
      });
  };
};
