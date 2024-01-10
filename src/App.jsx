import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home.jsx";
import { Projects } from "./components/Projects.jsx";
import { Skills } from "./components/Skills.jsx";
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import "./styles/App.scss";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`wrapper ${theme ? "dark" : ""}`}>
      <Header />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </section>
  );
}

export default App;
