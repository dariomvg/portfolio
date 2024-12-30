import iconReact from "../assets/logos/react.svg";
import iconCss from "../assets/logos/css.svg";
import iconJs from "../assets/logos/javascript.svg";
import iconNext from "../assets/logos/next.svg";
import iconAstro from "../assets/logos/astro.svg";
import iconPostgres from "../assets/logos/postgresql.svg";
import iconExpress from "../assets/logos/express.svg";
import iconSupabase from "../assets/logos/supabase.svg";
import iconType from "../assets/logos/typescript.svg";
import type { ProjectsTypes } from "../types/utils.types";

export const projects: ProjectsTypes[] = [
  {
    id: 1,
    icons: [iconNext, iconJs, iconCss],
    title: "App peliculas",
    date: "Septiembre 2023",
    description: "Una aplicación de películas. Puedes buscar peliculas y series, ver detalles, traílers, próximas a salir y más",
    link: "https://app-movies-chi.vercel.app/",
    repo: "https://github.com/dariomvg/movies-app",
    aprox: true
  },
  {
    id: 2,
    icons: [iconReact, iconJs, iconCss, iconType],
    title: "Kit elements",
    date: "Noviembre 2024",
    description: "Librería de paquetes en NPM con diferentes funciones como fechas, animaciones, componentesUI y efecto de maquina de escribir",
    link: "https://docs-kit-elements.vercel.app",
    repo: "https://github.com/dariomvg/docs-kit-elements",
    aprox: true
  },
  {
    id: 3,
    icons: [iconReact, iconJs, iconCss, iconType],
    title: "App de notas",
    date: "Junio 2024",
    description: "Aplicación de notas. puedes usarlo para escribir, organizar, y almacenar notas de forma digital",
    link: "https://notes-kappa-ashy.vercel.app/",
    repo: "https://github.com/dariomvg/notes",
    aprox: true
  },
  {
    id: 4,
    icons: [iconAstro, iconJs, iconCss],
    title: "Blog bytes",
    date: "Mayo 2024",
    description: "Blog de tecnología. incluye artículos sobre tecnología, programación y desarrollo web",
    link: "https://blog-bytes-kohl.vercel.app/",
    repo: "https://github.com/dariomvg/blog-bytes",
    aprox: true
  },
  {
    id: 5,
    icons: [iconNext, iconJs, iconCss, iconType],
    title: "Gestor de proyectos",
    date: "Agosto 2024",
    description: "Aplicación de gestión de proyectos. puedes crear y administrar proyectos, agregar tareas, seguir el progreso de cada proyecto",
    link: "https://gestionar-proyectos.vercel.app/",
    repo: "https://github.com/dariomvg/gestionar-proyectos",
    aprox: true
  },
    {
    id: 6,
    icons: [iconNext, iconJs, iconCss, iconType],
    title: "TextLab",
    date: "Septiembre 2024",
    description: "Aplicación donde puedes crear editores de texto con múltiples herramientas, desde links hasta diferentes tamaños de texto",
    link: "https://text-lab.vercel.app/",
    repo: "https://github.com/dariomvg/text-lab",
    aprox: true
  },
  {
    id: 7,
    icons: [iconNext, iconJs, iconCss, iconSupabase],
    title: "Tasks fullstack",
    date: "Septiembre 2024",
    description: "Repositorio de una app de tareas, dónde puedes crear notas personales más subida de imágenes",
    link: "",
    repo: "https://github.com/dariomvg/tasks-fullstack",
    aprox: true
  },
  {
    id: 8,
    icons: [iconReact, iconJs, iconExpress, iconPostgres],
    title: "Chats realtime",
    date: "Agosto 2024",
    description: "Repositorio de una app de creación de chats en tiempo real, con invitación privada con contraseñas, rápido y fáciil de usar",
    link: "",
    repo: "https://github.com/dariomvg/chats-in-realtime",
    aprox: true
  },
  {
    id: 9,
    icons: [iconNext, iconJs, iconCss, iconSupabase, iconType],
    title: "Gestor Group",
    date: "Septiembre 2024",
    description: "Gestor Group es una que cuenta con un editor de texto, un todoList, mensajes y en dónde puedes agregar colaboradores",
    link: "https://gestor-group.vercel.app",
    repo: "https://github.com/dariomvg/gestor-group",
    aprox: true
  },
  {
    id: 10,
    icons: [iconNext, iconJs, iconCss],
    title: "Elige que comer",
    date: "Noviembre 2024",
    description: "Es una aplicación de comidas donde tienes una lista de comidas y cuenta con otro lista de comidas en ingles",
    link: "https://elige-que-comer.vercel.app",
    repo: "https://github.com/dariomvg/elige-que-comer",
    aprox: true
  },
  {
    id: 11,
    icons: [iconNext, iconJs, iconCss, iconExpress],
    title: "App login con autenticación",
    date: "Septiembre 2024",
    description: "Es una aplicación de login que cuenta con autenticación, cookies, rutas protegidas y verificaciones",
    link: "",
    repo: "https://github.com/dariomvg/app-auth",
    aprox: true
  },
  {
    id: 12,
    icons: [iconNext, iconJs, iconCss],
    title: "Visualizador de algoritmos",
    date: "Octubre 2024",
    description: "Puedes ver el paso  a paso de como funcionan los algoritmos complejos, probando cambiando el código y viendo el resultado",
    link: "https://visualizador-algoritmos.vercel.app/",
    repo: "https://github.com/dariomvg/visualizador-algoritmos",
    aprox: true
  },
  {
    id: 13,
    icons: [iconAstro, iconJs, iconCss, iconType],
    title: "Que comer",
    date: "Octubre 2024",
    description: "Te elige una comida de latinoamérica aleatoria, cuenta con comidas de peru, brasil, uruguay, argentina",
    link: "https://que-comer.vercel.app",
    repo: "https://github.com/dariomvg/que-comer",
    aprox: true
  },
  {
    id: 14,
    icons: [iconNext, iconJs, iconCss, iconExpress, iconType],
    title: "Change Images",
    date: "Diciembre 2024",
    description: "Aplicación para cambiar el formato de tus imagenes y optimizarlas al formato webp",
    link: "https://change-images.vercel.app",
    repo: "https://github.com/dariomvg/change-images",
    aprox: true
  },
  {
    id: 15,
    icons: [iconNext, iconCss, iconType],
    title: "App calendarUI",
    date: "Diciembre 2024",
    description: "Puedes organizar tus días, semanas o tu mes completo, agregando tus tareas, proyectos, etc.",
    link: "https://calendar-ui-rho.vercel.app/",
    repo: "https://github.com/dariomvg/calendarUI",
    aprox: true
  },
  {
    id: 16,
    icons: [iconReact, iconJs, iconCss, iconType],
    title: "Create docs",
    date: "Enero 2025",
    description: "Podes crear documentaciones a traves de plantillas para tus proyectos, documentación markdown profesional y minimalista",
    link: "",
    repo: "",
    aprox: false
  },
];
