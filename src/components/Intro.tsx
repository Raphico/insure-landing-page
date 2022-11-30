import Button from "./styles/Button.styled";
import StyledIntro from "./styles/StyledIntro.styled";
import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";

function Intro() 
{
  return (
    <StyledIntro>
      <Container>
        <Flex className="flex" gap='5rem'>
          <div className='section-1'>
            <div className="bar"></div>
            <h1>Humanizing your insurance.</h1>
            <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
            <Button c1="#2d2640" c2="#fafafa" borderWidth="1px">VIEW PLANS</Button>
          </div>

          <div className="section-2">
            {window.innerWidth < 414 ? <img id="intro-img" src="/image-intro-mobile.jpg" alt="pattern" /> : <img id="intro-img" src="/image-intro-desktop.jpg" alt="pattern" />}
          </div>

          {window.innerWidth < 1200 ? <img id='left-pattern' src="/bg-pattern-intro-left-mobile.svg" alt="pattern" /> : <img id='left-pattern' src="/bg-pattern-intro-left-desktop.svg" alt="pattern" />}

          {window.innerWidth < 1200 ? <img id="right-pattern" src="/bg-pattern-intro-right-mobile.svg" alt="pattern" /> : <img id="right-pattern" src="/bg-pattern-intro-right-desktop.svg" alt="pattern" />}

        </Flex>
      </Container>
    </StyledIntro>
  )
}

export default Intro;
