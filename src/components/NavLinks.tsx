import { motion } from "framer-motion";
import { useState } from "react";
import { navLinks } from "./Nav";

interface NavLinkProps {
  isMobile: boolean;
  className: string;
}

export default function NavLinks({
  isMobile,
  className,
}: Readonly<NavLinkProps>) {
  const [selected, setSelected] = useState(0);
  const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const itemMotionDesktop = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 1, x: 0 },
  };
  return (
    <div className={className}>
      {navLinks.map(({ name, href, id }, index) => (
        <motion.a
          key={id}
          variants={isMobile ? itemMotion : itemMotionDesktop}
          onClick={() => setSelected(index)}
          href={href}
        >
          {name}
          {index === selected && (
            <motion.div
              className="w-full h-0.5 rounded relative bg-black"
              layoutId="underline"
            />
          )}
        </motion.a>
      ))}
    </div>
  );
}
