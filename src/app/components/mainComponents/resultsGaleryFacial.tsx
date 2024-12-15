import Image from "next/image";
import React from "react";

const ResultsGalery = () => {
  const photos = [
    "/resultados/facialResult1.jpeg",
    "/resultados/facialResult2.jpeg",
    "/resultados/facialResult3.jpeg",
    "/resultados/facialResult4.jpeg",
    "/resultados/facialResult5.jpeg",
    "/resultados/facialResult6.jpeg",
    "/resultados/facialResult7.jpeg",
    "/resultados/facialResult8.jpeg",
    "/resultados/facialResult9.jpeg",
    "/resultados/facialResult10.jpeg",
    "/resultados/facialResult11.jpeg",
    "/resultados/facialResult12.jpeg",
    "/resultados/facialResult13.jpeg",
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
    "Resultado 11: Confiança restaurada",
    "Resultado 12: Resultados de qualidade",
    "Resultado 13: Satisfação garantida",
  ];

  return (
    <div className="flex flex-col items-center w-full h-full min-h-[100vh]">
      <h1 className="text-brownBgNav py-20 text-xl md:text-3xl lg:text-5xl">
        Veja alguns resultados faciais da Harmony Clinic
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

export default ResultsGalery;