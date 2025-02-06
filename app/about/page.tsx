import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";

const About = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 h-screen">
      <div className="pb-20 pt-36 w-full">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div
          className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
        >
          {/* Radial gradient for the container to give a faded look */}
          <div
            // chnage the bg to bg-black-100, so it matches the bg color and will blend in
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>
        <div className="relative my-5 z-10 mx-[400px]">
          <div className="flex justify-start items-center gap-4 mb-6">
            <h2 className="text-2xl font-semibold p-0 m-0">About Me</h2>
            <div className="w-[200px] h-[1px] bg-gray-400"></div>
          </div>
          <div>
            <p>
              I am an enthusiastic and detail-oriented Full-Stack Software
              Engineer with nearly two years of industry experience, currently
              working as an Associate Software Engineer. With a strong passion
              for problem-solving and innovation, I thrive in dynamic
              environments where I can contribute as a smart team player.
            </p>
            <p>
              I hold a Second Class Upper Honors degree in Computer Science and
              Software Engineering from the University of Bedfordshire at SLIIT.
              My expertise spans across frontend and backend development,
              utilizing modern technologies such as React.js, Next.js,
              Redux-Saga, Nest.js, TypeORM, Prisma, PostgreSQL, Firebase, and
              MongoDB to build scalable and efficient applications.
            </p>
            <p>
              Beyond technical skills, I am recognized for my exceptional
              attitude, analytical thinking, and hardworking nature. I am always
              eager to tackle complex challenges, optimize workflows, and
              deliver high-quality solutions that drive business success.
            </p>
            <p>
              I am passionate about continuous learning and collaboration,
              always striving to enhance my skill set while contributing
              effectively to any project or company I am part of.
            </p>
            <p>Let’s connect and build something great together!</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
