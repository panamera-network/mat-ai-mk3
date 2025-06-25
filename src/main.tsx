import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind CSS
import MainLayout from "./layout/MainLayout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>
);
