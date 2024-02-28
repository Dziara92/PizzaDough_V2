/* eslint-disable react/prop-types */
import { IconTrash } from "../assets/iconTrash";

const ProductInBasket = ({
  product,
  changeAmountProduct,
  removeProductFromBasket,
}) => {
  return (
    <div className=" mb-10 border p-2 md:w-[49%] md:mb-5 md:px-6 lg:w-[33%] ">
      <h2 className=" font-bold text-xl text-center">{product.name}</h2>
      <div className="my-8">
        <img src={product.img} alt={product.name} className=" w-3/5 mx-auto" />
      </div>
      <div className="flex justify-between my-4">
        <p>
          Cena: <span className="font-bold">{product.price} zł</span>
        </p>
        <p>
          Kwota:{" "}
          <span className="font-bold">{product.amount * product.price} zł</span>
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center border w-2/4 mx-auto mt-5 h-8">
          <button
            className="border-r w-[25%] h-full"
            name="plus"
            onClick={() => {
              changeAmountProduct(product.id, "plus");
            }}
          >
            +
          </button>
          <p className=" w-[50%] text-center">{product.amount}</p>
          <button
            className=" border-l w-[25%] h-full"
            name="minus"
            onClick={() => {
              changeAmountProduct(product.id, "minus");
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
};

export default ProductInBasket;
