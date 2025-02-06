import { Download } from "lucide-react";
import { ProfileImage } from "./ui/ProfileImage";
import { MenuList } from "@/utils/db";
import { store, useWindowSize } from "@/utils/hook";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";
const HeroSection = () => {
  const { scroll, setsize, setscroll, active, setactive } = store();
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (homeInView && (scroll || active == "home")) {
      const value = MenuList.find((menu) => menu.name == "home");
      setsize({
        widthValue: value?.LargeScreen.width || "",
        leftValue: value?.LargeScreen.left || "",
      });
      setscroll(true);
      setactive("home");
    }
  }, [homeInView, setsize, setscroll, scroll, active, setactive]);
  return (
    <div
      ref={homeRef}
      className="container mx-auto grid h-full transform-gpu grid-cols-1 md:grid-cols-2"
    >
      <Introduction />
      <Profile />
    </div>
  );
};

const Introduction = () => {
  const heyVariants = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const iamVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.6,
      },
    },
  };

  const nameVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 3,
        delay: 1.3,
      },
    },
  };

  const boxvariants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1.6,
      },
    },
  };

  const contentvariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 2.2,
      },
    },
  };

  const absolutevariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 3,
      },
    },
  };

  return (
    <div
      id="home"
      className="order-2 flex h-full w-full flex-col items-center md:order-1 lg:pt-40"
    >
      <div className="flex flex-col items-center gap-3 lg:gap-8">
        <motion.p
          variants={heyVariants}
          animate="animate"
          initial="initial"
          className="font-poppins text-2xl font-semibold tracking-tight text-orange-200/40 lg:text-6xl"
        >
          Hey 👋 <motion.span variants={iamVariants}>I am</motion.span>
        </motion.p>
        <motion.p
          variants={nameVariants}
          initial="initial"
          animate="animate"
          className="whitespace-nowrap font-mono text-4xl font-bold tracking-tight text-orange-300 lg:text-8xl"
        >
          Jack Waghan
        </motion.p>
      </div>
      <motion.div
        variants={boxvariants}
        initial="initial"
        animate="animate"
        className="relative mt-8 w-5/6 rounded-xl border-t-4 border-white/10 bg-white/5 px-4 py-4 text-center lg:mt-24 lg:px-6 lg:py-5"
      >
        <motion.p
          variants={contentvariants}
          initial="initial"
          animate="animate"
          className="text-center font-poppins text-sm font-semibold leading-normal text-white/40 lg:text-pretty lg:text-2xl lg:leading-snug"
        >
          I am an AIML student with a passion for coding and development. I
          enjoy exploring and understanding various technologies and how they
          work.
        </motion.p>
        <motion.div
          variants={absolutevariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 -z-10 bg-orange-300/10 blur-3xl"
        />
      </motion.div>
      <div className="mt-6 lg:mt-14">
        <ResumeButton />
      </div>
    </div>
  );
};

const Profile = () => {
  const { width } = useWindowSize();
  if (width === undefined) return null;
  const imageVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 2,
      },
    },
  };

  const absolutevariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 2.6,
      },
    },
  };

  return (
    <motion.div
      variants={imageVariants}
      initial="initial"
      animate="animate"
      className="order-1 flex h-full w-full flex-col items-center py-10 md:order-2 lg:py-0 lg:pt-64"
    >
      <div className="relative rounded-2xl border border-white/10 bg-white/10 p-1 lg:p-1.5">
        <ProfileImage />
        <motion.div
          variants={absolutevariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 -z-10 bg-orange-300/60 blur-3xl"
        />
      </div>
    </motion.div>
  );
};

const ResumeButton = () => {
  const resumeVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,

      transition: {
        duration: 0.4,
        delay: 3.2,
      },
    },
  };

  return (
    <motion.div
      variants={resumeVariants}
      initial="initial"
      animate="animate"
      whileHover={{
        scale: 0.95,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
      whileTap={{
        scale: 0.8,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
      className="relative flex cursor-pointer items-center justify-center space-x-3 rounded-lg border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-3xl"
    >
      <h1 className="text-sm lg:text-base">Resume</h1>
      <Download size={20} />
    </motion.div>
  );
};

export default HeroSection;
