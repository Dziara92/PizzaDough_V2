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
    <div className="p-5 border-[1px] mb-3 border-slate-200 rounded">
      <Link to={`produkt/${name}`}>
        <h2 className=" font-semibold text-xl mb-5 hover:text-zinc-800 transition-colors duration-300 ">
          {flour}
        </h2>
      </Link>
      <p className="mb-4">
        <span className=" font-semibold ">Kategoria:</span> {category}
      </p>
      <p className=" leading-7">{shortDesc(desc)}</p>
      <Link to={`produkt/${name}`}>
        <button className=" my-6 px-4 py-2 mx-auto block bg-buttonBgc rounded text-white hover:bg-red-700 hover:shadow-lg transition duration-300">
          Zobcz produkt
        </button>
      </Link>
    </div>
  );
};

export default Products;
