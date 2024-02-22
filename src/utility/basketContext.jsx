/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { useContextShop } from "./contextShop";
import { reducer } from "../utility/reducer";

const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
  const { dataProduct } = useContextShop();
  const initialState = {
    dataProduct,
    basketQty: 0,
    productInBasket: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addProductToBasket = (id) => {
    dispatch({ type: "add", payload: { id, dataProduct } });
  };

  return (
    <BasketContext.Provider value={{ ...state, addProductToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

export const useBasketContext = () => {
  return useContext(BasketContext);
};
