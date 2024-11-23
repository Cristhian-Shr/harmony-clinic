import Image from "next/image";
import logoTipo from "../../../../public/logo/logo06-removebg-preview.png";
import Link from "next/link";

const Navbar: React.FC = ({}) => {
  return (
    <section className="w-full h-20 px-10 md:px-20 lg:px-40 flex items-center justify-between">
      <div>
        <Image alt="logoTipo" src={logoTipo} className="w-80" />
      </div>
      <div>
        <nav>
          <ul className="flex gap-5 font-semibold text-black ">
            <Link href="#">Home</Link>
            <Link href="#">Sobre</Link>
            <Link href="#">Depoimentos</Link>
            <Link href="#">Resultados</Link>
            <Link href="#">Contato</Link>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
