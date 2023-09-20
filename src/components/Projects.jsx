import "../styles/Projects.scss";
import imgMovies from "../assets/images/app-movies.png";
import imgEcommerce from "../assets/images/ecommerce.png";
import imgLanding from "../assets/images/landing-page.png";
import imgBlog from "../assets/images/blog-site.png";
import iconGithub from "../assets/icons/icon-github.svg";

export function Projects() {
  return (
    <>
      <section className="section-projects" id="projects">
        <h2 className="title-projects">Projects</h2>
        <section className="list-projects">
          <div data-aos="zoom-in" className="item-project">
            <img
              loading="lazy"
              width={"100%"}
              height={"auto"}
              src={imgMovies}
              alt="imagen de aplicacion de peliculas "
            />
            <div className="info-project">
              <h3>App Movies</h3>
              <div className="box-enlaces">
                <a target="_BLANK" href="https://github.com/dariomvg/app-movies">
                  <img
                    src={iconGithub}
                    loading="lazy"
                    alt="icono de gitHub"
                    width={50}
                    height={50}
                  />
                </a>
                <a target="_BLANK" href="https://dariomvg.github.io/app-movies/" className="enlace-visit">
                  Visit Project ⮵
                </a>
              </div>
            </div>
          </div>
          {/*  */}
          <div data-aos="zoom-in" className="item-project">
            <img
              loading="lazy"
              width={"100%"}
              height={"auto"}
              src={imgLanding}
              alt="imagen de aplicacion de una landing page "
            />
            <div className="info-project">
              <h3>App Landing Page</h3>
              <div className="box-enlaces">
                <a target="_BLANK"  href="https://github.com/dariomvg/landing-page">
                  <img
                    src={iconGithub}
                    loading="lazy"
                    alt="icono de gitHub"
                    width={50}
                    height={50}
                  />
                </a>
                <a target="_BLANK" href="https://dariomvg.github.io/landing-page/" className="enlace-visit">
                  Visit Project ⮵
                </a>
              </div>
            </div>
          </div>
          {/*  */}
          <div data-aos="zoom-in" className="item-project">
            <img
              loading="lazy"
              width={"100%"}
              height={"auto"}
              src={imgBlog}
              alt="imagen de aplicacion de blog "
            />
            <div className="info-project">
              <h3>Blog</h3>
              <div className="box-enlaces">
                <a target="_BLANK"  href="https://github.com/dariomvg/blog-tech">
                  <img
                    src={iconGithub}
                    loading="lazy"
                    alt="icono de gitHub"
                    width={50}
                    height={50}
                  />
                </a>
                <a target="_BLANK" href="https://dariomvg.github.io/blog-tech/" className="enlace-visit">
                  Visit Project ⮵
                </a>
              </div>
            </div>
          </div>
          {/*  */}
          <div data-aos="zoom-in" className="item-project">
            <img
              loading="lazy"
              width={"100%"}
              height={"auto"}
              src={imgEcommerce}
              alt="imagen de aplicacion de e-commerce "
            />
            <div className="info-project">
              <h3>E-commerce</h3>
              <div className="box-enlaces">
                <a target="_BLANK" href="https://github.com/dariomvg/e-commerce">
                  <img
                    src={iconGithub}
                    loading="lazy"
                    alt="icono de gitHub"
                    width={50}
                    height={50}
                  />
                </a>
                <a target="_BLANK" href="https://dariomvg.github.io/e-commerce/" className="enlace-visit">
                  Visit Project ⮵
                </a>
              </div>
            </div>
          </div>
        </section>
        <hr />
      </section>
    </>
  );
}
