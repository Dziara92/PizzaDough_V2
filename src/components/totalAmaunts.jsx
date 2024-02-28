/* eslint-disable react/prop-types */

const TotalAmaunts = ({ total }) => {
  return (
    <div className="w-full my-6 px-3 py-5 border-[1px]   animate-slideDown md:w-2/3 md:mx-auto md:mb-12 lg:w-2/4 lg:mx-auto">
      <p className=" text-right text-xl">Podsumowanie</p>
      <hr className=" my-3" />
      <p className=" text-right text-2xl">{total} zł</p>
    </div>
  );
};

export default TotalAmaunts;
