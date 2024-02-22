export const reducer = (state, action) => {
  if (action.type === "add") {
    const { id, dataProduct } = action.payload;

    let newProductInBasket = dataProduct.find((product) => product.id === id);

    if (state.productInBasket.includes(newProductInBasket)) {
      return {
        ...state,
        basketQty: state.basketQty + 1,
      };
    }

    return {
      ...state,
      productInBasket: [...state.productInBasket, newProductInBasket],
      basketQty: state.basketQty + 1,
    };
  }
};
