"use client";

import { Card, CardContent } from "./ui/card";
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

const techStacks: TechStack[] = [
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

export default function TechStack() {
  return (
    <section id="stack" className="py-16 px-4 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          Tech <span className="text-red-600">Stack</span>
        </h2>

        <div className="space-y-10">
          {techStacks.map((stack, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-0 rounded-3xl p-6 lg:p-8 hover:bg-red-600 hover:scale-[1.02] transition-all duration-300 group"
            >
              <CardContent className="p-0">
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-center text-white group-hover:text-black">
                  {stack.title}
                </h3>
                <div className="flex justify-center items-center flex-wrap gap-6">
                  {stack.items.map((item, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="text-4xl text-red-600 group-hover:text-black mb-2">
                        {item.icon ? (
                          <item.icon />
                        ) : (
                          <div className="w-10 h-10 bg-red-600 group-hover:bg-black rounded-lg flex items-center justify-center ">
                            <span className="text-sm font-bold text-black group-hover:text-red-600">
                              GIN
                            </span>
                          </div>
                        )}
                      </div>
                      <span className="text-sm text-gray-300 group-hover:text-black font-medium">
                        {item.name}
                      </span>
                      {item.subtitle && (
                        <span className="text-xs text-gray-400 group-hover:text-gray-700">
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
