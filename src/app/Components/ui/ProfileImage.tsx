"use client";
import Image from "next/image";
import Profile from "../../../../public/Profile.jpg";
import { useWindowSize } from "@/utils/hook";
import { motion } from "framer-motion";
export const ProfileImage = () => {
  const { width } = useWindowSize();
  const imageVariants = {
    initial: { x: 0, y: 0 },
    animate: { x: 20, y: 20, transition: { delay: 2.2, duration: 1 } },
  };
  return (
    <motion.div variants={imageVariants} initial="initial" animate="animate">
      <Image
        src={Profile}
        alt="Profile"
        width={width! > 768 ? 200 : 130}
        height={width! > 768 ? 200 : 130}
        className="rounded-2xl opacity-85"
      />
    </motion.div>
  );
};
