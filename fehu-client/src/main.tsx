import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { RegisterPage } from "@auth/pages/RegisterPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RegisterPage />
  </React.StrictMode>
);
