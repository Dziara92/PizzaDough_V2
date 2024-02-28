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
    <div className="container mx-auto my-9 px-[5px] w-4/5 md:mt-20 ">
      <h1 className=" animate-slideDown text-center mb-8 text-3xl font-semibold md:text-5xl md:mb-16">
        Koszyk
      </h1>
      <div className=" px-3 py-3 mb-5 text-right text-lg border md:w-2/3 md:mx-auto md:mb-12 lg:w-2/4 lg:mx-auto">
        <p>
          W koszyku są{" "}
          <span className=" font-bold text-buttonBgc">{basketQty}</span>{" "}
          produkty
        </p>
      </div>
      <div className=" w-[98%] mx-auto md:flex md:gap-[2px] md:flex-wrap">
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
      </div>

      <TotalAmaunts total={total_amount} />
      <div className="flex justify-between md:w-2/3 md:mx-auto md:mb-12 lg:w-2/4 lg:mx-auto">
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
