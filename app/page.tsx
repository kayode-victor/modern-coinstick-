"use client";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Wave from "@/components/Wave";
import Work from "@/components/Work";

export default function Home() {
  return (
    <section className="flex flex-col w-full gap-5">
      <Hero />
      <CTA />
      <Info />
      <Work />
      <Wave />
    </section>
  );
}
