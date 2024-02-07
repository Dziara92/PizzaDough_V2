import { menu } from "../data/dataFile";

const Navigation = () => {
  return (
    <div>
      <button className="border-0 px-2 py-1 rounded-[3px] bg-buttonBgc text-white  text-center md:hidden">
        send
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
