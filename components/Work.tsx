/* eslint-disable prettier/prettier */
import React from "react";

const works = [
  {
    number: "1",
    image: "/work1.svg",
    text: "Choose the desired coin and indicate the amount to sell",
  },
  {
    number: "2",
    image: "/work2.svg",
    text: "Copy the wallet to send crypto to, upload evidence of transfer and provide your Account Details",
  },
  {
    number: "3",
    image: "/work3.svg",
    text: "Copy the wallet to send crypto to, upload evidence of transfer and provide your Account Details",
  },
];

const Work = () => {
  return (
    <div className="h-auto w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center flex-col">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)]" />
      <div className="py-10 px-4 lg:px-8 w-full max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center">
          It&apos;s simple, this is{" "}
          <span className="text-cyan-600 dark:text-cyan-400 underline underline-offset-8">
            how it works
          </span>
        </h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:space-x-8 lg:mt-20 gap-y-10">
          {works.map((work, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-y-5"
            >
              <img
                alt={`Step ${work.number}`}
                className="w-[150px] md:w-[200px] lg:w-[250px]"
                src={work.image}
              />
              <span className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                Step {work.number}
              </span>
              <p className="text-base text-center max-w-64">{work.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
