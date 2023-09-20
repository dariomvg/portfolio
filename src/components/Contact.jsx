import "../styles/Contact.scss";
import imgGmail from "../assets/icons/icon-gmail.svg";
import imgGithub from "../assets/icons/icon-github.svg";
import imgLinkedin from "../assets/icons/icon-linkedin.svg";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function Contact() {

  const {theme} = useContext(ThemeContext); 

  return (
    <>
      <footer className={`footer ${theme ? "dark" : ""}`} id="contact">
        <h3 className="title-footer">Contacts</h3>
        <section className="section-contacts">
          <a target="_BLANK" href="https://www.linkedin.com/in/dario-martinez-597486291/">
            <img
              src={imgLinkedin}
              width={40}
              height={40}
              alt="Icono de linkedin"
            />
          </a>
          <a target="_BLANK" href="https://github.com/dariomvg">
            <img src={imgGithub} width={40} height={40} alt="Icono de Github" />
          </a>
          <p className="box-correo">
            <img src={imgGmail} width={40} height={40} alt="Icono de Gmail" />
            <b className="correo">contact.dario.info@gmail.com</b>
          </p>
        </section>
      </footer>
    </>
  );
}
