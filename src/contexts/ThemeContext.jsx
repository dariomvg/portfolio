import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(true);

  const data = { theme, setTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
