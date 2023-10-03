import { useContext } from "react";
import "../styles/About.scss";
import { ThemeContext } from "../contexts/ThemeContext";
import cv from "../assets/pdf/Currículum.pdf";

export function About() {
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
      <section className={`about-me ${theme ? "dark" : ""}`}>
        <section className="section-about">
          <h2 className="title-about">Sobre mí</h2>
          <p className="details">
            Hola, me llamo Dario.Soy <b>desarrollador web Front-end</b>, actualmente
            estudiando <b>back-end</b> con SQL, MySQL, Nodejs y Express, <b>ingles</b> y
            mejorando sobre la <b>performance</b> en la creación de una aplicación.
            Quíero especializarme en front-end pero aprender back-end y avanzar 
            hacía el puesto de <b>desarrollador web fullStack.</b>
          </p>
          <button className="button-cv" onClick={openPdf}>
            Currículum
          </button>
        </section>
      </section>
    </>
  );
}
