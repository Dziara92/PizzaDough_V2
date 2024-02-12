import { useState } from "react";
import CalculatorForm from "../components/calculatorForm";

const CalculatorPage = () => {
  const [result, setResult] = useState({});
  console.log(result);
  return (
    <div className="container mx-auto my-9 px-[5px]">
      <CalculatorForm setResult={setResult} />
      <p>mąka {result?.flour}</p>
      <p>woda {result?.watter}</p>
      <p>sól {result?.salt}</p>
    </div>
  );
};

export default CalculatorPage;
