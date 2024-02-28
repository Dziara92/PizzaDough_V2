export const reducer = (state, action) => {
  if (action.type === "ADD") {
    const { id, amount, product } = action.payload;

    let tempProduct = state.basket.find((product) => product.id === id);

    if (tempProduct) {
      const newBasket = state.basket.map((product) => {
        if (tempProduct.id === product.id) {
          let newAmount = product.amount + amount;
          if (newAmount > product.maxInStock) {
            newAmount = product.maxInStock;
          }
          return { ...product, amount: newAmount };
        } else {
          return product;
        }
      });

      return { ...state, basket: newBasket };
    } else {
      const newProduct = {
        id,
        name: product.name,
        amount,
        price: product.price,
        maxInStock: product.quantity,
        img: product.img,
      };
      return {
        ...state,
        basket: [...state.basket, newProduct],
        basketQty: state.basketQty + amount,
      };
    }
  }

  if (action.type === "REMOVE_PRODUCT") {
    const { id } = action.payload;
    const { amount } = state.basket.find((product) => product.id === id);
    const newBasket = state.basket.filter((product) => product.id !== id);
    return { ...state, basket: newBasket, basketQty: state.basketQty - amount };
  }
  if (action.type === "CLEAN_BASKET") {
    return { ...state, basket: [], basketQty: 0 };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    const { id, value } = action.payload;
    const newBasket = state.basket.map((product) => {
      if (value === "plus") {
        if (id === product.id) {
          let newAmount = product.amount + 1;
          if (newAmount > product.maxInStock) {
            newAmount = product.maxInStock;
          }
          return { ...product, amount: newAmount };
        } else {
          return product;
        }
      }
      if (value === "minus") {
        if (id === product.id) {
          let newAmount = product.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...product, amount: newAmount };
        } else {
          return product;
        }
      }
    });

    return { ...state, basket: newBasket };
  }

  if (action.type === "TOTAL_AMOUNT") {
    const { basketQty, total_amount } = state.basket.reduce(
      (total, currentValue) => {
        total.basketQty += currentValue.amount;
        total.total_amount += currentValue.amount * currentValue.price;

        return total;
      },
      { basketQty: 0, total_amount: 0 }
    );

    return {
      ...state,
      basketQty,
      total_amount,
    };
  }
};
