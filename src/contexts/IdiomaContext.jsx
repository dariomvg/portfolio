import { createContext, useState } from "react";

export const IdiomaContext = createContext();

function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState("es");

  const data = { idioma, setIdioma };
  return (
    <IdiomaContext.Provider value={data}>{children}</IdiomaContext.Provider>
  );
}

export default IdiomaProvider;
