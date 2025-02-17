import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/Shopcontext";  {/* Corrected import here */}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>  {/* Correct provider component */}
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
