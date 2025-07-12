import {
  SiGoland,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiInsomnia,
  SiPostman,
  SiArchlinux,
} from "react-icons/si";

type TechItem = {
  name: string;
  icon: React.ComponentType | null;
  subtitle?: string;
};

type TechStack = {
  title: string;
  items: TechItem[];
};

export const techStacks: TechStack[] = [
  {
    title: "Backend",
    items: [
      { name: "Golang", icon: SiGoland },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "Javascript", icon: SiJavascript },
    ],
  },
  {
    title: "Framework",
    items: [
      { name: "GIN", icon: null },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "API Testing",
    items: [
      { name: "Insomnia", icon: SiInsomnia },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    title: "Operating System",
    items: [
      { name: "Arch Linux", icon: SiArchlinux, subtitle: "(EndeavourOS" },
    ],
  },
];
