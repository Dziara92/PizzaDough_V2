/* eslint-disable react/prop-types */
import { menu } from "../data/dataFile";
import { IconBar, IconCloseBar } from "../assets/iconsMobileMenuBar";
import { IconBasket } from "../assets/iconBasket";
import { Link } from "react-router-dom";
import { useBasketContext } from "../context/basketContext";

const Navigation = ({ isOpenMenu, setIsOpenMenu }) => {
  const { basketQty } = useBasketContext();
  return (
    <div>
      <button
        className=" w-8 h-8 border-0 px-6 py-4 rounded-[3px] bg-buttonBgc hover:bg-red-700 transition ease-linear duration-200 text-white  text-center relative md:hidden"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <IconBar isOpenMenu={isOpenMenu} />
        <IconCloseBar isOpenMenu={isOpenMenu} />
      </button>

      <ul className="hidden md:flex gap-7 items-center ">
        <Link to="koszyk">
          <button className="flex mx-auto my-5 text-white gap-[4px]">
            <IconBasket />
            {basketQty > 0 ? (
              <span className=" bg-buttonBgc rounded-[20%] leading-none p-1 ">
                {basketQty}
              </span>
            ) : null}
          </button>
        </Link>
        {menu.map((menu) => {
          return (
            <Link to={menu.url} key={menu.id}>
              <li className="group cursor-pointer text-white transition ease-linear duration-200  :hover:text-gray-200 relative ">
                {menu.name}
                <span className=" absolute -bottom-[7px] -left-[10px] w-[0] h-[2px] transition-all ease-linear duration-300 bg-buttonBgc  group-hover:w-[100%] group-hover:left-0"></span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
