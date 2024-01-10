import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { IdiomaContext } from "../contexts/IdiomaContext";
import { openPDF } from "../controllers/openPDF";
import { translations } from "../constants/lenguages";
import "../styles/About.scss";

export function About() {
  const { theme } = useContext(ThemeContext);
  const { idioma } = useContext(IdiomaContext);
  const handleOpenPdf = () => openPDF();

  return (
    <section className={`about-me ${theme ? "dark" : ""}`}>
      <section className="section-about">
        <h2 className="title-about">{translations[idioma].sobreMi}</h2>
        <p className="details-about">{translations[idioma].bienvenida}</p>
        <button className="button-cv" onClick={handleOpenPdf}>
          {translations[idioma].curriculum}
        </button>
      </section>
    </section>
  );
}
