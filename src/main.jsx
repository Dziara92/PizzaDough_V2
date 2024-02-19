import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextShopProvider from "./utility/contextShop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextShopProvider>
      <App />
    </ContextShopProvider>
  </React.StrictMode>
);
