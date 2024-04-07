import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logos/Prancheta.png";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Button} from "@nextui-org/react";
import { IoChevronDown } from "react-icons/io5";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false); 

  const menuItems = [
    "Fale conosco",
    "Quem somos?",
    "Veículos",
  ]

  return (
    <Navbar className="h-16 bg-transparent" position="sticky" onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll >
      <NavbarContent>
        <NavbarBrand>
          <Image src={Logo} alt="Logo" width={48}/>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            Fale conosco
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="#" aria-current="page">
            Quem somos?
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
