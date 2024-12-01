import Image from "next/image";
import img from "../../../../public/profissionais/proficional2.png";

const ProfileComponent2 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-brownBg px-10 md:px-16 lg:px-20">
      <div className="lg:w-1/2 flex justify-center rounded-full">
        <Image alt="proficional" src={img} className="rounded-full" />
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800">
          FLÁVIA BORDIN - NUTRICIONISTA
        </h2>
        <p className="mt-2 text-brownBgNav">
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
