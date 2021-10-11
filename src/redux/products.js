import axios from 'axios';

let initialState = {
  products: [
    {
      name: 'Iphone 1',
      description: 'The revolutionary product envisioned by Steve Jobs',
      price: 100,
      category: 'electronics',
      inStock: 10,
      display: true,
    },
    {
      name: 'FitBit',
      description: 'Count your steps',
      price: 200,
      category: 'electronics',
      inStock: 10,
      display: true,
    },
    {
      name: 'White T Shirt',
      description: 'Designed by Kanye West',
      price: 400,
      category: 'clothes',
      inStock: 10,
      display: true,
    },
    {
      name: 'Jordan Retro 4s',
      description: 'Pretty fly',
      price: 150,
      category: 'clothes',
      inStock: 10,
      display: true,
    },
    {
      name: 'Canvas Print',
      description: 'Print a custom picture on this canvas sheet',
      price: 15,
      category: 'prints',
      inStock: 10,
      display: true,
    },
    {
      name: 'Photo Paper Print',
      description: 'Print a custom picture on this glossy photo paper',
      price: 20,
      category: 'prints',
      inStock: 10,
      display: true,
    },
  ],
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'CHANGE':
      let updated = state.products.map((product) => {
        if (product.category !== payload) {
          product.display = false;
          return product;
        } else {
          product.display = true;
          return product;
        }
      });
      return { ...state, products: updated };
    case 'ADD_CART':
      let subtracted = state.products.map((product) => {
        if (product.name == payload.name) {
          product.inStock -= 1;
          return product;
        } else {
          return product;
        }
      });
      return { ...state, products: subtracted };
    case 'REMOVE_CART':
      let added = state.products.map((product) => {
        if (product.name == payload.name) {
          product.inStock += 1;
          return product;
        } else {
          return product;
        }
      });
      return { ...state, products: added };
    case 'SET_INITAL':
      console.log(payload);
    default:
      return state;
  }
};

const setInitial = (data) => {
  return {
    type: 'SET_INITIAL',
    payload: data,
  };
};

export const getInitial = () => {
  return (dispatch) => {
    axios
      .get('https://api-js401.herokuapp.com/api/v1/products')
      .then((res) => {
        dispatch(setInitial(res));
      })
      .catch((err) => {
        console.log('error!');
      });
  };
};
