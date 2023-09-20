import "../styles/Skills.scss";
import imgHTML from "../assets/icons/icon-html.svg";
import imgCSS from "../assets/icons/icon-css.svg";
import imgJS from "../assets/icons/icon-js.svg";
import imgREACT from "../assets/icons/icon-react.svg";
import imgSASS from "../assets/icons/icon-sass.svg";
import imgBOOTSTRAP from "../assets/icons/icon-bootstrap.svg";
import imgGIT from "../assets/icons/icon-git.svg";
import imgGITHUB from "../assets/icons/icon-github.svg";
import imgTERMINAL from "../assets/icons/icon-terminal.png";
import imgGITHUBPAGES from "../assets/icons/icon-githubPages.svg";
import imgNETLIFY from "../assets/icons/icon-netlify.svg";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useEffect } from "react";



export function Skills() {

  const {theme} = useContext(ThemeContext); 


  return (
    <>
      <section data-aos="fade-right" className={`section-skills ${theme ? "dark" : ""}`} id="skills">
        <h2 className="title-skills">Skills</h2>
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
              <img
                src={imgJS}
                width={70}
                height={70}
                alt="Icono de JavaScript"
              />
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
              <span>Bootstrap</span>
              <img
                src={imgBOOTSTRAP}
                width={70}
                height={70}
                alt="Icono de Bootstrap"
              />
            </li>
            <li className="item-tecnology">
              <span>Git</span>
              <img src={imgGIT} width={70} height={70} alt="Icono de Git" />
            </li>
            <li className="item-tecnology">
              <span>GitHub</span>
              <img
                src={imgGITHUB}
                width={70}
                height={70}
                alt="Icono de GitHub"
              />
            </li>
            <li className="item-tecnology">
              <span>GitHub Pages</span>
              <img
                src={imgGITHUBPAGES}
                width={70}
                height={70}
                alt="Icono de GitHub Pages"
              />
            </li>
            <li className="item-tecnology">
              <span>Netlify</span>
              <img
                src={imgNETLIFY}
                width={70}
                height={70}
                alt="Icono de Netlify"
              />
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
        <hr />
      </section>
    </>
  );
}
