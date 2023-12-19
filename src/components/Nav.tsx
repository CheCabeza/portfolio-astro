import { motion } from "framer-motion";
import { useState } from "react";
import github from "../img/github.svg";
import linkedin from "../img/linkedin.svg";
import twitter from "../img/twitter.svg";
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
  { name: "Blog", href: "/blog", id: 2 },
  { name: "Contact", href: "/contact", id: 3 },
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

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  console.log(linkedin);
  return (
    <nav className="relative mx-8 mb-24 flex items-center justify-between pb-6 pt-12 font-medium md:mx-16 lg:mx-32 bg-blue">
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.35 }}
        className="flex gap-12"
      >
        <motion.div className="hidden items-center gap-12 xl:flex">
          <img src={linkedin.src} alt="Linkedin Account" width={25} />
          <img src={twitter.src} alt="Twitter Account" width={25} />
          <img src={github.src} alt="Youtube Channel" width={25} />
        </motion.div>
      </motion.div>
      {/* Title */}

      <h1 className="text-lg font-bold">
        <a href="/">Chema Cabeza</a>
      </h1>

      {/* Nav Items animating in  */}
      {toggled && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="fixed left-0 top-0  z-40 flex h-screen
          w-full flex-col items-center  justify-center  gap-24 bg-white text-2xl font-bold"
        >
          <NavLinks
            className=" flex flex-col gap-24 text-lg "
            isMobile={true}
          />
        </motion.div>
      )}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        className="hidden xl:flex xl:items-center  xl:justify-center xl:gap-12 xl:text-lg   "
      >
        <NavLinks className="flex gap-12" isMobile={false} />
      </motion.div>

      {/* Hamburger Toggle */}
      <Hamburger toggled={toggled} setToggled={setToggled} />
    </nav>
  );
}
