import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "./navigation";
import MobileNavigation from "./mobileNavigation";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="bg-primaryBgc py-3 relative ">
      <div className="container flex flex-col justify-center items-center xsm:flex-row xsm:justify-between xsm:items-center mx-auto px-[5px] ">
        <div onClick={() => setIsOpenMenu(false)}>
          <Link to="/">
            <h1 className="text-white text-2xl text-center py-5 font-primaryFont">
              Pizza dough calculators
            </h1>
          </Link>
        </div>
        <Navigation isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      </div>
      <MobileNavigation isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </header>
  );
};

export default Header;
