import Image from "next/image";
import img from "../../../../public/profissionais/NatanaSemfundo.png";

const ProfileComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-brownBgNav px-10 md:px-16 lg:px-40">
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800">NATANA KUNST - BIOMÉDICA ESTETA </h2>
        <p className="mt-2 text-writingOne pt-4 mt:pt-0">
          Formada em Biomedicina e pós graduada em biomédica estética pela
          Universidade Feevale. Natural de Santa Maria do Herval e atualmente
          reside em Bagé- RS.
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
      <div className="lg:w-1/2 flex justify-center rounded-full pt-5 md:pt-0">
        <Image alt="proficional" src={img} className="rounded-full hover:scale-105 duration-500" />
      </div>
    </div>
  );
};

export default ProfileComponent;
