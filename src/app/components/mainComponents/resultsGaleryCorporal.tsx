import Image from "next/image";
import React from "react";

const ResultsGaleryCorporal = () => {
  const photos = [
    "/resultados/corporalResult1.jpeg",
    "/resultados/corporalResult2.jpeg",
    "/resultados/corporalResult3.jpeg",
    "/resultados/corporalResult4.jpeg",
    "/resultados/corporalResult5.jpeg",
    "/resultados/corporalResult6.jpeg",
    "/resultados/corporalResult7.jpeg",
    "/resultados/corporalResult8.jpeg",
    "/resultados/corporalResult9.jpeg",
    "/resultados/corporalResult10.jpeg",
  ];

  const captions = [
    "Resultado 1: Antes e Depois",
    "Resultado 2: Melhora na pele",
    "Resultado 3: Tratamento eficaz",
    "Resultado 4: Resultados visíveis",
    "Resultado 5: Sorriso renovado",
    "Resultado 6: Pele radiante",
    "Resultado 7: Transformação incrível",
    "Resultado 8: Cuidados com a pele",
    "Resultado 9: Resultados impressionantes",
    "Resultado 10: Beleza natural",
  ];

  return (
    <div className="flex flex-col items-center w-full h-full min-h-[100vh]">
      <h1 className="text-brownBgNav py-20 text-xl md:text-3xl lg:text-5xl">
        Veja alguns resultados corporais da Harmony Clinic
      </h1>
      <div className="lg:grid lg:grid-cols-4 gap-4 p-4 px-10 md:px-16 lg:px-20 bg-brownBg text-brownBgNav flex flex-col ">
        {photos.map((photo, index) => (
          <div key={index} className="shadow-lg">
            <Image
              width={100}
              height={100}
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-96 h-96"
            />
            <p className="text-center mt-2 text-sm text-gray-600">{captions[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsGaleryCorporal;