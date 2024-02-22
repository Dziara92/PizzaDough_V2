import { useParams } from "react-router-dom";
import { useContextShop } from "../utility/contextShop";
import { useBasketContext } from "../utility/basketContext";
import Loading from "../components/loading";
import { ArrowUP, ArrowDown } from "../assets/arrows";
import { useState } from "react";
const SingleProductPage = () => {
  const { dataProduct, loading } = useContextShop();
  const { addProductToBasket } = useBasketContext();
  const { nameUrl } = useParams();
  const [itemsQty, setItemsQty] = useState(1);

  const onChangeHandleItemsQty = (e) => {
    let numValue = parseInt(e.target.value);
    if (numValue >= quantity) {
      setItemsQty(quantity);
      return;
    } else {
      setItemsQty(numValue);
    }
  };

  const handleItemsQty = (e) => {
    let nameTarget = e.currentTarget.name;
    if (nameTarget === "plus") {
      if (itemsQty >= quantity) return;
      setItemsQty(itemsQty + 1);
    } else {
      if (itemsQty <= 1) return;
      setItemsQty(itemsQty - 1);
    }
  };
  if (loading) {
    return (
      <div className=" container mx-auto my-9 px-7">
        <Loading />
      </div>
    );
  }
  const { name, desc, quantity, price, id } = dataProduct.find(
    (product) => product.nameUrl === nameUrl
  );
  return (
    <div className=" container mx-auto my-9 px-7">
      <h1 className=" my-7 text-center text-2xl">{name}</h1>
      <p className=" my-2">Dostępność: {quantity} szt.</p>
      <p className="font-bold">Cena:</p>
      <h4 className=" mb-7 text-4xl font-bold">{price}</h4>
      <div className="flex items-center  gap-2 my-8 sm:w-3/4 sm:mx-auto ">
        <div className="flex items-center border w-2/4 h-14 ">
          <input
            className="input-num w-[50%] text-xl text-[#707070] ml-4"
            type="number"
            min="1"
            max={quantity}
            value={itemsQty}
            onChange={(e) => onChangeHandleItemsQty(e)}
          />
          <div className="flex flex-col w-[50%] h-14 justify-center items-center border-l">
            <button
              className=" transition-colors duration-300 w-full h-full border-y  hover:bg-[#F6F6F6]"
              name="plus"
              onClick={(e) => handleItemsQty(e)}
            >
              <ArrowUP />
            </button>
            <button
              className="transition-colors duration-300 w-full h-full border-b hover:bg-[#F6F6F6] "
              name="minus"
              onClick={(e) => handleItemsQty(e)}
            >
              <ArrowDown />
            </button>
          </div>
        </div>
        <p className="w-1/4 text-[#707070]">szt.</p>
        <button
          className=" transition-colors duration-300 bg-buttonBgc text-white text-2xl w-3/4 h-14 rounded hover:bg-red-700"
          onClick={() => addProductToBasket(id)}
        >
          Zamów
        </button>
      </div>
      <p className="font-bold text-2xl mb-2 text-buttonBgc">Opis:</p>
      <p>{desc}</p>
    </div>
  );
};

export default SingleProductPage;
