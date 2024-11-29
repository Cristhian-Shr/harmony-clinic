"use client";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import depoiment from "../../../../public/depoimentos/WhatsApp Image 2024-11-20 at 15.14.20.jpeg";

export function DepoimentsParallax() {
  return (
    <section className="py-32 flex flex-col items-center">
      <h1 className="py-8 text-5xl">Veja algum depoimentos</h1>
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

