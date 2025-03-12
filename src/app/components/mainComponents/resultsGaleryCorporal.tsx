import Image from "next/image";
import React from "react";

const ResultsGalleryCorporal = () => {
  const photos = [
    "/resultados/corporalResult1.jpeg",
    "/resultados/corporalResult2.jpeg",
    "/resultados/corporalResult4.jpeg",
    "/resultados/corporalResult5.jpeg",
    "/resultados/corporalResult7.jpeg",
    "/resultados/corporalResult8.jpeg",
    "/resultados/corporalResult9.jpeg",
    "/resultados/corporalResult10.jpeg",
  ];

  const captions = [
    "5 dias após Endolift",
    "7 dias após Endolift",
    "Bioestimulador de colágeno para melhora do viço e firmeza do Glúteo",
    "Endolift para melhora da flacidez",
    "Endolifting para gordura e flacidez",
    "Endolift para diminuir a gordura do sutiã e melhora da firmeza da pele ",
    "Endolift ",
    "Peim (secagem de micro vasos)",
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-brownBg py-16" id="resultosCorporais">
      <h1 className="text-brownBgNav text-xl md:text-3xl lg:text-5xl pb-10 text-center">
        Veja alguns resultados corporais da Harmony Clinic
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-6xl justify-center">
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

export default ResultsGalleryCorporal;
