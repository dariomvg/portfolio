import iconReact from "../assets/logos/react.svg";
import iconCss from "../assets/logos/css.svg";
import iconJs from "../assets/logos/javascript.svg";
import iconNext from "../assets/logos/next.svg";
import iconAstro from "../assets/logos/astro.svg";
import iconPostgres from "../assets/logos/postgresql.svg";
import iconExpress from "../assets/logos/express.svg";
import iconSupabase from "../assets/logos/supabase.svg";
import iconType from "../assets/logos/typescript.svg";
import iconNode from "../assets/logos/node.svg";
import type { ProjectsTypes } from "../types/utils.types";

export const projects: ProjectsTypes[] = [
  {
    id: 1,
    icons: [iconNext, iconJs, iconCss],
    title: "App peliculas y TV",
    date: "Marzo 2025",
    description:
      "Una aplicación de películas, series y TV. Puedes buscar peliculas y series, ver detalles, traílers, próximas a salir y más.",
    repo: "https://github.com/dariomvg/app-movies-tv",
  },
  {
    id: 2,
    icons: [iconReact, iconCss, iconType],
    title: "Kit elements",
    date: "Noviembre 2024",
    description:
      "Librería de paquetes en NPM con diferentes funciones como fechas, animaciones, componentesUI y efecto de maquina de escribir.",
    repo: "https://github.com/dariomvg/kit-elements",
  },
  {
    id: 3,
    icons: [iconAstro, iconJs, iconCss],
    title: "Blog bytes",
    date: "Mayo 2024",
    description:
      "Blog de tecnología. incluye artículos sobre tecnología, programación y desarrollo web.",
    repo: "https://github.com/dariomvg/blog-bytes",
  },
  {
    id:4,
    icons: [iconNext, iconCss, iconType],
    title: "Gestor de proyectos",
    date: "Agosto 2024",
    description:
      "Aplicación de gestión de proyectos. puedes crear y administrar proyectos, agregar tareas, seguir el progreso de cada proyecto.",
    repo: "https://github.com/dariomvg/gestionar-proyectos",
  },
  {
    id: 5,
    icons: [iconNext, iconCss, iconType],
    title: "TextLab",
    date: "Septiembre 2024",
    description:
      "Aplicación donde puedes crear editores de texto con múltiples herramientas, desde links hasta diferentes tamaños de texto.",
    repo: "https://github.com/dariomvg/text-lab",
  },
  {
    id: 6,
    icons: [iconReact, iconExpress, iconPostgres],
    title: "Chats realtime",
    date: "Agosto 2024",
    description:
      "Repositorio de una app de creación de chats en tiempo real, con invitación privada con contraseñas, rápido y fáciil de usar.",
    repo: "https://github.com/dariomvg/chats-in-realtime",
  },
  {
    id: 7,
    icons: [iconNext, iconCss, iconSupabase, iconType],
    title: "Gestor Group",
    date: "Septiembre 2024",
    description:
      "Gestor Group es una que cuenta con un editor de texto, un todoList, mensajes y en dónde puedes agregar colaboradores.",
    repo: "https://github.com/dariomvg/gestor-group",
  },
  {
    id:8,
    icons: [iconNext, iconExpress, iconPostgres],
    title: "App de autenticación segura",
    date: "Septiembre 2024",
    description:
      "Es una aplicación de inicio de sesión que cuenta con autenticación, cookies, rutas protegidas y verificaciones.",
    repo: "https://github.com/dariomvg/app-auth",
  },
  {
    id: 9,
    icons: [iconNext, iconCss, iconType],
    title: "Visualizador de algoritmos",
    date: "Octubre 2024",
    description:
      "Míra el paso  a paso de como funcionan los algoritmos complejos, probando cambiando el código y viendo el resultado.",
    repo: "https://github.com/dariomvg/visualizador-algoritmos",
  },
  {
    id: 10,
    icons: [iconAstro, iconCss, iconType],
    title: "Que comer",
    date: "Octubre 2024",
    description:
      "Te elige una comida de latinoamérica aleatoria, cuenta con comidas de brasil, uruguay, argentina. etc.",
    repo: "https://github.com/dariomvg/que-comer",
  },
  {
    id: 11,
    icons: [iconNext, iconExpress, iconType],
    title: "Change Images",
    date: "Diciembre 2024",
    description:
      "Aplicación para cambiar el formato de tus imagenes y optimizarlas al formato webp.",
    repo: "https://github.com/dariomvg/change-images",
  },
  {
    id: 12,
    icons: [iconNext, iconCss, iconType],
    title: "App calendarUI",
    date: "Diciembre 2024",
    description:
      "Puedes organizar tus días, semanas o tu mes completo, agregando tus tareas, proyectos, etc.",
    repo: "https://github.com/dariomvg/calendarUI",
  },
  {
    id: 13,
    icons: [iconNode],
    title: "Docs-generator-readme",
    date: "Enero 2025",
    description:
      "Crea una documentación simple y rápida para tus proyectos. Con un solo comando.",
    repo: "https://github.com/dariomvg/docs-generator-readme",
  },
  {
    id: 14,
    icons: [iconNext, iconType, iconPostgres ],
    title: "App de debates",
    date: "Febrero 2025",
    description:
      "Parecido a reddit, puedes agregar un temas, agregar comentarios de opinión, etc.",
    repo: "https://github.com/dariomvg/app-debates",
  },
  {
    id: 15,
    icons: [iconNext, iconType, iconCss],
    title: "App historias",
    date: "Enero 2025",
    description:
      "App que simula la subida de historias de una red social, con imagenes, tiempo de carga y registro simple.",
    repo: "https://github.com/dariomvg/app-histories",
  },
  {
    id: 16,
    icons: [iconNode, iconExpress],
    title: "Fast-stock-api",
    date: "Marzo 2025",
    description: "API RESTful que brinda productos y categorías, optimizada para la integración con un ecommerce u otros proyectos.",
    repo: "https://github.com/dariomvg/docs-fast-stock-api"
  },
  {
    id: 17,
    icons: [iconNext, iconType, iconCss],
    title: "E-commerce con fast-stock",
    date: "Marzo 2025",
    description: "Ecommerce conectada a una API personalizada(fast-stock-api) para gestionar productos.",
    repo: "https://github.com/dariomvg/e-commerce-fast-stock"
  },
  {
    id: 18,
    icons: [],
    title: "Más próximamente",
    date: "2025...",
    description: "",
    repo: ""
  }
];
