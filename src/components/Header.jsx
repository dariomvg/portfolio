import { useContext, useState } from "react";
import "../styles/Header.scss";
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
        <section className="section-responsive">
          <div className="logo">
            <h1 className="first-name">Dario</h1>
            <h1 className="last-name">MARTINEZ</h1>
          </div>
          {active ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="menu"
              onClick={handleMenu}
              viewBox="0 0 50 50"
              width="50px"
              height="50px">
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="menu"
              onClick={handleMenu}
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
              >
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
            </svg>
          )}
        </section>

        <nav className="navbar">
          <div className={`box-enlaces ${active ? "active" : ""}`}>
            <a className="enlaces-nav" href="#home">
              Principal
            </a>
            <a className="enlaces-nav" href="#projects">
              Proyectos
            </a>
            <a className="enlaces-nav" href="#skills">
              Habilidades
            </a>
            <label className="div-theme">
              <input
                type="checkbox"
                className="input-theme"
                onClick={handleTheme}
              />
              <span className="span-theme"></span>
            </label>
          </div>
        </nav>
      </header>
    </>
  );
}
