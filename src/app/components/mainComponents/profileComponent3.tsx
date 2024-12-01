'use client';
import Image from "next/image";
import img from "../../../../public/profissionais/proficional3.png";
import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const ProfileComponent3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, [ProfileComponent3]);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-brownBgNav px-10 md:px-16 lg:px-40">
      <div className="lg:w-1/2" data-aos="fade-right">
        <h2 className="text-2xl font-bold text-gray-800">
          ENDRISE MOREIRA - ESTETOCOSMETÓLOGA
        </h2>
        <p className="mt-2 text-writingOne pt-4 mt:pt-0">
          Formada desde 2017 em Estética pelo Capacitar Grupo Educacional - Polo
          Fael. Natural de Bagé-RS. Estudante de biomedicina atualmente pela
          Unicesumar.
        </p>
        <p className="mt-2 text-writingOne">
          A Estética a conquistou em 2013 quando teve seu primeiro contato em
          uma clínica de biomedicina Estética, desde então foram diversos cursos
          e aperfeiçoamentos na área.
        </p>
        <p className="mt-2 text-writingOne">
        Atualmente atende a diversos procedimentos, como:
        Limpeza de pele, microagulhamento, carboxi, PEIM, mesoterapia…
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center rounded-full" data-aos="fade-left">
        <Image alt="proficional" src={img} className="rounded-full hover:scale-105 duration-500" />
      </div>
    </div>
  );
};

export default ProfileComponent3;
