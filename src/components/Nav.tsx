import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";

const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const navLinks = [
  { name: "Home", href: "/", id: 1 },
  { name: "About", href: "/about", id: 2 },
  { name: "Projects", href: "/projects", id: 4 },
  { name: "Contact", href: "/contact", id: 5 },
];

export default function Nav(props: any) {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    document.addEventListener("astro:page-load", () => {
      setToggled(false);
    });
  }, []);

  return (
    <nav className="relative flex justify-end pb-6 pt-12 font-medium">
      {/* Device mode menu  */}
      {toggled && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="fixed left-0 top-0 z-40 flex h-screen
          w-full flex-col items-center justify-center gap-24 text-2xl font-bold bg-theme-background"
        >
          <NavLinks className="flex flex-col gap-24 text-lg" isMobile={true} />
        </motion.div>
      )}
      {/* Desktop mode menu  */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        className="hidden xl:flex xl:items-center xl:justify-center xl:gap-12 xl:text-lg"
      >
        <NavLinks className="flex gap-12" isMobile={false} />
        {props.themeIcon}
      </motion.div>

      <Hamburger toggled={toggled} setToggled={setToggled} />
    </nav>
  );
}
