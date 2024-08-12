/* eslint-disable prettier/prettier */
//Info.tsx
"use client";

import StickyScrollReveal from "./ui/sticky-scroll";

const information = [
  {
    title: "Buying or Selling cryptocurrency should not be difficult",
    description: `You are guaranteed of the best rate in the market. 
    Payment gets to the provided bank accounts in less than 3 minutes.
    You don't need to wait for hours waiting for confirmation; you get paid on 1/3 Confirmation.
    You don't only transact here; you also get educated.
    User-friendly and easy-to-use interface.
    24/7 best customer support experience you can never imagine.`,
    image: "/circle1.svg",
  },
  {
    title: "We Facilitate International Remittance",
    description: `We have taken the power of blockchain technology to drive financial inclusion.
    We transcend beyond just buying and selling.
    We help brethren in the diaspora fulfill Domestic Remittance to loved ones and avoid outrageous bank charges and unnecessary delays in international wire transfers.`,
    image: "/circle2.svg",
  },
  {
    title: "Do you need an Advanced Advisory Service?",
    description: `We have seasoned professionals who serve our high-net-worth clients and offer advisory services to help maintain coherence in their portfolios, get the right exposure, and maximize the best possible return.
    We consider your Risk Appetite.
    Your Investment Horizon.
    Your level of Financial Literacy.`,
    image: "/circle3.svg",
  },
];

const Info = () => {
  return (
    <div>
      <StickyScrollReveal
        content={information}
        contentClassName="custom-class"
      />
    </div>
  );
};

export default Info;
