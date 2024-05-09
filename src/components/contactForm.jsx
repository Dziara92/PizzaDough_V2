import { useState } from "react";

const ContactForm = () => {
  const [checkNum, setCheckNum] = useState(false);
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (!/^\d+$/.test(dataForm.tel)) {
      setCheckNum(true);
      return;
    }
    setCheckNum(false);
    setDataForm({
      name: "",
      email: "",
      tel: "",
      message: "",
    });
  };
  return (
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
        className={`${
          checkNum ? ` border-buttonBgc` : ""
        } mb-4  p-2 text-sm outline-none text-gray-700 border-2`}
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
  );
};

export default ContactForm;
