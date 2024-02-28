/* eslint-disable react/prop-types */
import { IconTrash } from "../assets/iconTrash";

const ProductInBasket = ({
  product,
  changeAmountProduct,
  removeProductFromBasket,
}) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.amount * product.price}</p>
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
