import Image from "next/image";
import logoDesktop from "../../../../public/logo/logo06-removebg-preview.png";
import logoCel from "../../../../public/logo/logo05-removebg-preview.png";
import Link from "next/link";
import { DropdownMenuCel } from "./dropdownMenuCel";

const Navbar: React.FC = ({}) => {
  return (
    <section className="w-full h-24 px-10 md:px-20 flex items-center justify-between bg-brownBgNav">
      <Link href="/">
        <Image alt="logoTipo" src={logoDesktop} className="w-80 hidden lg:flex" />
        <Image alt="logoCel" src={logoCel} className="lg:hidden w-24" />
      </Link>
      <div>
        <nav className="hidden lg:flex">
          <ul className="flex gap-5 font-semibold text-writingOne">
            <Link href="#" className="hover:text-slate-700 duration-500">
              Home
            </Link>
            <Link href="#" className="hover:text-slate-700 duration-500">
              Sobre
            </Link>
            <Link href="#" className="hover:text-slate-700 duration-500">
              Depoimentos
            </Link>
            <Link href="#" className="hover:text-slate-700 duration-500">
              Resultados
            </Link>
            <Link href="#" className="hover:text-slate-700 duration-500">
              Contato
            </Link>
          </ul>
        </nav>
        <div className="lg:hidden">
          <DropdownMenuCel />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
