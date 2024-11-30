import Image from "next/image";
import React from "react";

const ResultsGalery = () => {
  const photos = [
    "/resultados/result1.jpeg",
    "/resultados/result2.jpeg",
    "/resultados/result1.jpeg",
    "/resultados/result2.jpeg",
  ];

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="text-brownBgNav py-20 text-xl md:text-3xl lg:text-5xl">
        Veja alguns resultados da nossa clinica
      </h1>
      <div className="lg:grid lg:grid-cols-4 gap-4 p-4 px-10 md:px-16 lg:px-20 bg-brownBg text-brownBgNav flex">
        {photos.map((photo, index) => (
          <div key={index} className="shadow-lg">
            <Image
              width={100}
              height={100}
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-96 h-96"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsGalery;
