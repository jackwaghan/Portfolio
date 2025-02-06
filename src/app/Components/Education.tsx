import { MenuList } from "@/utils/db";
import { store } from "@/utils/hook";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const educationData = [
  {
    title: "Secondary Education",
    year: "2019 - 2020",
    description:
      "Completed secondary education at Senthil Matric Higher Secondary School, Tamil Nadu, achieving a 95% score in the board examinations.",
  },
  {
    title: "Higher Secondary Education",
    year: "2021 - 2022",
    description:
      "Completed higher secondary education at Senthil Matric Higher Secondary School, Tamil Nadu, achieving a 84% score in the board examinations.",
  },
  {
    title: "Bachelor of Engineering in Computer Science and Engineering",
    year: "2022 - 2026",
    description:
      "Pursuing a Bachelor's degree in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at SRM Institute of Science and Technology, Kattankulathur, Tamil Nadu.",
  },
];

interface EducationItemProps {
  title: string;
  year: string;
  description: string;
  alignRight: boolean;
}
const educationItemsVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const EducationItem: React.FC<EducationItemProps> = ({
  title,
  year,
  description,
  alignRight,
}) => (
  <div
    className={`relative flex ${alignRight ? "justify-end" : "justify-start"}`}
  >
    <div className="absolute inset-0 -z-10 flex items-center justify-start pl-4 md:justify-center md:pl-1">
      <div className="h-3 w-3 rounded-full bg-white" />
    </div>
    <motion.div
      variants={educationItemsVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.7, once: true }}
      className={`ml-16 flex flex-col gap-4 rounded-lg border border-white/10 bg-white/5 p-4 md:w-[40%] ${alignRight ? "md:mr-10" : "md:ml-10"}`}
    >
      <h1 className="font-mono text-lg font-bold text-orange-200 md:text-2xl">
        {title}
      </h1>
      <h1 className="font-poppins text-lg font-semibold text-white/40">
        {year}
      </h1>
      <h1 className="font-poppins text-sm leading-normal text-white/60 lg:text-base lg:leading-relaxed">
        {description}
      </h1>
    </motion.div>
  </div>
);

const Education = () => {
  const { setsize, setscroll, scroll, setactive, active } = store();
  const { ref: educationRef, inView: educationInView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (educationInView && (scroll || active == "education")) {
      const value = MenuList.find((menu) => menu.name == "education");
      setsize({
        widthValue: value?.LargeScreen.width || "",
        leftValue: value?.LargeScreen.left || "",
      });
      setscroll(true);
      setactive("education");
    }
  }, [educationInView, setsize, setscroll, scroll, setactive, active]);

  const educationVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div
      ref={educationRef}
      id="education"
      className="container mx-auto transform-gpu px-4 pt-20 md:pt-32"
    >
      <motion.div
        variants={educationVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className="flex justify-center"
      >
        <h1 className="font-mono text-4xl font-bold text-orange-300 md:text-6xl">
          Education
        </h1>
      </motion.div>
      <div className="relative mt-20 flex justify-center md:mt-32">
        <div className="absolute left-5 h-full w-1 rounded-full bg-white/50 md:left-1/2" />
        <div className="flex flex-col gap-8 md:w-2/3 md:gap-12">
          {educationData.map((item, index) => (
            <EducationItem
              key={index}
              title={item.title}
              year={item.year}
              description={item.description}
              alignRight={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
