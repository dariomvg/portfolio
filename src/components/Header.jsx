import { useContext, useState } from "react";
import "../styles/Header.scss";
import imgSol from "../assets/icons/icon-sol.svg";
import imgLuna from "../assets/icons/icon-luna.png";
import menu from "../assets/icons/icon-menu.svg";
import cerrarMenu from "../assets/icons/icon-eliminar.svg";
import { ThemeContext } from "../contexts/ThemeContext";

export function Header() {
  const [active, setActive] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleMenu = () => {
    setActive(!active);
  };

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <>
      <header className={`header-menu ${theme ? "dark" : ""}`}>
        <nav className="navbar">
          {active ? (
            <img
              src={cerrarMenu}
              alt="imagen de una x"
              className="menu"
              onClick={handleMenu}
            />
          ) : (
            <img
              src={menu}
              alt="imagen de un menu"
              className="menu"
              onClick={handleMenu}
            />
          )}
          <div className={`box-enlaces ${active ? "active" : ""}`}>
            <a className="enlaces-nav" href="#home">
              Home
            </a>
            <a className="enlaces-nav" href="#projects">
              Projects
            </a>
            <a className="enlaces-nav" href="#skills">
              Skills
            </a>
            {!theme ? (
              <img
                src={imgLuna}
                width={30}
                height={30}
                alt="imagen de una luna"
                className="imgTheme"
                onClick={handleTheme}
              />
            ) : (
              <img
                src={imgSol}
                width={30}
                height={30}
                alt="imagen de un sol"
                className="imgTheme"
                onClick={handleTheme}
              />
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
