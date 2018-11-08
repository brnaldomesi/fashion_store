import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import ProductsReducer from './ProductsReducer';

export default combineReducers({
    products: ProductsReducer,
    login: LoginReducer
});
