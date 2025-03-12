import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoMenu } from "react-icons/io5";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { SiGithubsponsors } from "react-icons/si";

export function DropdownMenuCel() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <IoMenu className="text-5xl" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 bg-brownBgNav text-writingOne mr-20 mt-5">
        <DropdownMenuLabel className="text-center">
          Harmony Clinic Menu
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="#about" className="hover:text-brownBgNav hover:bg-writingOne duration-500 font-semibold flex mx-4">
              Sobre
              <HiOutlineBuildingOffice2 className="ml-auto" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="#depoiments" className="hover:text-brownBgNav hover:bg-writingOne duration-500 font-semibold flex mx-4">
              Depoimentos
              <SiGithubsponsors className="ml-auto" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="#resultosCorporais" className="hover:text-brownBgNav hover:bg-writingOne duration-500 font-semibold flex mx-4">
              Resultados Corporais
              <MdOutlinePhoneAndroid className="ml-auto" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="#resultosFaciais" className="hover:text-brownBgNav hover:bg-writingOne duration-500 font-semibold flex mx-4">
              Resultados Faciais
              <MdOutlinePhoneAndroid className="ml-auto" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="#contact" className="hover:text-brownBgNav hover:bg-writingOne duration-500 font-semibold flex mx-4">
              Contato
              <MdOutlinePhoneAndroid className="ml-auto" />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
