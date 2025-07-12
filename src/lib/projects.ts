import {
  FaCoffee,
  FaSignInAlt,
  FaRocket,
  FaWifi,
  FaPlay,
} from "react-icons/fa";
import { FaKaaba } from "react-icons/fa6";

export const projects = [
  {
    title: "Kedai Kopi Senja",
    description:
      "A responsive website created using JavaScript and Python. Made during semester 1.",
    icon: FaCoffee,
    color: "from-amber-500 to-orange-600",
    link: "https://github.com/Codenames-Ren/Kedai-Kopi-Senja",
  },
  {
    title: "Animated Login Form",
    description:
      "A login form page created using HTML, CSS, and JavaScript. Includes animation and form switch.",
    icon: FaSignInAlt,
    color: "from-blue-500 to-cyan-600",
    link: "https://github.com/Codenames-Ren/Animated-Login-Form",
  },
  {
    title: "Umrah Package E-Commerce Web",
    description:
      "Web for Umrah packages using Golang + PostgreSQL. Built for campus project.",
    icon: FaKaaba,
    color: "from-green-500 to-emerald-600",
    link: "https://mukromah-hijrah.ti24se3.my.id/",
  },
  {
    title: "ASCII Video Player",
    description:
      "Converts video into ASCII text and plays via terminal using Python. Fun project!",
    icon: FaPlay,
    color: "from-purple-500 to-pink-600",
    link: "https://github.com/Codenames-Ren/Project-Python/tree/main/Gabut",
  },
  {
    title: "Internal Billing System RT/RW Net",
    description:
      "Internal billing system with Mikrotik integration. Made with Golang + PostgreSQL.",
    icon: FaWifi,
    color: "from-green-500 to-blue-800",
    link: "https://github.com/Codenames-Ren/Billing-System",
  },
  {
    title: "Future Project",
    description: "More creative ideas and projects coming soon!",
    icon: FaRocket,
    color: "from-red-500 to-rose-600",
    link: "#",
  },
];
