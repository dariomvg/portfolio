import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { IdiomaContext } from "../contexts/IdiomaContext.jsx";
import { translations } from "../constants/lenguages.js";
import { skills } from "../constants/skills.js";
import { CardSkill } from "./CardSkill";
import imgSkill from "../assets/images/image-skill.png";
import "../styles/Skills.scss";

export function Skills() {
  const { theme } = useContext(ThemeContext);
  const { idioma } = useContext(IdiomaContext);

  return (
    <section className={`section-skills ${theme ? "dark" : ""}`} id="skills">
      <h2 className="title-skills">{translations[idioma].habilidades}</h2>
      <section className="section-list">
        <img
          src={imgSkill}
          alt="image"
          width={500}
          height={350}
          title="imagen de código"
          className="img-skill"
        />
        <div className="cont-details">
          <p className="text">
            Aparte de estas tecnologías he trabajado e implementado metodologias
            ágil, patrones de diseño, SOLID, patrón de arquitectura
            M.V.C,editores de código como VScode y sublimeText3, trabajo con
            RESTful APIs, plataforma en la nube con Cloudinary y en despliegues
            de proyectos front suelo usar Github pages (con un paquete
            gh-pages), vercel y netlify, y en el back plataformas como FL0 y
            planetScale.
          </p>
          <ul className="list-tecnologies">
            {skills &&
              skills.map((item) => <CardSkill key={item.id} item={item} />)}
          </ul>
        </div>
      </section>
    </section>
  );
}
