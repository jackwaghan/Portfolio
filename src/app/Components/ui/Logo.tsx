"use client";
import Link from "next/link";
import { motion } from "framer-motion";
const Logo = () => {
  const logoVariants = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 2,
      },
    },
  };

  return (
    <motion.div
      variants={logoVariants}
      initial="initial"
      animate="animate"
      className="cursor-pointer"
    >
      <Link
        href="/"
        className="font-mono text-xl font-semibold text-orange-300 md:text-2xl"
      >
        Portfolio ...
      </Link>
    </motion.div>
  );
};

export default Logo;
