import { motion } from "framer-motion";
import { memo } from "react";
import { navLinks } from "./Nav";

interface NavLinkProps {
  className: string;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  isMobile: boolean;
}

const NavLInks = memo(function NavLinks({
  className,
  selected,
  setSelected,
  isMobile,
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
      {navLinks.map(({ name, href, id }, index) => (
        <motion.a
          key={id}
          variants={isMobile ? itemMotion : itemMotionDesktop}
          onClick={() => setSelected(index)}
          href={href}
        >
          {name}
          {index === selected && !isMobile ? (
            <motion.div
              className="w-full h-0.5 rounded relative bg-black"
              layoutId="underline"
            />
          ) : (
            index === selected && (
              <div className="w-full h-0.5 rounded relative bg-black" />
            )
          )}
        </motion.a>
      ))}
    </div>
  );
});

export default NavLInks;
