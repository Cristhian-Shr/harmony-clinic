'use client';
import Image from "next/image";
import img from "../../../../public/profissionais/proficional2.png";
import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const ProfileComponent2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-brownBg px-10 md:px-16 lg:px-20">
      <div className="lg:w-1/2 flex justify-center rounded-full" data-aos="fade-right">
        <Image alt="proficional" src={img} className="rounded-full hover:scale-105 duration-500" />
      </div>
      <div className="lg:w-1/2" data-aos="fade-left">
        <h2 className="text-2xl font-bold text-gray-800/90 pt-5 md:pt-0">
          FLÁVIA BORDIN - NUTRICIONISTA
        </h2>
        <p className="mt-2 text-brownBgNav pt-4 mt:pt-0">
          Nutricionista formada pela Urcamp. Pós graduada em nutrição clínica
          pela Estácio e pós graduanda em nutrição comportamental e coaching
          nutricional pela plenitude educação!
        </p>
        <p className="mt-2 text-brownBgNav">
          Expert em Emagrecimento pelo Instituto Ana Paula Pujol. Foco em
          atendimento feminino.
        </p>
        <p className="mt-2 text-brownBgNav">
          Prioriza dietas onde não haja restrições e nem proibições! Atendimento
          humanizado, focando nas preferências da paciente
        </p>
      </div>
    </div>
  );
};

export default ProfileComponent2;
