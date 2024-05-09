import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ContactPage from "./page/contactPage";
import MainPage from "./page/mainPage";
import ShopPage from "./page/shopPage";
import CalculatorPage from "./page/calculatorPage";
import SingleProductPage from "./page/singleProductPage";
import BasketPage from "./page/basketPage";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="kalkulator" element={<CalculatorPage />} />
        <Route path="sklep" element={<ShopPage />} />
        <Route path="sklep/:nameUrl" element={<SingleProductPage />} />
        <Route path="koszyk" element={<BasketPage />} />
        <Route path="kontakt" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
