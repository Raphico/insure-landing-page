import styled from 'styled-components';
import Props from './themeType';

const StyledNav = styled.nav<Props>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 400;
  padding: 30px 0;

  li
  {
    list-style: none;
    padding-right: 3rem;

    a
    {
      font-size: 0.95em;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.darkGrayishViolet};
      transition: all 0.3s;

      &:hover
      {
        color: ${({ theme }) => theme.colors.veryDarkViolet};
      }
    }
  }

  .hamburger
  {
    display: none;
  }

  .sm 
  {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.darkViolet};
    width: 100vw;
    height: 100vh;
    transform: translateY(80px);
    z-index: 100;
  }

  .sm.show 
  {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    a
    {
      color: #fff;
      font-size: 1.2em;
    }

    li
    {
      padding: 50px 0;
    }

    Button
    {
      width: 50%;
      margin-top: 30px;
      padding: 20px 30px;
      font-size: 1.2em;
    }

    img 
    {
      position: absolute;
      width: 100%;
      bottom: 0;
    }
  }

  // for tablets and mobile phones
  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1)
  {
    .lg
    {
      display: none;
    }

    .hamburger, .pattern
    {
      display: block;
    }
  }
`;

export default StyledNav;
