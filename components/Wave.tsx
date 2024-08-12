/* eslint-disable prettier/prettier */
import React from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { WavyBackground } from "./ui/wavy-background";

const Wave = () => {
  return (
    <section className="flex">
      <WavyBackground
        className="flex w-full items-center justify-center"
        waveWidth={45}
      >
        <div className="flex flex-col md:flex-row px-10 gap-5 items-center justify-between">
          <div className="">
            <p className="text-lg tracking-wider mt-4 font-medium text-left">
              Try Coinstick Now
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl tracking-wider font-bold text-center">
              Buy and Sell crypto in just 5 minutes
            </p>
          </div>
          <div>
            <Button
              isExternal
              as={Link}
              className="text-md capitalise tracking-wider font-semibold p-6 dark:bg-cyan-400 bg-cyan-600 text-white dark:text-black hover:bg-transparent hover:text-cyan-600 dark:hover:text-cyan-400 border-transparent hover:border-cyan-600 dark:hover:border-cyan-400"
              variant="ghost"
            >
              Get Started for free
            </Button>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default Wave;
