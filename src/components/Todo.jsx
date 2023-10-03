import { useContext } from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Header } from "./Header";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { ThemeContext } from "../contexts/ThemeContext";
import "../styles/App.scss"


export function Todo() {

  const {theme} = useContext(ThemeContext); 

  return (
    <div className={`wrapper ${theme ? "dark" : ""}`}>
      <Header />   
      <Home />
      <Projects />
      <Skills />   
      <About />
      <Contact />
    </div>
  );
}
