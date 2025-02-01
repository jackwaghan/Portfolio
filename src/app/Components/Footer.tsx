import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

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
  return (
    <div className="mt-20 md:mt-32">
      <div className="h-52 w-full bg-stone-800 md:h-80">
        <div className="container mx-auto flex h-full flex-col items-center justify-center p-4">
          <div className="flex flex-col items-center gap-8 md:gap-14">
            <p className="font-mono text-3xl font-semibold tracking-tight text-orange-300 lg:text-6xl">
              Let&apos;s Connect ❤️
            </p>
            <div className="flex gap-2 rounded-xl border border-white/15 bg-white/5 px-2 py-1 shadow-2xl lg:px-4 lg:py-2">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
