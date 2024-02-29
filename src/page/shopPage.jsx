/* eslint-disable react-hooks/exhaustive-deps */
import { useContextShop } from "../context/contextShop";
import Loading from "../components/loading";
import Products from "../components/products";
import Pagination from "../components/pagination";
import { useEffect, useState } from "react";

const ShopPage = () => {
  const { dataProduct, itemProducts, error, loading, setItemProducts } =
    useContextShop();
  const [page, setPage] = useState(2);
  const [limit, setLimit] = useState(6);

  const pagenation = (page, limit, productsArray) => {
    if (productsArray.length < limit) {
      page = 1;
    }
    let tempArray = [];
    for (let i = (page - 1) * limit; i < page * limit; i++) {
      if (productsArray.length - 1 < i) {
        i = productsArray.length;
        return tempArray;
      }
      tempArray.push(productsArray[i]);
      console.log(tempArray);
    }
    return tempArray;
  };

  const getLength = (arry) => {
    console.log(arry.length);
  };

  useEffect(() => {
    // setItemProducts(dataProduct);
    setItemProducts(pagenation(page, limit, dataProduct));
  }, []);

  const filterCategory = (e) => {
    let value = e.target.value;

    if (value === "All") {
      setItemProducts(pagenation(page, limit, dataProduct));
    }

    if (value === "Mąka") {
      const newProduct = dataProduct.filter((item) => item.category === value);
      getLength(newProduct);
      setItemProducts(pagenation(page, limit, newProduct));
    }

    if (value === "Sprzęt") {
      const newProduct = dataProduct.filter((item) => item.category === value);
      setItemProducts(pagenation(page, limit, newProduct));
    }
  };

  if (error) {
    return (
      <div className="container mx-auto my-9 px-[5px] w-4/5">
        <h1 className=" animate-slideDown text-center mb-8 text-3xl font-semibold">
          <div className="container">{error && error.message}</div>
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-9 px-[5px] w-4/5 md:mt-20 ">
      <h1 className=" animate-slideDown text-center mb-8 text-3xl font-semibold md:text-5xl md:mb-16">
        Sklep
      </h1>
      <div className="container  lg:w-11/12 lg:mx-auto ">
        <div className=" flex flex-row justify-center items-center gap-4 mb-6 lg:w-2/4 lg:mx-auto ">
          <p className=" font-semibold">Kategorie:</p>
          <select className=" block px-3 py-2 w-2/4" onChange={filterCategory}>
            <option value="All">Wszystko</option>
            <option value="Mąka">Mąki</option>
            <option value="Sprzęt">Sprzęt</option>
          </select>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="w-[98%] mx-auto">
            <div className="flex flex-col mt-10 flex-wrap  md:flex-row md:justify-center md:gap-[2px] lg:justify-normal">
              {itemProducts.map((item) => {
                return <Products key={item.id} {...item} />;
              })}
            </div>
          </div>
        )}
        <Pagination dataProduct={dataProduct} />
      </div>
    </div>
  );
};

export default ShopPage;
