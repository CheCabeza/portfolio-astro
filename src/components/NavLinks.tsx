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
    const updateActiveIndex = () => {
      const currentPath = window.location.pathname;
      const foundIndex = navLinks.findIndex(link => link.href === currentPath);
      setActiveIndex(foundIndex !== -1 ? foundIndex : 0);
    };

    updateActiveIndex();
    document.addEventListener('astro:after-swap', updateActiveIndex);
    
    return () => {
      document.removeEventListener('astro:after-swap', updateActiveIndex);
    };
  }, []);

  return (
    <div className={className}>
      {navLinks.map(({ name, href, id }, index) => (
        <motion.a
          key={id}
          onClick={() => setSelected(index)}
          href={href}
          className="block"
        >
          {name}
          {index === activeIndex && !isMobile && (
            <motion.div
              className="w-full h-0.5 rounded relative bg-black"
              layoutId="underline"
            />
          )}
          {index === activeIndex && isMobile && (
            <div className="w-full h-0.5 rounded relative bg-black mt-1" />
          )}
        </motion.a>
      ))}
    </div>
  );
});

export default NavLInks;
