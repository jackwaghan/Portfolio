import React from "react";
import { IoArrowUpOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const ScrollAnchor = () => {
  const scrollAnchoraVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={scrollAnchoraVariants}
      initial="initial"
      animate="show"
      exit="exit"
      onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5"
    >
      <a className="flex cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 p-1.5 backdrop-blur-3xl">
        <IoArrowUpOutline size={20} className="stroke-orange-300" />
      </a>
    </motion.div>
  );
};

export default ScrollAnchor;
