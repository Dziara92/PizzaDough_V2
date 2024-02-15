import fetchProduct from "./fetchProduct";
const filterCategory = (value, data, setData) => {
  if (value === "All") {
    fetchProduct();
  }

  if (value === "Mąka") {
    const newProduct = data.filter((item) => item.category === value);
    setData(newProduct);
  }

  if (value === "Sprzęt") {
    const newProduct = data.filter((item) => item.category === value);
    setData(newProduct);
  }
};

export default filterCategory;
