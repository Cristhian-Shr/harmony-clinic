import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { IoMenu } from "react-icons/io5"
import { MdOutlinePhoneAndroid } from "react-icons/md"
import { SiGithubsponsors } from "react-icons/si"

export function DropdownMenuCel() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button><IoMenu className="text-5xl"/></button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 bg-brownBgNav text-writingOne mr-20 mt-5">
        <DropdownMenuLabel className="text-center">Harmony Clinic Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:text-brownBgNav hover:bg-writingOne duration-500 font-semibold">
            Sobre
            <DropdownMenuShortcut><HiOutlineBuildingOffice2 /></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:text-brownBgNav hover:bg-writingOne duration-500 font-semibold">
          Depoimentos
          <DropdownMenuShortcut><SiGithubsponsors /></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:text-brownBgNav hover:bg-writingOne duration-500 font-semibold">
          Resultados
            <DropdownMenuShortcut><MdOutlinePhoneAndroid /></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:text-brownBgNav hover:bg-writingOne duration-500 font-semibold">
          Contato
            <DropdownMenuShortcut><MdOutlinePhoneAndroid /></DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {/* <DropdownMenuGroup>
          <DropdownMenuItem className="hover:text-brownBgNav hover:bg-writingOne duration-500 font-semibold">Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="hover:text-brownBgNav hover:bg-writingOne duration-500 font-semibold">Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem className="hover:text-brownBgNav hover:bg-writingOne duration-500 font-semibold">Email</DropdownMenuItem>
                <DropdownMenuItem className="hover:text-brownBgNav hover:bg-writingOne duration-500 font-semibold">Message</DropdownMenuItem>
                <DropdownMenuSeparator className="text-white border-b" />
                <DropdownMenuItem className="hover:text-brownBgNav hover:bg-writingOne duration-500 font-semibold">More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
