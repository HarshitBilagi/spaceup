import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router1 } from "react-router-dom";
import App from "./components/App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router1>
    <App />
  </Router1>
);
