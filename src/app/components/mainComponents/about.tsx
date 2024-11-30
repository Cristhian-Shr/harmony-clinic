import Image from "next/image";
import harmony from "../../../../public/profissionais/equipe01-removebg-preview.png";
import CallToActionBtn from "../systemsComponents/callToActionBtn";

const About: React.FC = ({}) => {
  return (
    <section className="w-full h-screen flex flex-col lg:flex-row px-10 md:px-20 lg:px-40 text-brownBgNav">
      <div className="lg:w-1/2 flex flex-col justify-center ">
        <h1 className="text-sm md:text-2xl font-thin">Harmony Clinic Bagé</h1>
        <h2 className="text-xl md:text-3xl lg:text-5xl pt-5 tracking-widest uppercase">Invista em você
        e declare seu amor por você mesma!</h2>
        <p className="pt-10 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          exercitationem ab esse possimus inventore labore, facere deleniti odio
          neque fuga iusto, quis dolore atque soluta maxime at corrupti rem
          facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illum exercitationem ab esse possimus inventore labore, facere
          deleniti odio neque fuga iusto, quis dolore atque soluta maxime at
          corrupti rem facilis?
        </p>
        <div className="pb-10 self-start md:self-center lg:self-start">
        <CallToActionBtn />
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col items-center justify-center relative">
        <Image
          alt="harmony"
          src={harmony}
          className="w-[300px] md:w-[600px] rounded-lg filter"
        />
        {/* <div className="absolute inset-0 bg-[#eeeae5] bg-opacity-40 rounded-lg pointer-events-none"></div> */}
      </div>
    </section>
  );
};

export default About;
