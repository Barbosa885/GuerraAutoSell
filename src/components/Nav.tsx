import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logos/Prancheta.png";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false); 

  const menuItens = [
    "Fale conosco",
    "Quem somos?"
  ]

  return (
    <Navbar className="h-16" position="sticky" onMenuOpenChange={setIsMenuOpen}>

    <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={Logo} alt="Logo" width={48}/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            Fale conosco
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Quem somos?
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
