import "../styles/Projects.scss";
import imgMovies from "../assets/images/app-movies.png";
import imgBlog from "../assets/images/blog-site.png";
import imgLanding from "../assets/images/landing-page.png";
import imgEcommerce from "../assets/images/ecommerce.png";
import imgTareas from "../assets/images/app-tarea.png"; 

export function Projects() {
  return (
    <section className="section-projects" id="projects">
      <h2 className="title-projects">Proyectos</h2>
      <section className="list-projects">
        <div className="item-project">
          <img src={imgMovies} width={"100%"} height={"auto"} alt="imagen de app de peliculas" />
          <div className="box">
            <h3>App de peliculas</h3>

            <div className="box-enlaces">
              <a
                target="_BLANK"
                href="https://github.com/dariomvg/app-movies"
                className="enlace-visit">
                Repositorio
              </a>
              <a
                target="_BLANK"
                href="https://dariomvg.github.io/app-movies/"
                className="enlace-visit">
                Proyecto
              </a>
            </div>
          </div>
        </div>

        <div className="item-project">
          <img src={imgLanding} width={"100%"} height={"auto"} alt="imagen de una landing page " />
          <div className="box">
            <h3>Landing page</h3>
            <div className="box-enlaces">
              <a
                target="_BLANK"
                href="https://github.com/dariomvg/landing-page"
                className="enlace-visit">
                Repositorio
              </a>
              <a
                target="_BLANK"
                href="https://dariomvg.github.io/landing-page/"
                className="enlace-visit">
                Proyecto
              </a>
            </div>
          </div>
        </div>

        <div className="item-project">
          <img src={imgBlog} width={"100%"} height={"auto"} alt="imagen de app de peliculas" />
          <div className="box">
            <h3>Blog Personal</h3>
            <div className="box-enlaces">
              <a
                target="_BLANK"
                href="https://github.com/dariomvg/blog-tech"
                className="enlace-visit">
                Repositorio
              </a>
              <a
                target="_BLANK"
                href="https://dariomvg.github.io/blog-tech/"
                className="enlace-visit">
                Proyecto
              </a>
            </div>
          </div>
        </div>
        <div className="item-project">
        <img src={imgEcommerce} width={"100%"} height={"auto"} alt="imagen de app de peliculas" />
          <div className="box">
            <h3>E-commerce</h3>
            <div className="box-enlaces">
              <a
                target="_BLANK"
                href="https://github.com/dariomvg/e-commerce"
                className="enlace-visit">
                Repositorio
              </a>
              <a
                target="_BLANK"
                href="https://dariomvg.github.io/e-commerce/"
                className="enlace-visit">
                Proyecto
              </a>
            </div>
          </div>
        </div>
         <div className="item-project">
        <img src={imgTareas} width={"100%"} height={"auto"} alt="imagen de app de peliculas" />
          <div className="box">
            <h3>App de tareas y notas</h3>
            <div className="box-enlaces">
              <a
                target="_BLANK"
                href="https://github.com/dariomvg/app-tareas"
                className="enlace-visit">
                Repositorio
              </a>
              <a
                target="_BLANK"
                href="https://dariomvg.github.io/app-tareas/"
                className="enlace-visit">
                Proyecto
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
