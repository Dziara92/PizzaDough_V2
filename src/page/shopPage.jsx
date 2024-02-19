import { useContextShop } from "../utility/contextShop";
import Loading from "../components/loading";
import Products from "../components/products";

const ShopPage = () => {
  const { dataProduct, itemProducts, error, loading, setItemProducts } =
    useContextShop();

  const filterCategory = (e) => {
    let value = e.target.value;
    if (value === "All") {
      setItemProducts(dataProduct);
    }

    if (value === "Mąka") {
      const newProduct = dataProduct.filter((item) => item.category === value);
      setItemProducts(newProduct);
    }

    if (value === "Sprzęt") {
      const newProduct = dataProduct.filter((item) => item.category === value);
      setItemProducts(newProduct);
    }
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
          <select className=" block px-3 py-2 w-2/4" onChange={filterCategory}>
            <option value="All">Wszystko</option>
            <option value="Mąka">Mąki</option>
            <option value="Sprzęt">Sprzęt</option>
          </select>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="flex flex-col mt-10 flex-wrap">
            {itemProducts.map((item) => {
              return <Products key={item.id} {...item} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
