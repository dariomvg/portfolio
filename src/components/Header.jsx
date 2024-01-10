import { useContext, useState } from "react";
import { IdiomaContext } from "../contexts/IdiomaContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { translations } from "../constants/lenguages.js";
import { SwitchTheme } from "./SwitchTheme";
import iconMenu from "../assets/icons/icon-menu.svg";
import iconCerrar from "../assets/icons/icon-x.svg";
import iconIdioma from "../assets/icons/language-outline.svg";
import "../styles/Header.scss";

export function Header() {
  const [active, setActive] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { idioma, setIdioma } = useContext(IdiomaContext);

  const handleMenu = () => {
    setActive(!active);
  };

  const changeLanguage = (translation) => {
    setIdioma(translation);
  };

  return (
    <header className={`header-menu ${theme ? "dark" : ""}`}>
      <section className="section-responsive">
        {!active ? (
          <img
            src={iconMenu}
            alt="icon menu"
            onClick={handleMenu}
            width={50}
            height={50}
            className="menu"
            loading="lazy"
          />
        ) : (
          <img
            src={iconCerrar}
            alt="icon x"
            onClick={handleMenu}
            width={50}
            height={50}
            className="menu"
            loading="lazy"
          />
        )}
      </section>

      <nav className="navbar">
        <div className={`box-enlaces ${active ? "active" : ""}`}>
          <a className="enlaces-nav" href="#home">
            {translations[idioma].principal}
          </a>
          <a className="enlaces-nav" href="#projects">
            {translations[idioma].proyectos}
          </a>
          <a className="enlaces-nav" href="#skills">
            {translations[idioma].habilidades}
          </a>
          <a className="enlaces-nav" href="#contact">
            {translations[idioma].contacto}
          </a>
          <img
            src={iconIdioma}
            alt="icon lenguage"
            width={30}
            height={30}
            title="cambio de idioma"
            className="icon-idioma"
            onClick={() => changeLanguage(idioma === "es" ? "en" : "es")}
            loading="lazy"
          />
          <SwitchTheme />
        </div>
      </nav>
    </header>
  );
}
