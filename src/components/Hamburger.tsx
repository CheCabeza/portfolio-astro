import { motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";

interface NavProps {
  toggled: boolean;
  setToggled: Dispatch<SetStateAction<boolean>>;
}

export default function Nav({ toggled, setToggled }: NavProps) {
  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 25 }}
      transition={{ delay: 0.35 }}
      onClick={() => setToggled((prevToggle: boolean) => !prevToggle)}
      className={"burger z-50 cursor-pointer space-y-1.5 xl:hidden"}
    >
      <motion.span
        animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
        className="line-1 block h-0.5 w-8 rounded-lg bg-black"
      ></motion.span>

      <motion.span
        animate={{ width: toggled ? 0 : 32 }}
        className="line-2 block h-0.5 rounded-lg bg-black"
      ></motion.span>
      <motion.span
        animate={{
          rotateZ: toggled ? -45 : 0,
          y: toggled ? -8 : 0,
          width: 32,
        }}
        className="line-3 block h-0.5 rounded-lg bg-black"
      ></motion.span>
    </motion.div>
  );
}
