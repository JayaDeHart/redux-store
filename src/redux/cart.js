const initialState = {
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'ADD_CART':
      return { cart: [...state.cart, payload] };
    case 'REMOVE_CART':
      let newCart = state.cart.filter((item) => item.name != payload.name);
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
