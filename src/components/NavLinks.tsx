import { motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";
import { navLinks } from "./Nav";

interface NavLinkProps {
  isMobile: boolean;
  className: string;
  setToggled: Dispatch<SetStateAction<boolean>>;
}

export default function NavLinks({
  isMobile,
  className,
  setToggled,
}: Readonly<NavLinkProps>) {
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
      {navLinks.map(({ name, href, id }) => (
        <motion.a
          key={id}
          variants={isMobile ? itemMotion : itemMotionDesktop}
          href={href}
          onClick={() => setToggled(false)}
        >
          {name}
        </motion.a>
      ))}
    </div>
  );
}
