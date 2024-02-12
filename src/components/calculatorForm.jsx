/* eslint-disable react/prop-types */
import { useState } from "react";
import { handleNumberForm } from "../utility/handleNumberForm";

const CalculatorForm = ({ setResult }) => {
  const [numberOfPizza, setNumberOfPizza] = useState(1);
  const [doughGrams, setDoughGrams] = useState(240);
  const [doughMoisture, setdoughMoisture] = useState(65);

  const handleCalculate = (e) => {
    e.preventDefault();
    let flour = doughGrams * numberOfPizza;
    let watter = (flour * doughMoisture) / 100;
    let salt = ((flour * 1.8) / 100).toFixed(1);
    watter = (flour - watter + 10).toFixed(0);
    flour = (flour - watter - salt).toFixed(0);

    setResult({ flour, watter, salt });
  };

  return (
    <form className="flex flex-col w-4/5 mx-auto" onSubmit={handleCalculate}>
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
        Oczekiwana waga jednej kulki [g]
      </label>
      <input
        type="number"
        name="doughGrams"
        value={doughGrams}
        onChange={(e) => handleNumberForm(e, setDoughGrams)}
        className=" mb-5 p-1 bg-white border-[1px] rounded"
      />
      <label htmlFor="doughMoisture" className=" mb-1">
        Wilgotność ciasta w [%]
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
  );
};

export default CalculatorForm;
