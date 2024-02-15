const fetchProduct = (linkData, setLoading, setError, setData) => {
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
};

export default fetchProduct;
