import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./tailindexwind.css";
import App from "./App.tsx";

const rootElement = document.createElement("div");
rootElement.className = "container";
document.body.appendChild(rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
