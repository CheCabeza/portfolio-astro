import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative mx-8 mb-24 flex justify-end pb-6 pt-12 font-medium md:mx-16 lg:mx-32 bg-blue">
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.35 }}
        className="flex gap-12"
      >
        <motion.div className="hidden items-center gap-12 xl:flex">
          <a href="https://twitter.com/chemcabeza" target="_blank">
            Twitter
          </a>
          <a href="https://www.linkedin.com/in/checabeza" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/CheCabeza" target="_blank">
            Github
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
}
