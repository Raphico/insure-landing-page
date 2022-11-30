import styled from "styled-components";
import Props from "./themeType";

const StyledIntro = styled.main<Props>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkViolet};
  color: ${({ theme }) => theme.colors.veryLightGray};
  height: 650px;
  margin-bottom: 20rem;

  #left-pattern 
  {
    position: absolute;
    left: 0;
    top: 74%;
  }

  #right-pattern 
  {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 80;
  }

  .section-1
  {    
    h1
    {
      font-size: 4em;
      line-height: 1.2em;
    }

    .bar
    {
      background-color: ${({ theme }) => theme.colors.grayishBlue};
      width: 10rem;
      height: 1px;
      margin-bottom: 3rem;
    }

    p
    {
      margin: 30px 0;
      color: ${({ theme }) => theme.colors.darkGrayishViolet};
      line-height: 1.5;
      font-size: 20px;
    }
  }

  .section-2 
  {
    transform: translateY(10rem);
    width: 100%;

    #intro-img
    {
      border-radius: 3px;
    }
  }

  // for tablets and mobile phones
  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1)
  {
    height: 100%;
    margin-bottom: 50px;

    .flex 
    {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .section-1 
    {
      margin-bottom: 50px;
      order: 1;

      h1
      {
        font-size: 2em;
      }

      .bar 
      {
        display: none;
      }
    }

    .section-2 
    {
      transform: translateY(-1%);
      width: 125%;

      #intro-img
      {
        width: 100%;
      }
    }

    #left-pattern
    {
      top: calc(100% - 24em);
    } 

    #right-pattern
    {
      top: 85%;
      right: 0;
    }
  }

  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px) 
  {
    #left-pattern
    {
      top: calc(100% - 31em);
    } 
  }
`;

export default StyledIntro;
