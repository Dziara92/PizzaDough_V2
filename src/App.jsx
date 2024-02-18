import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ContactPage from "./page/contactPage";
import MainPage from "./page/mainPage";
import ShopPage from "./page/shopPage";
import CalculatorPage from "./page/calculatorPage";
import SinglePage from "./page/singlePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="shop/:name" element={<SinglePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
