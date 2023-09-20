import { useContext, useEffect } from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Header } from "./Header";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { ThemeContext } from "../contexts/ThemeContext";
import "../styles/App.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Todo() {

    const {theme} = useContext(ThemeContext); 
    useEffect(() => {
      AOS.init({
        duration: 1000,
      });
    }, []);
  return (
    <div className={`wrapper ${theme ? "dark" : ""}`}>
      <Header />   
      <Home />
      <Skills />   
      <Projects />
      <About />
      <hr />
      <Contact />
    </div>
  );
}
