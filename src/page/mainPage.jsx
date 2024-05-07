import Slider from "../components/slider";

const MainPage = () => {
  const slides = [
    {
      id: 1,
      heading: "Kalkulator składników",
      text: "Jeśli masz problem z odmierzeniem dokładnych proporcji nie ma problemu, mamy dla Ciebie kalkulator składników!",
      txtBtn: "Kalkulator",
      img: "../../public/Pizza_1.jpg",
      url: "/kalkulator",
    },
    {
      id: 2,
      heading: "Sklep",
      text: "Potrzebujesz składników, a może pieca, który wpiecze Twoja idealna pizze? Zapraszamy do naszego sklepu.",
      txtBtn: "Sklep",
      img: "../../public/Pizza_2.jpg",
      url: "/sklep",
    },
    {
      id: 3,
      heading: "Blog",
      text: "Lorem ipsum",
      txtBtn: "Lorem",
      img: "../../public/Pizza_3.jpg",
      url: "/",
    },
  ];
  return (
    <div className="container mx-auto my-9 px-[5px] w-4/5 md:mt-20 ">
      <Slider slides={slides} />
    </div>
  );
};

export default MainPage;
