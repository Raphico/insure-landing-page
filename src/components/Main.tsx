import Container from "./styles/Container.styled";
import Grid from "./styles/Grid.styled";
import StyledMain from "./styles/StyledMain.styled";

function Main() 
{
  return (
    <StyledMain>
      <Container>
        <div className="bar"></div>
        <h1 className="main-intro">We're Different</h1>
        <Grid className="main-reasons" columns="3" gap=''>
          <div>
            <img src="/icon-snappy-process.svg" alt="icon" />
            <h1>Snappy Process</h1>
            <p>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
          </div>

          <div>
            <img src="/icon-affordable-prices.svg" alt="icon" />
            <h1>Affordable Prices</h1>
            <p>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
          </div>

          <div>
            <img src="/icon-people-first.svg" alt="icon" />
            <h1>People First</h1>
            <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
          </div>
        </Grid>          
      </Container>
    </StyledMain>
  )
}

export default Main;
