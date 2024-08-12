/* eslint-disable prettier/prettier */
import { Button } from "@nextui-org/button";
import React from "react";
import { Link } from "@nextui-org/link";
const CTA = () => {
  return (
    <section className="px-10 md:px-16 lg:px-24 py-16 md:py-24 lg:py-28">
      <div className=" flex w-full items-start text-center gap-6 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="w-full">
          <h2 className="mb-3 text-3xl font-semibold leading-[1.2] md:mb-4 md:text-4xl lg:text-5xl tracking-wide">
            Welcome to the most{" "}
            <span className="text-cyan-600 dark:text-cyan-400 underline underline-offset-8">
              trusted
            </span>{" "}
            cryto exchange.
          </h2>
          <p className="text-md md:text-lg px-10 md:px-40">
            Get Started today with the easiest and most secure platform to buy
            and sell Bitcoin and other cryptocurrency today
          </p>
          <Button
            isExternal
            as={Link}
            className="text-md tracking-wider mt-10 w-80 font-semibold py- dark:bg-cyan-400 bg-cyan-600 text-white dark:text-black hover:bg-transparent hover:text-cyan-600 dark:hover:text-cyan-400 border-transparent hover:border-cyan-600 dark:hover:border-cyan-400"
            variant="ghost"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
