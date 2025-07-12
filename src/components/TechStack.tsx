"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { techStacks } from "@/lib/techstack";

export default function TechStack() {
  return (
    <section id="stack" className="py-16 px-4 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          Tech <span className="text-red-600">Stack</span>
        </motion.h2>

        <div className="space-y-10">
          {techStacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="bg-gray-900 border-0 rounded-3xl p-6 lg:p-8 hover:bg-red-600 hover:scale-[1.02] transition-all duration-300 group">
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
                            <div className="w-10 h-10 bg-red-600 group-hover:bg-black rounded-lg flex items-center justify-center">
                              <span className="text-sm font-bold text-black group-hover:text-red-600">
                                {item.name.toUpperCase()}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
