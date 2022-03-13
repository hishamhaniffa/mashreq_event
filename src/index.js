import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./assets/font.css";
import "./main.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
