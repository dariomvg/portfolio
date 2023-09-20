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
      <section data-aos="fade-right" className={`about-me ${theme ? "dark" : ""}`}>
        <section className="section-about">
          <h2 className="title-about">About Me</h2>
          <p className="details">
            Hello, my name is Dario, I am a Front-end web developer, currently
            studying how to improve application performance and how to be as
            optimal as possible. The next step is to study back-end, but I want
            to specialize in front-end.
          </p>
          <button className="button-cv" onClick={openPdf}>
            Currículum
          </button>
        </section>
      </section>
    </>
  );
}
