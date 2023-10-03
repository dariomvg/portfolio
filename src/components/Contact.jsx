import "../styles/Contact.scss";
import imgGithub from "../assets/icons/icon-github.svg";
import imgLinkedin from "../assets/icons/icon-linkedin.svg";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme ? "dark" : ""}`} id="contact">
      <h3 className="title-footer">Contactos</h3>
      <section className="section-contacts">
        <a
          target="_BLANK"
          href="https://www.linkedin.com/in/dario-martinez-597486291/">
          <img src={imgLinkedin} width={40} height={40} alt="" />
          LinkedLn
        </a>
        <a target="_BLANK" href="https://github.com/dariomvg">
          <img src={imgGithub} width={40} height={40} alt="" />
          GitHub
        </a>

        <p className="correo">
          <b>Correo: contact.dario.info@gmail.com</b>
        </p>
      </section>
      <h3 className="copyright">Copyrigth 2023</h3>
    </footer>
  );
}
