/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, createContext, useState, useEffect } from "react";
import fetchProducts from "../utility/fetchProducts";
const linkData = "http://localhost:3001/produkty";

const ContextShop = createContext();

const ContextShopProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataProduct, setDataProduct] = useState([]);
  const [itemProducts, setItemProducts] = useState([]);

  useEffect(() => {
    fetchProducts(
      linkData,
      setDataProduct,
      setItemProducts,
      setLoading,
      setError
    );
  }, []);

  return (
    <ContextShop.Provider
      value={{
        loading,
        setLoading,
        error,
        setError,
        dataProduct,
        setDataProduct,
        itemProducts,
        setItemProducts,
      }}
    >
      {children}
    </ContextShop.Provider>
  );
};

export default ContextShopProvider;

export const useContextShop = () => {
  return useContext(ContextShop);
};
