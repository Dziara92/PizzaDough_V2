const fetchProducts = (
  url,
  setDataProduct,
  setItemProducts,
  setLoading,
  setError
) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(`ups! Coś poszło nie tak!  ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      setDataProduct(data);
      setItemProducts(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
};

export default fetchProducts;
