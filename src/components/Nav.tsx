import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logos/Prancheta.png";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false); 

  const menuItems = [
    { label: "Fale conosco", href: "#contato"},
    { label: "Quem somos?", href: "#quem-somos"},
  ]

  const handleSmoothScroll = ({targetId}: any) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
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
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.label}-${index}`}>
            <Link color="foreground" href={item.href} onClick={handleSmoothScroll}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
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
