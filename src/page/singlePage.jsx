import { useParams } from "react-router-dom";
const SinglePage = () => {
  const params = useParams();
  console.log(params);
  return <div>singlePage</div>;
};

export default SinglePage;
