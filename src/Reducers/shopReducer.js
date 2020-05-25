const initialState = {
  Products: null,
  count: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "AddToShop":
      state.count = action.payload.count;
      return {
        count: state.count,
      };
    case "SubmitToShop":
      state.Products = action.payload.products;
      return {
        Products: state.Products,
        count: action.payload.count,
      };
    default:
      return state;
  }
}
