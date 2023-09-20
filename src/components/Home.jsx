import "../styles/Home.scss";
import imgGithub from "../assets/icons/icon-github.svg";
import imgLinkedin from "../assets/icons/icon-linkedin.svg";
import imgGmail from "../assets/icons/icon-gmail.svg";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import cv from "../assets/pdf/Currículum.pdf";

export function Home() {
  const { theme } = useContext(ThemeContext);

  const openPdf = () => {
    const newWindow = window.open(cv, "_blank");

    if (!newWindow) {
      alert(
        "La ventana emergente fue bloqueada. Asegúrate de permitir ventanas emergentes en tu navegador."
      );
    }
  };
  return (
    <>
      <main className={`main-home ${theme ? "dark" : ""}`} id="home">
        <section className="section-main">
          <div className="section-info">
            <h1 className="section-title">Dario, Front-End Developer</h1>
            <p className="section-details">
              Front-End Developer, I build dynamic, optimal and modern
              applications and websites.
            </p>
            <button onClick={openPdf} className="button-cv">
              Currículum
            </button>
          </div>
          <div className="box-enlaces">
            <a target="_BLANK" href="https://github.com/dariomvg">
              <img
                src={imgGithub}
                width={40}
                height={40}
                alt="imagen de GitHub"
              />
            </a>
            <a
              target="_BLANK"
              href="https://www.linkedin.com/in/dario-martinez-597486291/">
              <img
                src={imgLinkedin}
                width={40}
                height={40}
                alt="Imagen de Linkedin"
              />
            </a>
            <a href="#contact">
              <img
                width={40}
                height={40}
                src={imgGmail}
                alt="Imagen de Gmail"
              />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
