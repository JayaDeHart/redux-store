let initialState = {
  categories: [
    {
      name: 'clothes',
      displayName: 'Apparel',
      description: 'Shop our wide variety of fits and styles',
    },
    {
      name: 'electronics',
      displayName: 'Electronics',
      description: 'Shop tech',
    },
    {
      name: 'prints',
      displayName: 'Prints',
      description: 'Buy custom prints',
    },
  ],
  activeCategory: 'clothes',
};

export function changeCategory(category) {
  return {
    type: 'CHANGE',
    payload: category,
  };
}

export default (state = initialState, action) => {
  let { type, payload } = action;
  //only one case for now
  switch (type) {
    case 'CHANGE':
      return { ...state, activeCategory: payload };
    default:
      return state;
  }
};
