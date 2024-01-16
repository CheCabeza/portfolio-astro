import { motion } from "framer-motion";
import { useState } from "react";
import Hamburger from "./Hamburger";

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
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
const itemMotionDesktop = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 1, x: 0 },
};
const navLinks = [
  { name: "Home", href: "/", id: 1 },
  { name: "About", href: "/about", id: 2 },
  { name: "Projects", href: "/projects", id: 4 },
  { name: "Contact", href: "/contact", id: 5 },
];

const NavLinks = ({
  isMobile,
  className,
}: {
  isMobile: boolean;
  className: string;
}) => (
  <div className={className}>
    {navLinks.map(({ name, href, id }) => (
      <motion.a
        key={id}
        variants={isMobile ? itemMotion : itemMotionDesktop}
        href={href}
      >
        {name}
      </motion.a>
    ))}
  </div>
);

export default function Nav(props: any) {
  const [toggled, setToggled] = useState(false);
  return (
    <nav className="relative flex justify-end pb-6 pt-12 font-medium bg-blue">
      {/* Device mode menu  */}
      {toggled && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="bg-theme-base fixed left-0 top-0  z-40 flex h-screen
          w-full flex-col items-center  justify-center  gap-24 text-2xl font-bold"
        >
          <NavLinks
            className=" flex flex-col gap-24 text-lg "
            isMobile={true}
          />
        </motion.div>
      )}
      {/* Desktop mode menu  */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        className="hidden xl:flex xl:items-center  xl:justify-center xl:gap-12 xl:text-lg   "
      >
        <NavLinks className="flex gap-12" isMobile={false} />
        {props.themeIcon}
      </motion.div>

      <Hamburger toggled={toggled} setToggled={setToggled} />
    </nav>
  );
}
