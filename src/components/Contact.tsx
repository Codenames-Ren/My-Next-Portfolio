"use client";

import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { contactMethods } from "@/lib/contact";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 lg:px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center mb-12"
        >
          Feel Free to <span className="text-red-600">Contact</span> Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-red-600 border-0 rounded-3xl p-6 lg:p-12 hover:bg-transparent hover:border-2 hover:border-red-600 transition-all duration-300 group">
            <CardContent className="p-0">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-center text-black group-hover:text-white">
                Let's Connect!
              </h3>

              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-4 gap-6 justify-items-center">
                {contactMethods.map(({ href, icon: Icon }, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={href}
                      target="_blank"
                      className="w-16 h-16 bg-black border-2 border-white rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-black hover:scale-125 transition-all duration-300 group-hover:border-red-600"
                    >
                      <Icon className="text-2xl" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden grid grid-cols-2 gap-4 mt-6">
                {contactMethods.map(({ href, icon: Icon, label }, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={href}
                      target="_blank"
                      className="bg-black border-2 border-white rounded-2xl p-4 flex flex-col items-center justify-center text-red-600 hover:bg-red-600 hover:text-black hover:scale-105 transition-all duration-300 group-hover:border-red-600"
                    >
                      <Icon className="text-3xl mb-2" />
                      <span className="text-sm font-medium">{label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <p className="text-center text-base lg:text-lg mt-6 text-black group-hover:text-white">
                Feel free to reach out for collaborations or just a friendly
                chat!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
