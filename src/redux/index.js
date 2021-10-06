import { createStore, combineReducers } from 'redux';
import categoryReducer from './categories';
import productReducer from './products';
import cartReducer from './cart';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
  categoryReducer,
  productReducer,
  cartReducer,
});

function store() {
  return createStore(reducers, composeWithDevTools());
}

export default store();
