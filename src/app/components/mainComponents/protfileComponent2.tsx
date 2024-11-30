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
         Dr. Natana Kunts
        </h2>
        <p className="mt-2 text-brownBgNav">
          Aqui você pode adicionar uma descrição detalhada sobre a profissional,
          suas habilidades, experiências e conquistas.
        </p>
      </div>
    </div>
  );
};

export default ProfileComponent2;
