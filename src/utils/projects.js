import iconReact from "../assets/logos/react.svg";
import iconCss from "../assets/logos/css.svg";
import iconJs from "../assets/logos/javascript.svg";
import iconNext from "../assets/logos/next.svg";
import iconAstro from "../assets/logos/astro.svg";
import iconPostgres from "../assets/logos/postgresql.svg";
import iconExpress from "../assets/logos/express.svg";
import iconSupabase from "../assets/logos/supabase.svg";

export const projects = [
  {
    id: 1,
    icons: [iconNext, iconJs, iconCss],
    title: "App peliculas",
    date: "Septiembre 2023",
    description: "Una aplicación de películas. Puedes buscar peliculas y series, ver detalles, traílers, próximas a salir y más",
    link: "https://app-movies-chi.vercel.app/",
    repo: "https://github.com/dariomvg/movies-app",
    effect:"right",
    aprox: true

  },
  {
    id: 2,
    icons: [iconReact, iconJs, iconCss],
    title: "Catálogo",
    date: "Marzo 2024",
    description: "Librería de componentes web UI. Es un catalogo de componentes reutilizables que se pueden integrar rápidamente en otros proyectos",
    link: "https://components-fast.vercel.app",
    repo: "https://github.com/dariomvg/landing-components-fast",
    effect:"left",
    aprox: true

  },
  {
    id: 3,
    icons: [iconReact, iconJs, iconCss],
    title: "App de notas",
    date: "Junio 2024",
    description: "Aplicación de notas. puedes usarlo para escribir, organizar, y almacenar notas de forma digital",
    link: "https://notes-kappa-ashy.vercel.app/",
    repo: "https://github.com/dariomvg/notes",
    effect:"right",
    aprox: true

  },
  {
    id: 4,
    icons: [iconAstro, iconJs, iconCss],
    title: "Landing page",
    date: "Julio 2023",
    description: "Landing page sobre un servicio de almacenamiento en la nube",
    link: "https://infinity-cloud.vercel.app/",
    repo: "https://github.com/dariomvg/infinityCloud",
    effect:"left",
    aprox: true

  },
  {
    id: 5,
    icons: [iconAstro, iconJs, iconCss],
    title: "Blog bytes",
    date: "Mayo 2024",
    description: "Blog de tecnología. incluye artículos sobre tecnología, programación y desarrollo web",
    link: "https://blog-bytes-kohl.vercel.app/",
    repo: "https://github.com/dariomvg/blog-bytes",
    effect:"right",
    aprox: true

  },
  {
    id: 6,
    icons: [iconNext, iconJs, iconCss],
    title: "Gestor de proyectos",
    date: "Agosto 2024",
    description: "Aplicación de gestión de proyectos. puedes crear y administrar proyectos, agregar tareas, seguir el progreso de cada proyecto",
    link: "https://gestionar-proyectos.vercel.app/",
    repo: "https://github.com/dariomvg/gestionar-proyectos",
    effect:"left",
    aprox: true

  },
    {
    id: 7,
    icons: [iconNext, iconJs, iconCss],
    title: "TextLab",
    date: "Septiembre 2024",
    description: "Aplicación donde puedes crear editores de texto con múltiples herramientas, desde links hasta diferentes tamaños de texto",
    link: "https://text-lab.vercel.app/",
    repo: "https://github.com/dariomvg/text-lab",
    effect: "right",
    aprox: true

  },
  {
    id: 8,
    icons: [iconNext, iconJs, iconCss, iconSupabase],
    title: "Tasks fullstack",
    date: "Septiembre 2024",
    description: "Repositorio de una app de tareas, dónde puedes crear notas personales más subida de imágenes",
    link: "",
    repo: "https://github.com/dariomvg/tasks-fullstack",
    effect: "left",
    aprox: true
  },
  {
    id: 9,
    icons: [iconReact, iconJs, iconExpress, iconPostgres],
    title: "Chats realtime",
    date: "Septiembre 2024",
    description: "Repositorio de una app de creación de chats en tiempo real, con invitación privada con contraseñas, rápido y fáciil de usar",
    link: "",
    repo: "https://github.com/dariomvg/chats-in-realtime",
    effect: "right",
    aprox: true

  },
  {
    id: 10,
    icons: [iconNext, iconJs, iconCss, iconSupabase],
    title: "Gestor Group",
    date: "Septiembre 2024",
    description: "Gestor Group es un editor de texto donde puedes trabajar con tu grupo de trabajo más envio de mensajes",
    link: "",
    repo: "https://github.com/dariomvg/gestor-group",
    effect: "left",
    aprox: false
  },
];
