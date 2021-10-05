let initialState = {
  products: [
    {
      name: 'Iphone 1',
      description: 'The revolutionary product envisioned by Steve Jobs',
      price: 100,
      category: 'electronics',
    },
    {
      name: 'FitBit',
      description: 'Count your steps',
      price: 200,
      category: 'electronics',
    },
    {
      name: 'White T Shirt',
      description: 'Designed by Kanye West',
      price: 400,
      category: 'clothes',
    },
    {
      name: 'Jordan Retro 4s',
      description: 'Pretty fly',
      price: 150,
      category: 'clothes',
    },
    {
      name: 'Canvas Print',
      description: 'Print a custom picture on this canvas sheet',
      price: 15,
      category: 'prints',
    },
    {
      name: 'Photo Paper Print',
      description: 'Print a custom picture on this glossy photo paper',
      price: 20,
      category: 'prints',
    },
  ],
  displayProducts: [
    {
      name: 'Iphone 1',
      description: 'The revolutionary product envisioned by Steve Jobs',
      price: 100,
      category: 'electronics',
    },
    {
      name: 'FitBit',
      description: 'Count your steps',
      price: 200,
      category: 'electronics',
    },
    {
      name: 'White T Shirt',
      description: 'Designed by Kanye West',
      price: 400,
      category: 'clothes',
    },
    {
      name: 'Jordan Retro 4s',
      description: 'Pretty fly',
      price: 150,
      category: 'clothes',
    },
    {
      name: 'Canvas Print',
      description: 'Print a custom picture on this canvas sheet',
      price: 15,
      category: 'prints',
    },
    {
      name: 'Photo Paper Print',
      description: 'Print a custom picture on this glossy photo paper',
      price: 20,
      category: 'prints',
    },
  ],
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  console.log(payload);

  switch (type) {
    case 'CHANGE':
      let filtered = state.products.filter(
        (product) => product.category === payload
      );
      console.log(filtered);
      return { ...state, displayProducts: filtered };
    default:
      return state;
  }
};
