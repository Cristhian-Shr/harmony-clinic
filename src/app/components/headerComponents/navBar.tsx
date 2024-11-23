import Image from "next/image";
import logoTipo from "../../../../public/logo/logo06-removebg-preview.png";
import Link from "next/link";

const Navbar: React.FC = ({}) => {
  return (
    <section className="w-full h-24 px-10 md:px-20 lg:px-40 flex items-center justify-between">
        <Link href="/">
          <Image alt="logoTipo" src={logoTipo} className="w-80" />
        </Link>
      <div>
        <nav>
          <ul className="flex gap-5 font-semibold text-slate-400">
            <Link href="#" className="hover:text-slate-600 duration-300">
              Home
            </Link>
            <Link href="#" className="hover:text-slate-700 duration-300">
              Sobre
            </Link>
            <Link href="#" className="hover:text-white duration-300">
              Depoimentos
            </Link>
            <Link href="#" className="hover:text-white duration-300">
              Resultados
            </Link>
            <Link href="#" className="hover:text-white duration-300">
              Contato
            </Link>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
