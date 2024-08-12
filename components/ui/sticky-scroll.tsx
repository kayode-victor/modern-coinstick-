/* eslint-disable prettier/prettier */
//sticky-scroll.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

const StickyScrollReveal = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    image?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);

        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }

        return acc;
      },
      0
    );

    setActiveIndex(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #facc15)",
  ];

  const textColors = [
    "#06b6d4", // Matching color for the first gradient
    "#ec4899", // Matching color for the second gradient
    "#f97316", // Matching color for the third gradient
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );
  const [textColor, setTextColor] = useState(textColors[0]);

  useEffect(() => {
    setBackgroundGradient(
      linearGradients[activeIndex % linearGradients.length]
    );
    setTextColor(textColors[activeIndex % textColors.length]);
  }, [activeIndex]);

  return (
    <motion.div
      ref={ref}
      className="h-[45rem] overflow-y-auto flex justify-center relative space-x-5 my-20 py-5 md:py-10 lg:py-20 hide-scrollbar"
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="my-20 flex flex-col items-center justify-center md:items-start "
            >
              <motion.h2
                animate={{
                  opacity: activeIndex === index ? 1 : 0.3,
                  color: activeIndex === index ? textColor : undefined,
                }}
                className="text-2xl md:text-4xl lg:text-5xl tracking-wide font-bold"
                initial={{ opacity: 0 }}
              >
                {item.title}
              </motion.h2>
              <motion.p
                animate={{
                  opacity: activeIndex === index ? 1 : 0.3,
                }}
                className="text-lg tracking-wider max-w-lg my-10"
                initial={{ opacity: 0 }}
              >
                {item.description}
              </motion.p>
              <div
                className={`md:hidden flex rounded-full h-80 w-80 items-center justify-center overflow-hidden ${contentClassName}`}
                style={{ background: backgroundGradient }}
              >
                <img
                  alt={item.title}
                  className="w-[316px] h-[316px] object-cover rounded-full"
                  src={item.image}
                />
              </div>
            </div>
          ))}

          <div className="h-40" />
        </div>
      </div>
      <div
        className={`hidden lg:flex rounded-full h-96 w-96 items-center justify-center sticky top-10 overflow-hidden ${contentClassName}`}
        style={{ background: backgroundGradient }}
      >
        <img
          alt={content[activeIndex].title}
          className="w-[380px] h-[380px] object-cover rounded-full"
          src={content[activeIndex].image}
        />
      </div>
    </motion.div>
  );
};

export default StickyScrollReveal;
