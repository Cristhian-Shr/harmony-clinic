import Image from "next/image";
import React from "react";

const ResultsGallery = () => {
  const photos = [
    "/resultados/facialResult8.jpeg",
    "/resultados/facialResult1.jpeg",
    "/resultados/facialResult2.jpeg",
    "/resultados/facialResult4.jpeg",
    "/resultados/facialResult5.jpeg",
    "/resultados/facialResult6.jpeg",
    "/resultados/facialResult7.jpeg",
    "/resultados/facialResult10.jpeg",
    "/resultados/facialResult9.jpeg",
    "/resultados/facialResult11.jpeg",
    "/resultados/facialResult12.jpeg",
    "/resultados/facialResult13.jpeg",
    "/resultados/facialResult14.jpeg",
    "/resultados/facialResult3.jpeg",
  ];

  const captions = [
    "Preenchimento labial",
    "Harmonização facial com apenas 3 ml de ácido hialurônico",
    "Preenchimento labial para volume e contorno",
    "Preenchimento labial",
    "Endolifting para melhora da flacidez",
    "Endolifting para estímulo de colágeno",
    "Preenchimento labial com 1ml de ácido hialurônico",
    "Bioestimulador de colágeno para flacidez",
    "Preenchimento labial",
    "Bioestimulador de colágeno",
    "Harmonização facial",
    "Toxina botulínica (botox) para linhas dinâmicas",
    "Harmonização facial",
    "Preenchimento labial",
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-brownBg py-16">
      <h1 className="text-brownBgNav text-xl md:text-3xl lg:text-5xl pb-10 text-center">
        Veja alguns resultados faciais da Harmony Clinic
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-6xl">
        {photos.map((photo, index) => (
          <div key={index} className="flex flex-col items-center text-center shadow-lg rounded-2xl overflow-hidden bg-white">
            <Image
              src={photo}
              alt={`Photo ${index + 1}`}
              width={300}
              height={300}
              className="rounded-2xl object-cover w-full h-auto"
            />
            <p className="p-3 text-sm text-gray-700">{captions[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsGallery;
