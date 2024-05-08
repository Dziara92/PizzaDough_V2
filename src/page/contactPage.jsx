import { useState } from "react";

const ContactPage = () => {
  const [checkNum, setCheckNum] = useState(false);
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    if (name === "tel" && !/^\d+$/.test(value)) {
      return;
    }

    setDataForm({ ...dataForm, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setDataForm({
      name: "",
      email: "",
      tel: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto my-9 px-[5px] w-4/5">
      <h1 className=" animate-slideDown text-center mb-8 text-3xl font-semibold md:text-5xl md:mb-16">
        Kontakt
      </h1>
      <section className="container mx-auto my-9 px-[5px] w-4/5 md:mt-20 md:flex md:gap-14 lg:gap-0">
        <div className=" text-center md:text-left lg:w-1/2 lg:text-lg">
          <p className=" mb-2">biuro@pizzadough.com</p>
          <p className=" mb-4">+33 819 XXX 931</p>
          <p className=" mb-2">via Padole 218, Vincenza </p>
          <p className=" mb-2">poniedziałek - niedziela </p>
          <p>7/24</p>
        </div>
        <div className=" mt-8 flex flex-col md:mt-0 lg:w-1/2">
          <form onSubmit={formSubmit} className="flex flex-col">
            <input
              type="text"
              placeholder="Imię i Nazwisko"
              className=" mb-4 p-2 text-sm outline-none text-gray-700 border-2"
              name="name"
              value={dataForm.name}
              onChange={handleFormChange}
            />
            <input
              type="email"
              placeholder="E-mail"
              className=" mb-4 p-2 text-sm outline-none text-gray-700 border-2"
              name="email"
              value={dataForm.email}
              onChange={handleFormChange}
            />
            <input
              type="text"
              placeholder="Telefon"
              className=" mb-4  p-2 text-sm outline-none text-gray-700 border-2"
              name="tel"
              value={dataForm.tel}
              onChange={handleFormChange}
            />
            <textarea
              name="message"
              placeholder="Wiadomość"
              className=" p-2 text-sm outline-none text-gray-700 border-2"
              value={dataForm.message}
              onChange={handleFormChange}
            ></textarea>
            <button className=" my-6 p-2 uppercase bg-buttonBgc text-white text-sm lg:text-base lg:w-1/2 xl:w-[45%]">
              Wyślij
            </button>
          </form>
          <p className=" text-xs text-slate-600 text-center md:text-left">
            Administratorem danych osobowych podanych w formularzu jest
            PizzaDough Company, via Padole 218, Vincenza. Zasady przetwarzania
            danych oraz Twoje uprawnienia z tym związane opisane są w polityce
            prywatności.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
