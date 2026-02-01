import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";

export const navLinks = [
  { name: "Home", href: "/", id: 1 },
  { name: "About", href: "/about", id: 2 },
  { name: "Projects", href: "/projects", id: 4 },
  { name: "Contact", href: "/contact", id: 5 },
];

export default function Nav({ themeIcon }: any) {
  const [toggled, setToggled] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const handleAfterSwap = () => {
      setToggled(false);
    };

    document.addEventListener('astro:after-swap', handleAfterSwap);
    
    return () => {
      document.removeEventListener('astro:after-swap', handleAfterSwap);
    };
  }, []);

  return (
    <nav className="relative flex justify-end pb-6 pt-12 font-medium">
      {/* Mobile sidebar menu */}
      <motion.div
        animate={{ x: toggled ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 right-0 z-40 h-screen w-64 bg-theme-background shadow-2xl xl:hidden"
      >
        <div className="flex h-full flex-col items-center justify-center gap-12 p-8">
          <NavLinks
            className="flex flex-col gap-8 text-lg"
            selected={selected}
            setSelected={setSelected}
            isMobile={true}
          />
          {themeIcon}
        </div>
      </motion.div>
      {/* Overlay backdrop */}
      {toggled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setToggled(false)}
          className="fixed inset-0 z-30 bg-black/20 xl:hidden"
        />
      )}
      {/* Desktop mode menu  */}
      <div className="hidden xl:flex xl:items-center xl:justify-center xl:gap-12 xl:text-lg">
        <NavLinks
          className="flex gap-12"
          selected={selected}
          setSelected={setSelected}
          isMobile={false}
        />
        {themeIcon}
      </div>
      <Hamburger toggled={toggled} setToggled={setToggled} />
    </nav>
  );
}
