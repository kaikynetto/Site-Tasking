import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLink, NavBtn } from "./NavbarElements";
import Link from "next/link";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <Link href="/">
            <NavLogo>TASKING</NavLogo>
          </Link>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <Link href="/">
                <NavLinks>Home</NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/contato">
                <NavLinks>Contato</NavLinks>
              </Link>
            </NavItem>
            <NavBtn>
              <NavBtnLink onClick={() => {
                // adicionar site da tasking
                window.location.href = '/signup';
              }}>Cadastrar</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
