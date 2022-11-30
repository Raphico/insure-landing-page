import styled from 'styled-components';
import Props from './themeType';

const StyledAbout = styled.main<Props>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkViolet};
  color: ${({ theme }) => theme.colors.veryLightGray};
  margin: 50px 0;
  padding: 70px 60px;
  overflow: hidden;

  h1
  {
    font-size: 3rem;
    line-height: 1.2em;
    width: 50%;
  } 

  img
  {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }

  Button
  {
    z-index: 10;
  }

  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1)
  {
    .flex 
    {
      flex-direction: column;
      gap: 20px;
    }
    
    h1
    {
      text-align: center;
      font-size: 2em;
    }
  }

  @media only screen 
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  {
    h1
    {
      font-size: 1.5em;
      width: 100%;
    }

    Button
    {
      font-size: 10px;
    }
  }
`;

export default StyledAbout;
