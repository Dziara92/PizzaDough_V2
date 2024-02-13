import { useState } from "react";
import CalculatorForm from "../components/calculatorForm";

const CalculatorPage = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="container mx-auto my-9 px-[5px] w-4/5">
      <h1 className=" animate-slideDown text-center mb-8 text-3xl font-semibold">
        Kalkulator Pizzy
      </h1>
      <CalculatorForm setResult={setResult} />
      {result && (
        <div className=" my-4 mx-auto px-[8px] border-[1px] py-1 rounded animate-slideDown">
          <p className=" font-semibold pb-2">Mąka: {result.flour}</p>
          <p className=" font-semibold pb-2"> Woda: {result.watter}</p>
          <p className=" font-semibold pb-2">Sól: {result.salt}</p>
          <p className=" font-semibold">Drożdże: {result.yeast}</p>
        </div>
      )}
    </div>
  );
};

export default CalculatorPage;
