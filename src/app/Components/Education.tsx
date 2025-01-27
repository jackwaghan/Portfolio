import React from "react";

const educationData = [
  {
    title: "Secondary Education",
    year: "2018 - 2019",
    description:
      "Completed secondary education at Senthil Matric Higher Secondary School, Tamil Nadu, achieving a 95% score in the board examinations.",
  },
  {
    title: "Higher Secondary Education",
    year: "2020 - 2021",
    description:
      "Completed higher secondary education at Senthil Matric Higher Secondary School, Tamil Nadu, achieving a 95% score in the board examinations.",
  },
  {
    title: "Bachelor of Engineering in Computer Science and Engineering",
    year: "2021 - 2026",
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

const EducationItem: React.FC<EducationItemProps> = ({
  title,
  year,
  description,
  alignRight,
}) => (
  <div
    className={`relative flex ${alignRight ? "justify-end" : "justify-start"}`}
  >
    <div className="absolute inset-0 flex items-center justify-start pl-4 md:justify-center md:pl-1">
      <div className="h-3 w-3 rounded-full bg-white"></div>
    </div>
    <div
      className={`ml-16 flex flex-col gap-2 rounded-lg border border-white/10 bg-white/5 p-4 md:w-[40%] ${alignRight ? "md:mr-10" : "md:ml-10"}`}
    >
      <h1 className="text-md font-bold text-orange-200 md:text-2xl">{title}</h1>
      <h1 className="text-lg font-semibold text-white/40">{year}</h1>
      <h1 className="text-base text-white/60">{description}</h1>
    </div>
  </div>
);

const Education = () => {
  return (
    <div className="container mx-auto mt-20 px-4 md:mt-32">
      <div className="flex justify-center">
        <h1 className="font-mono text-4xl font-bold text-orange-300 md:text-6xl">
          Education
        </h1>
      </div>
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
