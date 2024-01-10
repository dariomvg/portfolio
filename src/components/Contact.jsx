import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import imgLinkedin from "../assets/icons/icon-linkedin.svg";
import imgGithub from "../assets/icons-tech/icon-github.svg";
import "../styles/Contact.scss";

export function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme ? "dark" : ""}`} id="contact">
      <section className="section-contacts">
        <p className="correo">
          <b>Correo: contact.dario.info@gmail.com</b>
        </p>
        <div className="box-apps">
          <a
            target="_BLANK"
            href="https://www.linkedin.com/in/dario-martinez-597486291/" rel="noreferrer">
            <img src={imgLinkedin} width={40} height={40} alt="image linkedin" loading="lazy" />
          </a>
          <a target="_BLANK" href="https://github.com/dariomvg" rel="noreferrer">
            <img src={imgGithub} width={40} height={40} alt="image github" loading="lazy" />
          </a>
        </div>
      </section>
      <h3 className="copyright">© Dario Martinez. All rights reserved 2024</h3>
    </footer>
  );
}
