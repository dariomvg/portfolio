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
          {translations[idioma].mensageSkill}
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
