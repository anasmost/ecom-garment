import { combineReducers } from "redux";

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import storage from 'redux-persist/es/storage';
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import directoryReducer from './directory/directory.reducer';
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart']
};

export default persistCombineReducers(persistConfig, {
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});