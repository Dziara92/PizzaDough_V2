/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect } from "react";

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

  const changeAmountProduct = (id, value) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, value } });
  };

  useEffect(() => {
    dispatch({ type: "TOTAL_AMOUNT" });
  }, [state.basket]);

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
