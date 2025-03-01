"use client";

import Image from "next/image";

export function DepoimentsGrid() {

  const images = [
    "/depoimentos/depoiment1.jpeg",
    "/depoimentos/depoiment2.jpeg",
    "/depoimentos/depoiment3.jpeg",
    "/depoimentos/depoiment4.jpeg",
    "/depoimentos/depoiment5.jpeg",
    "/depoimentos/depoiment6.jpeg",
    "/depoimentos/depoiment7.jpeg",
  ];

  return (
    <section className="py-16 flex flex-col items-center bg-brownBgNav text-writingOne">
      <h1 className="text-2xl md:text-3xl lg:text-5xl pb-8 font-semibold text-center">
        Veja alguns depoimentos
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-6 max-w-6xl justify-center">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex flex-col rounded-2xl overflow-hidden bg-brownBgNav"
          >
            <Image
              src={src}
              alt={`Depoimento ${index + 1}`}
              width={100}
              height={100}
              className="rounded-2xl object-cover w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

