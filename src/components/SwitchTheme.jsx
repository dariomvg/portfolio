import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../styles/switch.scss";

export const SwitchTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <label className="switch">
      <input type="checkbox" onClick={handleTheme} />
      <span className="slider"></span>
    </label>
  );
};
