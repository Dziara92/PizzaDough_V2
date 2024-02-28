/* eslint-disable react/prop-types */

const TotalAmaunts = ({ total }) => {
  return (
    <div className="w-full my-6 px-3 py-5 border-[1px]   animate-slideDown">
      <p className=" text-right text-xl">Podsumowanie</p>
      <hr className=" my-3" />
      <p className=" text-right text-2xl">{total} zł</p>
    </div>
  );
};

export default TotalAmaunts;
