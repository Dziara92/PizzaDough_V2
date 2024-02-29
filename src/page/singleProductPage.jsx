import { useParams } from "react-router-dom";
import { useContextShop } from "../context/contextShop";
import { useBasketContext } from "../context/basketContext";
import Loading from "../components/loading";
import { ArrowUP, ArrowDown } from "../assets/arrows";
import { useEffect, useState } from "react";
const SingleProductPage = () => {
  const { dataProduct, loading } = useContextShop();
  const { addProductToBasket } = useBasketContext();
  const { nameUrl } = useParams();
  const [amount, setAmount] = useState(1);
  const [addToBasket, setAddToBasket] = useState(false);

  const onChangeHandleItemsQty = (e) => {
    let numValue = parseInt(e.target.value);
    if (numValue >= quantity) {
      setAmount(quantity);
      return;
    } else {
      setAmount(numValue);
    }
  };

  const handleItemsQty = (e) => {
    let nameTarget = e.currentTarget.name;
    if (nameTarget === "plus") {
      setAmount((oldAmount) => {
        let newAmount = oldAmount + 1;
        if (newAmount > quantity) {
          newAmount = quantity;
        }
        return newAmount;
      });
    } else {
      setAmount((oldAmount) => {
        let newAmount = oldAmount - 1;
        if (newAmount < 1) {
          newAmount = 1;
        }
        return newAmount;
      });
    }
  };

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setAddToBasket(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [addToBasket]);

  if (loading) {
    return (
      <div className=" container mx-auto my-9 px-7">
        <Loading />
      </div>
    );
  }

  const product = dataProduct.find((product) => product.nameUrl === nameUrl);
  const { name, desc, quantity, price, id, img } = product;

  return (
    <div className=" container mx-auto my-9 px-7 md:mt-20">
      <h1 className=" my-7 text-center text-2xl leading-9 font-bold md:text-3xl lg:mb-14">
        {name}
      </h1>
      <div className=" md:flex md:items-start">
        <div className="my-8 md:w-2/4">
          <img
            src={img}
            alt={name}
            className=" w-3/5 mx-auto sm:w-2/5 md:w-4/5 lg:w-2/3 xl:w-3/6 2xl:w-[45%]"
          />
        </div>
        <div className=" md:flex md:flex-col md:w-2/4">
          <p className=" my-2">Dostępność: {quantity} szt.</p>
          <p className="font-bold">Cena:</p>
          <h4 className=" mb-7 text-4xl font-bold">{price} zł/szt.</h4>
          <div className="flex items-center  gap-2 my-8 sm:w-3/4 sm:mx-auto ">
            <div className="flex items-center border w-2/4 h-14 ">
              <input
                className="input-num w-[50%] text-xl text-[#707070] ml-4 outline-none"
                type="number"
                min="1"
                max={quantity}
                value={amount}
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
              className=" transition-colors duration-300 bg-buttonBgc text-white text-2xl w-3/4 h-14 rounded hover:bg-red-700 relative"
              onClick={() => {
                addProductToBasket(id, amount, product), setAddToBasket(true);
              }}
            >
              <span
                className={`w-4/5 absolute -top-[80px] left-2/4 -translate-x-2/4 py-2 px-4 rounded bg-amber-400 text-sm transition-opacity duration-300 opa opacity-0 xsm:-top-[60px] md:-top-[80px] lg:-top-[60px] 2xl:-top-[40px] ${
                  addToBasket && "opacity-100"
                }`}
              >
                Produkt dodany do koszyka!
              </span>
              Zamów
            </button>
          </div>
          <p className="font-bold text-2xl mb-2 text-buttonBgc">Opis:</p>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
