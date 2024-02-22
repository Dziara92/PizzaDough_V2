import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextShopProvider from "./utility/contextShop.jsx";
import BasketContextProvider from "./utility/basketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextShopProvider>
      <BasketContextProvider>
        <App />
      </BasketContextProvider>
    </ContextShopProvider>
  </React.StrictMode>
);
