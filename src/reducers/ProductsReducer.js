import { PRODUCTS_DELETE, PRODUCTS_FETCH, PRODUCTS_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  products: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_DELETE:
      return state;

    case PRODUCTS_FETCH:
      return INITIAL_STATE;

    case PRODUCTS_FETCH_SUCCESS:
      return {
        loading: false,
        products: action.payload
      };

    default:
      return state;
  }
};
