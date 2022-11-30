import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";
import StyledAbout from "./styles/StyledAbout.styled";

function About() 
{
  return (
    <Container> 
      <StyledAbout>
        <Flex className="flex">
          <h1>Find out more about how we work</h1>
          <Button c1="#2d2640" c2="#fafafa" borderWidth="1px">HOW WE WORK</Button>
          {window.innerWidth < 1200 ? <img src="/bg-pattern-how-we-work-mobile.svg" alt="pattern" /> : <img src="/bg-pattern-how-we-work-desktop.svg" alt="pattern" />}
        </Flex>
      </StyledAbout>
    </Container>
  )
}

export default About;
