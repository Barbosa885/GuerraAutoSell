import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logos/Prancheta.png";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false); 

  const menuItems = [
    { label: "Fale conosco", href: "contato"},
    { label: "Quem somos?", href: "quem-somos"},
  ]

  const handleSmoothScroll = ({event, targetId}: any) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Ajuste conforme necessário para a altura da Navbar
        behavior: 'smooth',
      });
    }
  };

  return (
    <Navbar className="h-16 bg-transparent fixed" position="sticky" onMenuOpenChange={setIsMenuOpen} >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" >
            <Image src={Logo} alt="Logo" width={48}/>
          </Link>
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
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              onClick={(event) => handleSmoothScroll({ event, targetId: item.href})}
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
