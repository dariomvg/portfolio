import "../styles/Skills.scss";
import imgHTML from "../assets/icons/icon-html.svg";
import imgCSS from "../assets/icons/icon-css.svg";
import imgJS from "../assets/icons/icon-js.svg";
import imgREACT from "../assets/icons/icon-react.svg";
import imgSASS from "../assets/icons/icon-sass.svg";
import imgGIT from "../assets/icons/icon-git.svg";
import imgGITHUB from "../assets/icons/icon-github.svg";
import imgTERMINAL from "../assets/icons/icon-terminal.png";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export function Skills() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`section-skills ${theme ? "dark" : ""}`} id="skills">
      <h2 className="title-skills">Habilidades</h2>
      <section className="section-list">
        <ul className="list-tecnologies">
          <li className="item-tecnology">
            <span>HTML</span>
            <img src={imgHTML} width={70} height={70} alt="Icono de HTML" />
          </li>
          <li className="item-tecnology">
            <span>CSS</span>
            <img src={imgCSS} width={70} height={70} alt="Icono de CSS" />
          </li>
          <li className="item-tecnology">
            <span>JavaScript</span>
            <img src={imgJS} width={70} height={70} alt="Icono de JavaScript" />
          </li>
          <li className="item-tecnology">
            <span>React</span>
            <img src={imgREACT} width={70} height={70} alt="Icono de React" />
          </li>
          <li className="item-tecnology">
            <span>Sass</span>
            <img src={imgSASS} width={70} height={70} alt="Icono de Sass" />
          </li>
          <li className="item-tecnology">
            <span>Git</span>
            <img src={imgGIT} width={70} height={70} alt="Icono de Git" />
          </li>
          <li className="item-tecnology">
            <span>GitHub</span>
            <img src={imgGITHUB} width={70} height={70} alt="Icono de GitHub" />
          </li>
          <li className="item-tecnology">
            <span>Terminal</span>
            <img
              src={imgTERMINAL}
              width={70}
              height={70}
              alt="Icono de Terminal"
            />
          </li>

        </ul>
      </section>
    </section>
  );
}
