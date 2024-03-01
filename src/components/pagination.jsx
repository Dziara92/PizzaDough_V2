/* eslint-disable react/prop-types */
import { ArrowNext, ArrowPrev } from "../assets/arrows";

const Pagination = ({
  setCurrentPage,
  itemProducts,
  itemPerPage,
  currentPage,
}) => {
  const totalPage = Math.ceil(itemProducts.length / itemPerPage);

  const chanegePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPage) {
      setCurrentPage(newPage);
    }
  };

  const prevPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage((prev) => prev - 1);
  };
  const nextPage = () => {
    if (currentPage >= totalPage) return;
    setCurrentPage((prev) => prev + 1);
  };

  const pageNumbersRender = () => {
    const numberPage = [];
    for (let i = 1; i < totalPage + 1; i++) {
      numberPage.push(
        <li
          key={i}
          onClick={() => chanegePage(i)}
          className={`cursor-pointer list-none p-1 rounded ${
            currentPage === i && "bg-buttonBgc text-white"
          }`}
        >
          {i}
        </li>
      );
    }
    return numberPage;
  };

  return (
    <div className="mx-auto w-1/4 flex justify-center my-7">
      <ul className=" flex gap-2 ">
        <button
          className={`${
            currentPage <= 1 && "disabled text-neutral-300 cursor-default"
          }`}
          onClick={prevPage}
        >
          <ArrowPrev prop={"w-6 h-6"} />
        </button>
        {pageNumbersRender()}
        <button
          className={`${
            currentPage >= totalPage &&
            "disabled text-neutral-300 cursor-default"
          }`}
          onClick={nextPage}
        >
          <ArrowNext prop={"w-6 h-6"} />
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
