import Loading from "../components/loading";
import { useState, useEffect } from "react";

const linkData = "http://localhost:3001/produkty";

const ShopPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(linkData)
      .then((response) => {
        if (!response.ok) {
          throw Error(`ups! Coś poszło nie tak!  ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

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
