import "../styles/Home.scss";
import imgGithub from "../assets/icons/icon-github.svg";
import imgLinkedin from "../assets/icons/icon-linkedin.svg";
import iconFlecha from "../assets/icons/icon-flecha.png";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import cv from "../assets/pdf/Currículum.pdf";

export function Home() {
  const { theme } = useContext(ThemeContext);
  const openPdf = () => {
    const newWindow = window.open(cv, "_blank");
    if (!newWindow) {
      alert(
        "La ventana emergente fue bloqueada.Permíte ver ventanas emergentes en tu navegador."
      );
    }
  };

  return (
    <main className={`main-home ${theme ? "dark" : ""}`} id="home">
      <section className="section-main">
        <section className="section-info">
          <h1 className="section-title">Dario Martinez</h1>
          <h2 className="section-subtitle">Desarrollador Front-End</h2>
          <p className="section-details">
            Desarrollador web,Contrúyo apps y sitios web óptimos,dinámicos y
            modernos
          </p>
          <div className="box-enlaces">
            <a target="_BLANK" href="https://github.com/dariomvg">
              <img src={imgGithub} width={40} height={40} alt="" />
            </a>
            <a
              target="_BLANK"
              href="https://www.linkedin.com/in/dario-martinez-597486291/">
                <img src={imgLinkedin} width={40} height={40} alt="" />
              </a>
          </div>
          <button onClick={openPdf} className="button-cv">
            Currículum
          </button>
        </section>
        <img
          src={iconFlecha}
          alt="gif de una flecha hacia abajo"
          className="flecha"
        />
      </section>
     
    </main>
  );
}
