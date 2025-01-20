import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MemoryGameProvider } from "./context/ContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoryGameProvider>
      <App />
    </MemoryGameProvider>
  </StrictMode>
);
