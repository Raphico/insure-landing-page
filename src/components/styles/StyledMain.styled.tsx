import styled from "styled-components";
import Props from "./themeType";

const StyledMain = styled.main<Props>`
  color: ${({ theme }) => theme.colors.veryDarkViolet};

  .main-intro
  {
    position: relative;
    font-size: 3.5rem;
    margin-bottom: 5rem;
  }

  .bar 
  {
    background-color: ${({ theme }) => theme.colors.grayishBlue};
    width: 10rem;
    height: 1px;
    margin-bottom: 3rem;
  }

  .main-reasons 
  {
    gap: 5rem;

    h1
    {
      margin: 20px 0;
    }

    p
    {
      color: ${({ theme }) => theme.colors.darkGrayishViolet};
      line-height: 1.5;
      font-size: 19px;
    }
  } 

  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1)
  {
    .main-intro 
    {
      font-size: 3em;
      text-align: center;
    }

    .bar 
    {
      margin: auto;
      margin-bottom: 3rem;
    }

    .main-reasons
    {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
`;

export default StyledMain;
