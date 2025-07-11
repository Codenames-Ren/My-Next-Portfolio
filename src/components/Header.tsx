"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { FaBars, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface HeaderProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handlerScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handlerScroll);
    return () => window.removeEventListener("scroll", handlerScroll);
  }, []);

  useEffect(() => {
    if (clickCount === 5) {
      MySwal.fire({
        title: "🎉 Kamu menemukan Easter Egg!",
        text: "Terima kasih sudah mengunjungi web ini~",
        icon: "success",
        background: "#101828",
        color: "#e7000b",
        confirmButtonColor: "#e7000b",
        confirmButtonText: "Keren 👍",
      });
      setClickCount(0); //Counter Reset
    }
  }, [clickCount]);

  const handleLogoClick = () => {
    setClickCount((prev) => prev + 1);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#stack", label: "Tech Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black" : "bg-black"
      } backdrop-blur-md`}
    >
      <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        {/* Easter Egg */}
        <span
          onClick={handleLogoClick}
          className="cursor-pointer text-red-600 text-2xl lg:text-3xl font-bold hover:scale-110 transition-transfor duration-300"
        >
          My Portfolio
        </span>

        {/* Mobile menu button */}
        <Button
          variant="link"
          size="default"
          className="lg:hidden text-red-600 w-12 "
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <FaTimes className="text-3xl" />
          ) : (
            <FaBars className="text-3xl" />
          )}
        </Button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-white hover:text-red-600 transition-colors duration-300 border-b-2 border-transparent hover:border-red-600 pb-1 text-lg ${
                activeSection === item.href.slice(1)
                  ? "text-red-600 border-red-600"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`lg:hidden bg-gray-900 w-full border-t-2 border-red-600 transition-all duration-500 ease-in-out overflow-hidden ${
          mobileMenuOpen
            ? "opacity-100 max-h-[500px] translate-y-0"
            : "opacity-0 max-h-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-white hover:text-red-600 transition-colors duration-300 text-lg py-2 px-4 rounded-lg hover:bg-red-600/10 border-l-4 border-transparent hover:border-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
