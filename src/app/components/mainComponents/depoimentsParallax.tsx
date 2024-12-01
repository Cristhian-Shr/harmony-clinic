"use client";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export function DepoimentsParallax() {
  return (
    <section className="py-16 flex flex-col items-center bg-brownBgNav text-writingOne">
      <h1 className="text-2xl md:text-3xl lg:text-5xl pb-8 font-semibold">Veja algum depoimentos</h1>
      <ParallaxScroll images={images} />
    </section>
  );
}

const images = [
  "depoimentos/depoiment1.jpeg",
  "depoimentos/depoiment2.jpeg",
  "depoimentos/depoiment3.jpeg",
  "depoimentos/depoiment4.jpeg",
  "depoimentos/depoiment1.jpeg",
  "depoimentos/depoiment2.jpeg",
  "depoimentos/depoiment3.jpeg",
  "depoimentos/depoiment4.jpeg",
  "depoimentos/depoiment1.jpeg",
  "depoimentos/depoiment2.jpeg",
  "depoimentos/depoiment3.jpeg",
  "depoimentos/depoiment4.jpeg",
];

