/* eslint-disable react/prop-types */
import { menu } from "../data/dataFile";
import { IconBar, IconCloseBar } from "../assets/iconsMobileMenuBar";

const Navigation = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <div>
      <button
        className=" w-8 h-8 border-0 px-6 py-4 rounded-[3px] bg-buttonBgc text-white  text-center  relative md:hidden"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <IconBar isOpenMenu={isOpenMenu} />
        <IconCloseBar isOpenMenu={isOpenMenu} />
      </button>
      <ul className="hidden md:flex gap-5 text-white cursor-pointer">
        {menu.map((menu) => {
          return <li key={menu.id}>{menu.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Navigation;
