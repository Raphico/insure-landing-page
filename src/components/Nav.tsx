import { useState } from "react";
import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";
import StyledNav from "./styles/StyledNav.styled";

function Nav() 
{
  const [showNav, setShowNav] = useState(false);

  const openNav = () => setShowNav(true);
  const closeNav = () => setShowNav(false);

  return (
    <StyledNav>
      <Container>
        <Flex>
          <img src="/logo.svg" alt="logo" />

          <Flex className="lg">
            <li><a href="#">HOW WE WORK</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">ACCOUNT</a></li>
            <Button c1="#fff" c2="#2b272f" borderWidth="3px">VIEW PLANS</Button>
          </Flex>

          {showNav ? <img src="/icon-close.svg" alt="" onClick={closeNav} /> : <img className="hamburger" src="/icon-hamburger.svg" alt="" onClick={openNav} />}

          <Flex className={`sm ${showNav && 'show'}`}>
            <li><a href="#">HOW WE WORK</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">ACCOUNT</a></li>
            <Button c1="#2d2640" c2="#fafafa" borderWidth="1px">VIEW PLANS</Button>
            <img src="/bg-pattern-mobile-nav.svg" alt="pattern" />
          </Flex>

        </Flex>
      </Container>
    </StyledNav>
  )
}

export default Nav;
