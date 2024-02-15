import Loading from "../components/loading";
import { useState, useEffect, useReducer } from "react";
import fetchProduct from "../utility/fetchProduct";
import filterCategory from "../utility/filterCategory";
import reducer from "../utility/producktReducer";

const linkData = "http://localhost:3001/produkty";

const ShopPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  useEffect(() => {
    fetchProduct(linkData, setLoading, setError, setData);
  }, []);

  // const initialState = {
  //   category: data,
  // };

  // const [state, dispatch] = useReducer(reducer, initialState);

  const handleCategory = (e) => {
    fetchProduct(linkData, setLoading, setError, setData);
    let category = e.target.value;
    filterCategory(category, data, setData);
  };

  if (error) {
    return (
      <div className="container mx-auto my-9 px-[5px] w-4/5">
        <h1 className=" animate-slideDown text-center mb-8 text-3xl font-semibold">
          <div className="container">{error && error.message}</div>
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-9 px-[5px] w-4/5">
      <h1 className=" animate-slideDown text-center mb-8 text-3xl font-semibold">
        Sklep
      </h1>
      <div className="container">
        <div className=" flex flex-row justify-center items-center gap-4 mb-6">
          <p className=" font-semibold">Kategorie:</p>
          <select className=" block px-3 py-2 w-2/4" onChange={handleCategory}>
            <option value="All">Wszystko</option>
            <option value="Mąka">Mąki</option>
            <option value="Sprzęt">Sprzęt</option>
          </select>
        </div>
        {loading ? (
          <Loading />
        ) : (
          data.map((item) => {
            return (
              <div key={item.id}>
                <p>
                  {item.id}. {item.flour}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ShopPage;
