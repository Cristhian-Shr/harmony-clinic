import Image from "next/image";
import img from "../../../../public/profissionais/proficional3.png";

const ProfileComponent3 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-brownBgNav px-10 md:px-16 lg:px-40">
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800">
         Dr. Natana Kunts
        </h2>
        <p className="mt-2 text-writingOne">
          Aqui você pode adicionar uma descrição detalhada sobre a profissional,
          suas habilidades, experiências e conquistas.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center rounded-full">
        <Image alt="proficional" src={img} className="rounded-full" />
      </div>
    </div>
  );
};

export default ProfileComponent3;
