"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-red-600">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="bg-red-600 border-0 rounded-3xl p-6 group hover:bg-transparent hover:border-2 hover:border-red-600 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="text-center space-y-4">
                    <div
                      className={`w-16 h-16 mx-auto bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {project.icon && (
                        <project.icon className="text-2xl text-white" />
                      )}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
