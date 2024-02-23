/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

import { reducer } from "../utility/reducer";

const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
  const initialState = {
    basket: [],
    basketQty: 0,
    total_amount: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addProductToBasket = (id, amount, product) => {
    dispatch({ type: "ADD", payload: { id, amount, product } });
  };

  const cleanBasket = () => {
    dispatch({ type: "CLEAN_BASKET" });
  };

  const removeProductFromBasket = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: { id } });
  };

  const changeAmountProduct = (e, id, amount) => {
    let targetName = e.currentTarget.name;
    if (targetName === "plus") {
      dispatch({ type: "INCREASE_AMOUNT", payload: { id, amount } });
    } else {
      dispatch({ type: "DECREASE_AMOUNT", payload: { id, amount } });
    }
  };

  return (
    <BasketContext.Provider
      value={{
        ...state,
        addProductToBasket,
        removeProductFromBasket,
        changeAmountProduct,
        cleanBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

export const useBasketContext = () => {
  return useContext(BasketContext);
};
