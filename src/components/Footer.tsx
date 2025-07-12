"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-6 border-t-2 border-red-700">
      <motion.div
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center"
      >
        <h3 className="text-2xl font-bold mb-1 tracking-wide">Bayu Sukma</h3>
        <p className="text-sm font-medium">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
