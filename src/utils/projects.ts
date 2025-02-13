import iconReact from "../assets/logos/react.svg";
import iconCss from "../assets/logos/css.svg";
import iconJs from "../assets/logos/javascript.svg";
import iconNext from "../assets/logos/next.svg";
import iconAstro from "../assets/logos/astro.svg";
import iconPostgres from "../assets/logos/postgresql.svg";
import iconExpress from "../assets/logos/express.svg";
import iconSupabase from "../assets/logos/supabase.svg";
import iconType from "../assets/logos/typescript.svg";
import iconNode from "../assets/logos/node.svg"
import type { ProjectsTypes } from "../types/utils.types";

export const projects: ProjectsTypes[] = [
  {
    id: 1,
    icons: [iconNext, iconJs, iconCss],
    title: "App peliculas",
    date: "Septiembre 2023",
    description: "Una aplicación de películas. Puedes buscar peliculas y series, ver detalles, traílers, próximas a salir y más",
    repo: "https://github.com/dariomvg/movies-app",
  },
  {
    id: 2,
    icons: [iconReact, iconJs, iconCss, iconType],
    title: "Kit elements",
    date: "Noviembre 2024",
    description: "Librería de paquetes en NPM con diferentes funciones como fechas, animaciones, componentesUI y efecto de maquina de escribir",
    repo: "https://github.com/dariomvg/kit-elements",
  },
  {
    id: 3,
    icons: [iconReact, iconJs, iconCss, iconType],
    title: "App de notas",
    date: "Junio 2024",
    description: "Aplicación de notas. puedes usarlo para escribir, organizar, y almacenar notas de forma digital",
    repo: "https://github.com/dariomvg/notes",
  },
  {
    id: 4,
    icons: [iconAstro, iconJs, iconCss],
    title: "Blog bytes",
    date: "Mayo 2024",
    description: "Blog de tecnología. incluye artículos sobre tecnología, programación y desarrollo web",
    repo: "https://github.com/dariomvg/blog-bytes",
  },
  {
    id: 5,
    icons: [iconNext, iconJs, iconCss, iconType],
    title: "Gestor de proyectos",
    date: "Agosto 2024",
    description: "Aplicación de gestión de proyectos. puedes crear y administrar proyectos, agregar tareas, seguir el progreso de cada proyecto",
    repo: "https://github.com/dariomvg/gestionar-proyectos",
  },
    {
    id: 6,
    icons: [iconNext, iconJs, iconCss, iconType],
    title: "TextLab",
    date: "Septiembre 2024",
    description: "Aplicación donde puedes crear editores de texto con múltiples herramientas, desde links hasta diferentes tamaños de texto",
    repo: "https://github.com/dariomvg/text-lab",
  },
  {
    id: 7,
    icons: [iconNext, iconJs, iconCss, iconSupabase],
    title: "Tasks fullstack",
    date: "Septiembre 2024",
    description: "Repositorio de una app de tareas, dónde puedes crear notas personales más subida de imágenes",
    repo: "https://github.com/dariomvg/tasks-fullstack",
  },
  {
    id: 8,
    icons: [iconReact, iconJs, iconExpress, iconPostgres],
    title: "Chats realtime",
    date: "Agosto 2024",
    description: "Repositorio de una app de creación de chats en tiempo real, con invitación privada con contraseñas, rápido y fáciil de usar",
    repo: "https://github.com/dariomvg/chats-in-realtime",
  },
  {
    id: 9,
    icons: [iconNext, iconJs, iconCss, iconSupabase, iconType],
    title: "Gestor Group",
    date: "Septiembre 2024",
    description: "Gestor Group es una que cuenta con un editor de texto, un todoList, mensajes y en dónde puedes agregar colaboradores",
    repo: "https://github.com/dariomvg/gestor-group",
  },
  {
    id: 10,
    icons: [iconNext, iconJs, iconCss],
    title: "Elige que comer",
    date: "Noviembre 2024",
    description: "Es una aplicación de comidas donde tienes una lista de comidas y cuenta con otro lista de comidas en ingles",
    repo: "https://github.com/dariomvg/elige-que-comer",
  },
  {
    id: 11,
    icons: [iconNext, iconJs, iconCss, iconExpress],
    title: "App login con autenticación",
    date: "Septiembre 2024",
    description: "Es una aplicación de login que cuenta con autenticación, cookies, rutas protegidas y verificaciones",
    repo: "https://github.com/dariomvg/app-auth",
  },
  {
    id: 12,
    icons: [iconNext, iconJs, iconCss],
    title: "Visualizador de algoritmos",
    date: "Octubre 2024",
    description: "Míra el paso  a paso de como funcionan los algoritmos complejos, probando cambiando el código y viendo el resultado",
    repo: "https://github.com/dariomvg/visualizador-algoritmos",
  },
  {
    id: 13,
    icons: [iconAstro, iconJs, iconCss, iconType],
    title: "Que comer",
    date: "Octubre 2024",
    description: "Te elige una comida de latinoamérica aleatoria, cuenta con comidas de peru, brasil, uruguay, argentina",
    repo: "https://github.com/dariomvg/que-comer",
  },
  {
    id: 14,
    icons: [iconNext, iconJs, iconCss, iconExpress, iconType],
    title: "Change Images",
    date: "Diciembre 2024",
    description: "Aplicación para cambiar el formato de tus imagenes y optimizarlas al formato webp",
    repo: "https://github.com/dariomvg/change-images",
  },
  {
    id: 15,
    icons: [iconNext, iconCss, iconType],
    title: "App calendarUI",
    date: "Diciembre 2024",
    description: "Puedes organizar tus días, semanas o tu mes completo, agregando tus tareas, proyectos, etc.",
    repo: "https://github.com/dariomvg/calendarUI",
  },
  {
    id: 16,
    icons: [iconJs, iconNode],
    title: "Docs-generator-readme",
    date: "Enero 2025",
    description: "Podes crear la documentación para tus proyectos. Usandoló como una base o para un README rápido",
    repo: "https://github.com/dariomvg/docs-generator-readme",
  },
];
