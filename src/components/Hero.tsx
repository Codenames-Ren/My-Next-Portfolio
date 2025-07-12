"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

// Typing Text
const typingTexts = [
  "Web Developer",
  "Software Engineer",
  "Programmer",
  "College Student",
  "Junior Web Developer",
];

const TypingAnimation = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = typingTexts[index];
    const timeout = setTimeout(
      () => {
        setCurrentText((prev) =>
          isDeleting
            ? fullText.slice(0, prev.length - 1)
            : fullText.slice(0, prev.length + 1)
        );

        if (!isDeleting && currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % typingTexts.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, index]);

  return (
    <span className="text-red-600 relative">
      {currentText}
      <span className="animate-pulse border-r-2 border-red-600 ml-1"></span>
    </span>
  );
};

export default function Hero() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/bayu-sukma-140004245",
      icon: FaLinkedin,
    },
    { href: "https://github.com/Codenames-Ren", icon: FaGithub },
    { href: "https://www.facebook.com/Lawliet.1.12/", icon: FaFacebook },
    { href: "https://www.instagram.com/noire_92/", icon: FaInstagram },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 lg:px-8 pt-20 bg-black text-white"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Content */}
        <div className="text-center lg:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Hello! It's <span className="text-red-600">Bayu</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            I'm a <TypingAnimation />
          </motion.div>

          {/* Profile Picture - Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center lg:hidden"
          >
            <div className="relative group transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src="/image/me2.jpg"
                alt="me"
                width={192}
                height={192}
                className="w-48 h-48 rounded-full shadow-2xl border-4 border-red-600/30 group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 rounded-full bg-red-600/10 animate-pulse"></div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed"
          >
            Hello! My name is Bayu Sukma, I'm a Junior Web Developer who loves
            creating beautiful and responsive websites. I enjoy exploring new
            technologies and frameworks.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center lg:justify-start space-x-4 py-4"
          >
            {socialLinks.map(({ href, icon: Icon }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                className="w-12 h-12 border-2 border-red-600 rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-black transition duration-300 hover:scale-110"
              >
                <Icon className="text-xl" />
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4"
          >
            <Button
              asChild
              className="bg-transparent border-2 border-red-600 text-red-600 px-8 py-3 rounded-full hover:bg-red-600 hover:text-black hover:scale-105 transition duration-300 shadow-lg"
            >
              <Link href="https://wa.me/+6282216556871" target="_blank">
                Hire Me
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative group transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src="/image/me2.jpg"
              alt="Me"
              width={384}
              height={384}
              className="w-96 h-96 rounded-full shadow-2xl border-4 border-red-600/30 group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 rounded-full bg-red-600/10 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
