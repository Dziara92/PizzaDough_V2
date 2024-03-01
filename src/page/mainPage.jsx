import { ArrowNext, ArrowPrev } from "../assets/arrows";

const MainPage = () => {
  return (
    <div className="container mx-auto my-9 px-[5px] w-4/5 md:mt-20 ">
      <div className=" w-full h-96 bg-black relative">
        <button className=" absolute top-2/4 left-5 -translate-y-1/2 text-white w-   ">
          <ArrowPrev prop={"w-9 h-9"} />
        </button>
        <button className=" absolute top-2/4 right-5 -translate-y-1/2 text-white ">
          <ArrowNext prop={"w-9 h-9"} />
        </button>
      </div>
    </div>
  );
};

export default MainPage;
