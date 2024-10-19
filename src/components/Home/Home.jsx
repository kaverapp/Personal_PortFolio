import React from 'react';
import { BackgroundLines } from "../ui/background-lines.jsx";

export const Home = () => {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
      Welcome to the Portfolio of <br /> Kaverappa.      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
      I'm a web development enthusiast and intern, passionate about learning and building modern web applications. 
  Follow along as I share my journey, projects, and the skills I’m developing in web technologies, 
  from front-end frameworks to back-end solutions. Let’s grow and learn together in the world of web development.
      </p>
    </BackgroundLines>
  );
};

