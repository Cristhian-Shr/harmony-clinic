"use client";
import Image from "next/image";
import harmony from "../../../../public/profissionais/equipe01-removebg-preview.png";
import CallToActionBtn from "../systemsComponents/callToActionBtn";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About: React.FC = ({}) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, [About]);

  return (
    <section className="w-full h-screen flex flex-col lg:flex-row px-10 md:px-20 lg:px-40 text-brownBgNav">
      <div
        className="lg:w-1/2 flex flex-col justify-center pt-5 md:pt-0"
        data-aos="fade-right"
      >
        <h1 className="text-sm md:text-2xl font-thin">Harmony Clinic Bagé</h1>
        <h2 className="text-xl md:text-3xl lg:text-5xl pt-5 tracking-widest uppercase text-center lg:text-start">
          Invista em você e declare seu amor por você mesma!
        </h2>
        <p className="pt-10 text-sm md:text-base text-center lg:text-start">
          Na Harmony, nossa missão é proporcionar uma experiência única de
          bem-estar e beleza, valorizando a individualidade de cada cliente.
          Comprometemo-nos a oferecer tratamentos inovadores e de alta qualidade
          e técnicas avançadas. Buscamos transformar vidas através do cuidado
          pessoal, promovendo a autoestima e a confiança em um ambiente
          acolhedor e profissional .
        </p>
        <div className="pb-10 self-center lg:self-start">
          <CallToActionBtn />
        </div>
      </div>
      <div
        className="lg:w-1/2 flex flex-col items-center justify-center relative pl-5"
        data-aos="fade-left"
      >
        <Image
          alt="harmony"
          src={harmony}
          className="w-[300px] md:w-[600px] rounded-lg hover:scale-105 duration-300"
        />
        <div className="absolute inset-0 bg-[#eeeae5] bg-opacity-40 rounded-lg pointer-events-none w-full"></div>
      </div>
    </section>
  );
};

export default About;
