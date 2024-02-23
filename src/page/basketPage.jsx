import { useBasketContext } from "../context/basketContext";
import { IconTrash } from "../assets/iconTrash";
import { Link } from "react-router-dom";
const BasketPage = () => {
  const {
    basket,
    basketQty,
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
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.amount * product.price}</p>

            <div className="flex flex-col">
              <div className="flex items-center border w-2/4 mx-auto mt-5 h-8">
                <button
                  className="border-r w-[25%] h-full"
                  name="plus"
                  onClick={(e) => {
                    changeAmountProduct(e, product.id, product.amount);
                  }}
                >
                  +
                </button>
                <p className=" w-[50%] text-center">{product.amount}</p>
                <button
                  className=" border-l w-[25%] h-full"
                  name="minus"
                  onClick={(e) => {
                    changeAmountProduct(e, product.id, product.amount);
                  }}
                >
                  -
                </button>
              </div>
              <button onClick={() => removeProductFromBasket(product.id)}>
                <IconTrash />
              </button>
            </div>
          </div>
        );
      })}
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
