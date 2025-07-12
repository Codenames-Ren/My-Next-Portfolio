"use client";

import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { projects } from "@/lib/projects";

type Project = {
  title: string;
  description: string;
  icon: React.ComponentType | null;
  color: string;
  link: string;
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          My <span className="text-red-600">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-red-600 border-0 rounded-3xl p-6 group hover:bg-transparent hover:border-2 hover:border-red-600 transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="text-center space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <project.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black group-hover:text-white">
                    {project.title}
                  </h3>
                  <p className="text-black group-hover:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                    {project.link !== "#" && (
                      <>
                        <br />
                        <Link
                          href={project.link}
                          target="_blank"
                          className="underline hover:text-blue-400"
                        >
                          Visit
                        </Link>
                      </>
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
