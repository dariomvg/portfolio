import { useContext } from "react";
import { IdiomaContext } from "../contexts/IdiomaContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { translations } from "../constants/lenguages";
import { Typewriter } from "react-simple-typewriter";
import { openPDF } from "../controllers/openPDF";
import imgLinkedin from "../assets/icons/icon-linkedin.svg";
import imgGithub from "../assets/icons-tech/icon-github.svg";
import "../styles/Home.scss";

export function Home() {
  const { theme } = useContext(ThemeContext);
  const { idioma } = useContext(IdiomaContext);
  const handleOpenPdf = () => openPDF();

  return (
    <main className={`main-home ${theme ? "dark" : ""}`} id="home">
      <section className="section-main">
        <section className="section-info">
          <h1 className="title-home">Dario Martinez</h1>
          <h2 className="subtitle-home">{translations[idioma].titulo}</h2>
          <div className="details-home">
            {translations[idioma].desarrolladorWeb}
            <div className="effects-titles">
              <Typewriter
                words={translations[idioma].palabras}
                loop={0}
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={3000}
              />
            </div>
          </div>
          <div className="box-enlaces">
            <a target="_BLANK" href="https://github.com/dariomvg"  rel="noreferrer">
              <img src={imgGithub} width={40} height={40} alt="icon github" loading="lazy"/>
            </a>
            <a
              target="_BLANK"
              href="https://www.linkedin.com/in/dario-martinez-597486291/"  rel="noreferrer">
              <img
                src={imgLinkedin}
                width={40}
                height={40}
                alt="icon linkedin"
                loading="lazy"
              />
            </a>
          </div>
          <button onClick={handleOpenPdf} className="button-cv">
            {translations[idioma].curriculum}
          </button>
        </section>
      </section>
    </main>
  );
}
