import { useContext } from "react";
import { IdiomaContext } from "../contexts/IdiomaContext";
import { translations } from "../constants/lenguages";

export const CardProject = ({ item }) => {
  const { title, image, link, repo, iconReact, iconJs, iconSass } = item;
  const { idioma } = useContext(IdiomaContext);

  return (
    <section className="item-project">
      <img
        src={image}
        width={"100%"}
        height={170}
        alt="imagen"
        className="img-project"
        loading="lazy"
      />
      <div className="box">
        <h3>{title}</h3>
        <div className="icons">
          <img
            src={iconReact}
            alt="icon react"
            width={25}
            height={25}
            loading="lazy"
          />
          <img
            src={iconJs}
            alt="icon reacjst"
            width={25}
            height={25}
            loading="lazy"
          />
          <img
            src={iconSass}
            alt="icon sass"
            width={25}
            height={25}
            loading="lazy"
          />
        </div>

        <div className="box-enlaces">
          <a
            target="_BLANK"
            href={repo}
            className="enlace-visit"
            rel="noreferrer">
            {translations[idioma].repositorio}
          </a>
          <a
            target="_BLANK"
            href={link}
            className="enlace-visit"
            rel="noreferrer">
            {translations[idioma].proyecto}
          </a>
        </div>
      </div>
    </section>
  );
};
