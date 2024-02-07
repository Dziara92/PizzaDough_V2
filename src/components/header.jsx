import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="bg-primaryBgc py-3 ">
      <div className="container flex flex-col justify-center items-center xsm:flex-row xsm:justify-between xsm:items-center mx-auto px-[5px] ">
        <div>
          <h1 className="text-white text-2xl text-center py-5 font-primaryFont">
            Pizza dough calculators
          </h1>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
