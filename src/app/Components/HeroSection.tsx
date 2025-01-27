import { Download } from "lucide-react";
import { ProfileImage } from "./ui/ProfileImage";

const HeroSection = () => {
  return (
    <div className="container mx-auto grid h-full grid-cols-1 md:grid-cols-2">
      <Introduction />
      <Profile />
    </div>
  );
};

const Introduction = () => {
  return (
    <div className="order-2 flex h-full w-full flex-col items-center md:order-1 lg:pt-40">
      <div className="flex flex-col items-center gap-3 font-semibold lg:gap-8">
        <p className="font-mono text-2xl tracking-tight text-orange-200/40 lg:text-6xl">
          Hey 👋, I am
        </p>
        <p className="whitespace-nowrap font-mono text-4xl tracking-tight text-orange-300 lg:text-8xl">
          Jack Waghan
        </p>
      </div>
      <div className="relative mt-8 w-5/6 rounded-xl border-t-4 border-white/10 bg-white/5 px-4 py-5 text-center lg:mt-24 lg:px-5 lg:py-5">
        <p className="text-base font-semibold leading-normal text-white/40 lg:text-3xl lg:leading-snug">
          I am an AIML student with a passion for coding and development. I
          enjoy exploring and understanding various technologies and how they
          work.
        </p>
        <div className="absolute inset-0 -z-10 bg-orange-300/10 blur-3xl" />
      </div>
      <div className="mt-6 lg:mt-14">
        <ResumeButton />
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="order-1 flex h-full w-full flex-col items-center py-10 md:order-2 lg:py-0 lg:pt-64">
      <div className="relative rounded-2xl border border-white/10 bg-white/10 p-1 lg:p-1.5">
        <ProfileImage />
        <div className="absolute inset-0 -z-10 bg-orange-300/80 blur-3xl" />
      </div>
    </div>
  );
};

const ResumeButton = () => {
  return (
    <div className="relative flex cursor-pointer items-center justify-center space-x-3 rounded-lg border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-3xl">
      <h1 className="text-sm lg:text-base">Resume</h1>
      <Download size={20} />
      <div className="absolute inset-0 -z-10 bg-orange-300/40 blur-3xl" />
    </div>
  );
};

export default HeroSection;
