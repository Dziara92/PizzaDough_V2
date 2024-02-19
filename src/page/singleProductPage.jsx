import { useParams } from "react-router-dom";
import { useContextShop } from "../utility/contextShop";
const SingleProductPage = () => {
  const { dataProduct } = useContextShop();
  const { name } = useParams();

  const { name: title, desc } = dataProduct.find(
    (product) => product.name === name
  );

  return (
    <div className=" p-7">
      <h1 className=" my-7 text-center text-2xl">{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default SingleProductPage;
