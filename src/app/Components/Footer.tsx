import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
const socialLinks = [
  {
    href: "https://www.linkedin.com/in/jackwaghan/",
    icon: (
      <FaLinkedin
        size={30}
        className="duration-100 group-hover:fill-orange-400"
      />
    ),
    label: "LinkedIn",
  },
  {
    href: "https://github.com/jackwaghan",
    icon: (
      <FaGithub
        size={30}
        className="duration-100 group-hover:fill-orange-400"
      />
    ),
    label: "Github",
  },
  {
    href: "https://instagram.com/JackWaghan",
    icon: (
      <FaInstagram
        size={30}
        className="duration-100 group-hover:fill-orange-400"
      />
    ),
    label: "Instagram",
  },
];

const Footer = () => {
  const footerVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div className="mt-20 md:mt-32">
      <div className="h-52 w-full bg-stone-800 md:h-80">
        <div className="container mx-auto flex h-full flex-col items-center justify-center p-4">
          <motion.div
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
            className="flex flex-col items-center gap-8 md:gap-14"
          >
            <p className="font-mono text-3xl font-semibold tracking-tight text-orange-300 lg:text-6xl">
              Let&apos;s Connect <span className="animate-pulse">❤️</span>
            </p>
            <motion.div
              variants={footerVariants}
              initial="hidden"
              whileInView="visible"
              className="flex gap-2 rounded-xl border border-white/15 bg-white/5 px-2 py-1 shadow-2xl lg:px-4 lg:py-2"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="group rounded-xl p-2 hover:bg-white/5"
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
