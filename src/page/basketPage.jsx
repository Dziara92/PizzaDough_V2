import { useBasketContext } from "../context/basketContext";
import { Link } from "react-router-dom";
import ProductInBasket from "../components/productInBasket";
import TotalAmaunts from "../components/totalAmaunts";
const BasketPage = () => {
  const {
    basket,
    basketQty,
    total_amount,
    changeAmountProduct,
    removeProductFromBasket,
    cleanBasket,
  } = useBasketContext();

  if (basket.length < 1) {
    return (
      <div className="container mx-auto mt-16 px-[5px] w-4/5">
        <h1 className="text-center mb-8 text-3xl font-semibold">
          Twój koszyk jest pusty
        </h1>
        <Link to="/sklep">
          <button className=" mx-auto block py-5 px-2 rounded bg-buttonBgc w-40 text-white hover:bg-red-700 transition duration-300">
            Przejdź do sklepu
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="container mx-auto my-9 px-[5px] w-4/5">
      <div>{basketQty}</div>
      {basket.map((product) => {
        return (
          <ProductInBasket
            key={product.id}
            product={product}
            changeAmountProduct={changeAmountProduct}
            removeProductFromBasket={removeProductFromBasket}
          />
        );
      })}

      <TotalAmaunts total={total_amount} />
      <div className="flex justify-between">
        <Link to="/sklep">
          <button className=" bg-buttonBgc my-5 mr- py-2 px-4 rounded text-white hover:bg-red-700 transition-colors duration-300">
            Powrót do sklepu
          </button>
        </Link>

        <button
          className=" bg-stone-950 my-5 mr- py-2 px-4 rounded text-white hover:bg-stone-900 transition-colors duration-300"
          onClick={cleanBasket}
        >
          Wyczyść koszyk
        </button>
      </div>
    </div>
  );
};

export default BasketPage;
