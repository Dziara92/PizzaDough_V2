import { useState } from "react";
import CalculatorForm from "../components/calculatorForm";

const CalculatorPage = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="container mx-auto my-9 px-[5px] w-4/5 md:mt-20">
      <h1 className=" animate-slideDown text-center mb-8 text-3xl font-semibold md:text-5xl md:mb-16">
        Kalkulator Pizzy
      </h1>
      <CalculatorForm setResult={setResult} />
      {result && (
        <div className=" my-4 mx-auto px-[8px] border-[1px] py-1 rounded animate-slideDown lg:w-3/4">
          <h4 className=" font-semibold  my-5 md:text-2xl">Potrzebujesz:</h4>
          <hr className="  mb-5" />
          <p className=" font-semibold pb-2 md:text-xl">Mąka: {result.flour}</p>
          <p className=" font-semibold pb-2 md:text-xl">
            Woda: {result.watter}
          </p>
          <p className=" font-semibold pb-2 md:text-xl">Sól: {result.salt}</p>
          <p className=" font-semibold md:text-xl">Drożdże: {result.yeast}</p>
        </div>
      )}
    </div>
  );
};

export default CalculatorPage;
