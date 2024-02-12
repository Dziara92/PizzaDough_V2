import { useState } from "react";
import { handleNumberForm } from "../utility/handleNumberForm";

const CalculatorPage = () => {
  const [numberOfPizza, setNumberOfPizza] = useState(1);
  const [doughGrams, setDoughGrams] = useState(240);
  const [doughMoisture, setdoughMoisture] = useState(65);

  return (
    <div className="container mx-auto my-9 px-[5px]">
      <form className="flex flex-col w-4/5 mx-auto">
        <label htmlFor="pizza_style" className=" mb-1">
          Rodzaj pizzy
        </label>
        <select
          name="pizza_style"
          className=" mb-5 p-1 bg-white border-[1px] rounded"
        >
          <option value="Neapolitan">Neapolitan</option>
          <option value="New York">New York</option>
        </select>
        <label htmlFor="type_of_yeast" className=" mb-1">
          Rodzaj drożdzy
        </label>
        <select
          name="type_of_yeast"
          className=" mb-5 p-1 bg-white border-[1px] rounded"
        >
          <option value="Neapolitan">Świeże</option>
          <option value="New York">Suche</option>
        </select>
        <label htmlFor="numberOfPizza" className=" mb-1">
          Ile kulek na pizze
        </label>
        <input
          type="number"
          name="numberOfPizza"
          value={numberOfPizza}
          onChange={(e) => handleNumberForm(e, setNumberOfPizza)}
          className=" mb-5 p-1 bg-white border-[1px] rounded"
        />
        <label htmlFor="doughGrams" className=" mb-1">
          Ile kulek na pizze
        </label>
        <input
          type="number"
          name="doughGrams"
          value={doughGrams}
          onChange={(e) => handleNumberForm(e, setDoughGrams)}
          className=" mb-5 p-1 bg-white border-[1px] rounded"
        />
        <label htmlFor="doughMoisture" className=" mb-1">
          Wilgotność ciasta w %
        </label>
        <input
          type="number"
          name="doughMoisture"
          value={doughMoisture}
          onChange={(e) => handleNumberForm(e, setdoughMoisture)}
          className=" mb-5 p-1 bg-white border-[1px] rounded"
        />
        <button className=" transition ease-linear duration-150 w-2/5 px-3 py-2 my-5 bg-buttonBgc font-semibold text-white self-center rounded hover:bg-red-700 ">
          Przelicz
        </button>
      </form>
    </div>
  );
};

export default CalculatorPage;
