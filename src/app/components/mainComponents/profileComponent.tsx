'use client';
import Image from "next/image";
import img from "../../../../public/profissionais/NatanaSemfundo.png";
import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const ProfileComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, [ProfileComponent]);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-brownBgNav px-10 md:px-16 lg:px-40" id="about">
      <div className="lg:w-1/2" data-aos="fade-right">
        <h2 className="text-2xl font-bold text-gray-800/90">NATANA KUNST - BIOMÉDICA ESTETA</h2>
        <div className="">
        <p className="mt-2 text-writingOne pt-4 mt:pt-0">
          Formada em Biomedicina, pós graduanda em ortomolecular e pós graduada em biomédica estética pela
          Universidade Feevale. 
        </p>
        <p className="mt-2 text-writingOne">
          A biomedicina estética a conquistou desde o início da faculdade,
          quando iniciou estágio em uma clínica em Porto Alegre. Após concluir
          sua formação atuou por quase 7 anos como gerente e Biomédica em
          franquias de emagrecimento e estética facial e corporal nas cidades de
          Novo Hamburgo e Montenegro.
        </p>
        <p className="mt-2 text-writingOne">
          Atualmente atende diversos procedimentos, como: Toxina botulínica ;
          Skinbooster, bioestimuladores de colágeno faciais e corporais, fios de
          PDO, preenchimentos full face, microagulhamento, peelings químicos,
          harmonização glútea e Endolifting.
        </p>
        <p className="mt-2 text-writingOne">
          Seus procedimentos preferidos e mais procurados são: Botox,
          rinomodelaçao, preenchimento labial e endolifting.
        </p>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center rounded-full pt-5 md:pt-0" data-aos="fade-left">
        <Image alt="proficional" src={img} className="rounded-full hover:scale-105 duration-500" />
      </div>
    </div>
  );
};

export default ProfileComponent;
