/* eslint-disable react/prop-types */
import { menu } from "../data/dataFile";
const MobileNavigation = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <div
      className={
        isOpenMenu
          ? "transition-all duration-300 absolute top-[131px] right-0 bg-buttonBgc w-[100%]   xsm:top-[96px] md:hidden"
          : "transition-all duration-300 absolute top-[131px] -right-[500px] bg-buttonBgc w-[100%] xsm:top-[96px] xsm:-right-[800px] md:hidden"
      }
    >
      <ul className="w-1/2 mx-auto my-[20px] flex flex-col items-center justify-center gap-4 text-lg  font-semibold bg-buttonBgc">
        {menu.map((menu) => {
          return (
            <li
              className="cursor-pointer text-white transition ease-linear duration-100 hover:-translate-y-[1px] "
              key={menu.id}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              {menu.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNavigation;
