/* eslint-disable react/prop-types */
import { menu } from "../data/dataFile";
const MobileNavigation = ({ isOpenMenu }) => {
  return (
    <div
      className={
        isOpenMenu
          ? "transition-all absolute top-[96px] right-0  bg-orange-700"
          : "transition-all absolute top-[96px] -right-32 bg-orange-700"
      }
    >
      <ul>
        {menu.map((menu) => {
          return <li key={menu.id}>{menu.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default MobileNavigation;
