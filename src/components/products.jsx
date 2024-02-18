import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Products = ({ flour, category, desc, name }) => {
  const shortDesc = (desc) => {
    let text = desc.split("");
    if (text.length > 120) {
      return text.slice(0, 120).join("") + "...";
    } else {
      return text;
    }
  };
  return (
    <div className=" grow max-w-[25%] p-5">
      <h2 className=" font-semibold text-xl mb-5">{flour}</h2>
      <p className="mb-4">
        <span className=" font-semibold ">Kategoria:</span> {category}
      </p>
      <p>{shortDesc(desc)}</p>
      <Link to={`${name}`}>
        <button className=" my-6 mx-auto block">Zobcz produkt</button>
      </Link>
    </div>
  );
};

export default Products;
