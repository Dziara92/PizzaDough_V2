import { useBasketContext } from "../utility/basketContext";
const BasketPage = () => {
  const { productInBasket, basketQty } = useBasketContext();

  if (productInBasket.length === 0) {
    return (
      <div className="container mx-auto my-9 px-[5px] w-4/5">
        <h1 className=" animate-slideDown text-center mb-8 text-3xl font-semibold">
          Twój koszyk jest pusty
        </h1>
      </div>
    );
  }
  return (
    <div className="container mx-auto my-9 px-[5px] w-4/5">
      <div>{basketQty}</div>
      {productInBasket.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default BasketPage;
