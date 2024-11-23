import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
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
        <button><IoMenu className="text-5xl" /></button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-center">Harmony Clinic Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Sobre
            <DropdownMenuShortcut><HiOutlineBuildingOffice2 /></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
          Depoimentos
          <DropdownMenuShortcut><SiGithubsponsors /></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
          Contato
            <DropdownMenuShortcut><MdOutlinePhoneAndroid /></DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
