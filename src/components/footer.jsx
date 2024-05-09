const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <footer className="bg-primaryBgc mt-16 min-h-24">
      <span className=" bg-lime-700 h-1 w-full block"></span>
      <span className=" bg-white h-1 w-full block"></span>
      <span className=" bg-buttonBgc h-1 w-full block"></span>
      <div className="container mx-auto text-white pb-3 py-7 flex flex-col gap-3 items-center ">
        <h4 className=" text-stone-400 font-bold text-2xl uppercase tracking-wider  ">
          Pizza dough
        </h4>
        <p className="text-stone-400 font-bold"> &copy; {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
