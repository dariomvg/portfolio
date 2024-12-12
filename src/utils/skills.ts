import iconHtml from "../assets/logos/html.svg";
import iconCss from "../assets/logos/css.svg";
import iconJs from "../assets/logos/javascript.svg";
import iconReact from "../assets/logos/react.svg";
import iconGit from "../assets/logos/git.svg";
import iconGithub from "../assets/logos/github.svg";
import iconNode from "../assets/logos/node.svg";
import iconMysql from "../assets/logos/mysql.svg";
import iconExpress from "../assets/logos/express.svg";
import iconNpm from "../assets/logos/npm.svg";
import iconAstro from "../assets/logos/astro.svg";
import iconNext from "../assets/logos/next.svg";
import iconPostgre from "../assets/logos/postgresql.svg";
import iconVercel from "../assets/logos/vercel.svg";
import iconTypescript from "../assets/logos/typescript.svg";
import iconSupabase from "../assets/logos/supabase.svg";
import iconJest from "../assets/logos/jest.svg";
import iconVitest from "../assets/logos/vitest.svg";
import type { SkillsTypes } from "../types/utils.types";

export const skills: SkillsTypes = {
  front: [
    {
      id: 1,
      icon: iconHtml,
      title: "HTML5",
    },
    {
      id: 2,
      icon: iconCss,
      title: "CSS3",
    },
    {
      id: 3,
      icon: iconJs,
      title: "JavaScript",
    },
    {
      id: 4,
      icon: iconReact,
      title: "React.js",
    },
    {
      id: 5,
      icon: iconNext,
      title: "Next.js",
    },
    {
      id: 6,
      icon: iconAstro,
      title: "Astro",
    },
    {
      id: 7,
      icon: iconTypescript,
      title: "Typescript",
    },
  ],
  back: [
    {
      id: 1,
      icon: iconNode,
      title: "Node.js",
    },
    {
      id: 2,
      icon: iconExpress,
      title: "Express.js",
    },
    {
      id: 3,
      icon: iconMysql,
      title: "MySQL",
    },
    {
      id: 4,
      icon: iconPostgre,
      title: "PostreSQL",
    },
  ],
  others: [
    {
      id: 1,
      icon: iconGit,
      title: "Git",
    },
    {
      id: 2,
      icon: iconGithub,
      title: "Github",
    },
    {
      id: 3,
      icon: iconNpm,
      title: "NPM",
    },
    {
      id: 4,
      icon: iconVercel,
      title: "Vercel",
    },
    {
      id: 5,
      icon: iconSupabase,
      title: "Supabase",
    },
    {
      id: 6,
      icon: iconJest,
      title: "Jest",
    },
    {
      id: 7,
      icon: iconVitest,
      title: "Vitest",
    }
  ],
};
