import React from "react";
import ReactDOM from "react-dom/client";
import BlockForm from "./BlockForm";
import "./index.css";

const rootElement = document.createElement("div");
rootElement.className = "container";
document.body.appendChild(rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BlockForm />
  </React.StrictMode>
);
