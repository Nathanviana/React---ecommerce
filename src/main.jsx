import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routers from "./routes";  // Importe o componente Routers

import "./globalStyles.css";  // Caso haja estilos globais

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routers />  
  </StrictMode>
);
