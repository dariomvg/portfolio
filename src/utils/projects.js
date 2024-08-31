import iconReact from "../assets/logos/react.svg";
import iconCss from "../assets/logos/css.svg";
import iconJs from "../assets/logos/javascript.svg";
import iconNext from "../assets/logos/next.svg";
import iconAstro from "../assets/logos/astro.svg";

import imageBlog from "../assets/images/blog.png";
import imageCatalogo from "../assets/images/catalogo.png"
import imageLanding from "../assets/images/landing.png"
import imageMovies from "../assets/images/movies.png"
import imageNotas from "../assets/images/notes.png"
import imageGestor from "../assets/images/gestor.png"


export const projects = [
  {
    id: 1,
    icon1: iconNext,
    icon2: iconJs,
    icon3: iconCss,
    title: "App peliculas",
    image: imageMovies,
    date: "Septiembre 2023",
    description: "Una aplicación de películas. Puedes buscar peliculas y series, ver detalles, traílers, próximas a salir y más",
    link: "https://app-movies-chi.vercel.app/",
    repo: "https://github.com/dariomvg/movies-app",
    effect:"left",
  },
  {
    id: 2,
    icon1: iconReact,
    icon2: iconJs,
    icon3: iconCss,
    title: "Catálogo",
    image: imageCatalogo,
    date: "Marzo 2024",
    description: "Librería de componentes web UI. Es un catalogo de componentes reutilizables que se pueden integrar rápidamente en otros proyectos",
    link: "https://components-fast.vercel.app",
    repo: "https://github.com/dariomvg/landing-components-fast",
    effect:"right",
  },
  {
    id: 3,
    icon1: iconAstro,
    icon2: iconJs,
    icon3: iconCss,
    title: "Landing page",
    image: imageLanding,
    date: "Julio 2023",
    description: "Landing page sobre un servicio de almacenamiento en la nube",
    link: "https://infinity-cloud.vercel.app/",
    repo: "https://github.com/dariomvg/infinityCloud",
    effect:"left",
  },
  {
    id: 4,
    icon1: iconNext,
    icon3: iconJs,
    icon2: iconCss,
    title: "Blog bytes",
    image: imageBlog,
    date: "Mayo 2024",
    description: "Blog de tecnología. incluye artículos sobre tecnología, programación y desarrollo web",
    link: "https://blog-bytes-kohl.vercel.app/",
    repo: "https://github.com/dariomvg/blog-bytes",
    effect:"right",
  },
  {
    id: 5,
    icon1: iconReact,
    icon2: iconJs,
    icon3: iconCss,
    title: "App de notas",
    image: imageNotas,
    date: "Junio 2024",
    description: "Aplicación de notas. puedes usarlo para escribir, organizar, y almacenar notas de forma digital",
    link: "https://notes-kappa-ashy.vercel.app/",
    repo: "https://github.com/dariomvg/notes",
    effect:"left",
  },
  {
    id: 6,
    icon1: iconNext,
    icon2: iconJs,
    icon3: iconCss,
    title: "Gestor de proyectos",
    image: imageGestor,
    date: "Agosto 2024",
    description: "Aplicación de gestión de proyectos. puedes crear y administrar proyectos, agregar tareas, seguir el progreso de cada proyecto",
    link: "https://gestionar-proyectos.vercel.app/",
    repo: "https://github.com/dariomvg/gestionar-proyectos",
    effect:"right",
  },
];
