import { v4 as uuidv4 } from 'uuid';

const initialState = {
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'ADD_CART':
      let individual = {
        ...payload,
        key: uuidv4(),
      };
      return { cart: [...state.cart, individual] };
    case 'REMOVE_CART':
      let newCart = state.cart.filter((item) => item.key !== payload.key);
      return { cart: newCart };
    default:
      return state;
  }
}

export function addCart(product) {
  return {
    type: 'ADD_CART',
    payload: product,
  };
}

export function removeCart(product) {
  return {
    type: 'REMOVE_CART',
    payload: product,
  };
}
