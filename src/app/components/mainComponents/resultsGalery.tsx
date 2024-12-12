import Image from "next/image";
import React from "react";

const ResultsGalery = () => {
  const photos = [
    "/resultados/result1.jpeg",
    "/resultados/result2.jpeg",
    "/resultados/result3.jpeg",
    "/resultados/result4.jpeg",
    "/resultados/result5.jpeg",
    "/resultados/result6.jpeg",
    "/resultados/result7.jpeg",
    "/resultados/result8.jpeg",
    "/resultados/result9.jpeg",
    "/resultados/result10.jpeg",
    "/resultados/result11.jpeg",
    "/resultados/result12.jpeg",
    "/resultados/result13.jpeg",
    "/resultados/result14.jpeg",
    "/resultados/result15.jpeg",
    "/resultados/result16.jpeg",
    "/resultados/result17.jpeg",
    "/resultados/result18.jpeg",
    "/resultados/result19.jpeg",
    "/resultados/result20.jpeg",
    "/resultados/result21.jpeg",
    "/resultados/result22.jpeg",
    "/resultados/result23.jpeg",
  ];

  return (
    <div className="flex flex-col items-center w-full h-full min-h-[100vh]">
      <h1 className="text-brownBgNav py-20 text-xl md:text-3xl lg:text-5xl">
        Veja alguns resultados da nossa clinica
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsGalery;
