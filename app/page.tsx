"use client";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Info from "@/components/Info";

export default function Home() {
  return (
    <section className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <CTA />
      <Info />
    </section>
  );
}
