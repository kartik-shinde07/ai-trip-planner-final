import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import "./styles/variables.css";
import "./styles/theme.css";
import "./styles/animations.css";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(

  // BrowserRouter enables routing in the app
  <BrowserRouter>
    <App />
  </BrowserRouter>

);