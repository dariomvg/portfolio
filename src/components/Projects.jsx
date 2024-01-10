import { useContext } from "react";
import { IdiomaContext } from "../contexts/IdiomaContext.jsx";
import { translations } from "../constants/lenguages.js";
import { projects } from "../constants/projects";
import { CardProject } from "./CardProject";
import "../styles/Projects.scss";

export function Projects() {
  const { idioma } = useContext(IdiomaContext);
  return (
    <section className="section-projects" id="projects">
      <h2 className="title-projects">{translations[idioma].proyectos}</h2>
      <section className="list-projects">
        {projects &&
          projects.map((item) => <CardProject key={item.id} item={item} />)}
        <section className="item-project other">
          <div className="box">
            <h3 className="title">Proyectos fullstack</h3>
            <p>
              Proyectos fullstack hechos con React.js, Node.js, Express, SQL,
              MySQL y JavaScript
            </p>
            <div className="box-enlaces">
              <a
                target="_BLANK"
                href="https://github.com/dariomvg/crud-node-react-mysql"
                className="enlace-visit"
                rel="noreferrer">
                Link
              </a>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
