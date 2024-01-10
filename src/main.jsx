import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeProvider from "./contexts/ThemeContext.jsx";
import IdiomaProvider from "./contexts/IdiomaContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <IdiomaProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </IdiomaProvider>
  </ThemeProvider>
);
