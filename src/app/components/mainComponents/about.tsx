import Image from "next/image";
import harmony from "../../../../public/profissionais/equipe01.jpeg";

const About: React.FC = ({}) => {
  return (
    <section className="w-full h-screen flex flex-col lg:flex-row px-10 md:px-20 lg:px-40 bg-customMarron2">
      <div className="lg:w-1/2 flex flex-col justify-center text-white">
        <h1 className="text-xl md:text-3xl lg:text-5xl">Harmony Clinic Bagé</h1>
        <p className="pt-10 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          exercitationem ab esse possimus inventore labore, facere deleniti odio
          neque fuga iusto, quis dolore atque soluta maxime at corrupti rem
          facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illum exercitationem ab esse possimus inventore labore, facere
          deleniti odio neque fuga iusto, quis dolore atque soluta maxime at
          corrupti rem facilis?
        </p>
        <p className="pt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          exercitationem ab esse possimus inventore labore, facere deleniti odio
          neque fuga iusto, quis dolore atque soluta maxime at corrupti rem
          facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illum exercitationem ab esse possimus inventore labore, facere
          deleniti odio neque fuga iusto, quis dolore atque soluta maxime at
          corrupti rem facilis?
        </p>
      </div>
      <div className="lg:w-1/2 flex flex-col items-center justify-center relative">
        <Image
          alt="harmony"
          src={harmony}
          className="w-[600px] rounded-lg filter"
        />
        <div className="absolute inset-0 bg-[#b49ca5] bg-opacity-40 rounded-lg pointer-events-none"></div>
      </div>
    </section>
  );
};

export default About;
