import { motion } from "framer-motion";
import { memo, useState, useEffect } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const foundIndex = navLinks.findIndex(link => link.href === currentPath);
    setActiveIndex(foundIndex !== -1 ? foundIndex : 0);
  }, []);

  const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const itemMotionDesktop = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 1, x: 0 },
  };

  const handleClick = (href: string, e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      window.location.href = href;
    }
  };

  return (
    <div className={className}>
      {navLinks.map(({ name, href, id }, index) => (
        <motion.a
          key={id}
          variants={isMobile ? itemMotion : itemMotionDesktop}
          onClick={(e) => handleClick(href, e)}
          href={href}
        >
          {name}
          {index === activeIndex && !isMobile ? (
            <motion.div
              className="w-full h-0.5 rounded relative bg-black"
              layoutId="underline"
            />
          ) : (
            index === activeIndex && (
              <div className="w-full h-0.5 rounded relative bg-black" />
            )
          )}
        </motion.a>
      ))}
    </div>
  );
});

export default NavLInks;
