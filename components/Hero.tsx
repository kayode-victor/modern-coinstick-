/* eslint-disable prettier/prettier */
"use client";
import React from "react";

import { Card, Carousel } from "@/components/ui/apple-cards-carousel";

// Move DummyContent component declaration here
const DummyContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Lorem ipsum dolor sit amet.
        </span>{" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        assumenda culpa velit! Quam illo dolores repudiandae voluptas, quae
        repellendus ipsum. Expedita, excepturi omnis labore ullam doloribus rem
        libero magnam? At?
      </p>
    </div>
  );
};

const data = [
  {
    category: "Info",
    title: "The platform you need for all your crypto Transaction.",
    src: "/hero.svg",
    content: <DummyContent />,
  },
  {
    category: "Info",
    title: "Convenietly convert your Bitcoin and other crypto cash.",
    src: "/hero.svg",
    content: <DummyContent />,
  },
  {
    category: "Info",
    title: "The power of having the right platform to trust",
    src: "/hero.svg",
    content: <DummyContent />,
  },

  {
    category: "Info",
    title: "BTC, ETH, USDT are here and other to come",
    src: "/hero.svg",
    content: <DummyContent />,
  },
  {
    category: "Info",
    title: "Don't fall into the hand of rippers. We are here to make you safe",
    src: "/hero.svg",
    content: <DummyContent />,
  },

  {
    category: "Info",
    title: "Join the community of the crypto aware",
    src: "/hero.svg",
    content: <DummyContent />,
  },
];

const Hero = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl lg:text-5xl font-bold tracking-widest text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know Coinstick.
      </h2>
      <Carousel items={cards} />
    </div>
  );
};

export default Hero;
