"use client";

import Image from "next/image";
import depoiment1 from '../../../../public/depoimentos/depoiment1.jpeg';
import depoiment2 from '../../../../public/depoimentos/depoiment2.jpeg';
import depoiment3 from '../../../../public/depoimentos/depoiment3.jpeg';
import depoiment4 from '../../../../public/depoimentos/depoiment4.jpeg';
import depoiment5 from '../../../../public/depoimentos/depoiment5.jpeg';
import depoiment6 from '../../../../public/depoimentos/depoiment6.jpeg';
import depoiment7 from '../../../../public/depoimentos/depoiment7.jpeg';

export function DepoimentsGrid() {
  return (
    <section className="py-16 flex flex-col items-center bg-brownBgNav text-writingOne" id="depoiments">
      <h1 className="text-2xl md:text-3xl lg:text-5xl pb-8 font-semibold text-center">
        Veja alguns depoimentos
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-14 p-6 lg:p-0 w-full max-w-6xl">
        {/* Coluna 1 */}
        <div className="flex flex-col gap-10 items-center">
          <Image src={depoiment1} alt="Depoimento 1" className="rounded-2xl object-cover w-full max-w-[300px]" />
          <Image src={depoiment2} alt="Depoimento 2" className="rounded-2xl object-cover w-full max-w-[300px]" />
          <Image src={depoiment7} alt="Depoimento 7" className="rounded-2xl object-cover w-full max-w-[300px]" />
        </div>

        {/* Coluna 2 */}
        <div className="flex flex-col gap-6 items-center">
          <Image src={depoiment3} alt="Depoimento 3" className="rounded-2xl object-cover w-full max-w-[300px]" />
        </div>

        {/* Coluna 3 */}
        <div className="flex flex-col gap-6 items-center">
          <Image src={depoiment4} alt="Depoimento 4" className="rounded-2xl object-cover w-full max-w-[300px]" />
        </div>

        {/* Coluna 4 */}
        <div className="flex flex-col gap-2 items-center">
          <Image src={depoiment5} alt="Depoimento 5" className="rounded-2xl object-cover w-full max-w-[300px]" />
          <Image src={depoiment6} alt="Depoimento 6" className="rounded-2xl object-cover w-full max-w-[300px]" />
        </div>
      </div>
    </section>
  );
}
