import React from "react";
import ReactDOM from "react-dom/client";
import {FehuApp} from "./FehuApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FehuApp />
  </React.StrictMode>
);
