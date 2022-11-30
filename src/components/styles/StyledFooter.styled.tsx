import styled from 'styled-components';
import Props from './themeType';

const StyledFooter = styled.footer<Props>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.veryLightGray};
  padding: 50px 0;

  .pattern
  {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .logo
  {
    z-index: 100;
  }

  .socials
  {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayishBlue};
    padding-bottom: 30px;
    margin-bottom: 50px;

    .icons svg
    {
      cursor: pointer;
      margin-right: 20px;
      z-index: 10;
    }

    .footer-icons:hover path
    {
      transition: all 0.3s;
      fill: ${({ theme }) => theme.colors.darkViolet};
    }
  }

  .bottom-footer
  {
    ul
    {
      z-index: 10;
      list-style: none;
    } 
    
    a
    {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.darkViolet};

      &:hover
      {
        text-decoration: underline;
      }
    }

    li
    {
      font-family: ${({ theme }) => theme.fonts.heading};
      font-size: 13px;
      font-weight: 600;
      padding: 15px 0;
    }

    h5
    {
      color: ${({ theme }) => theme.colors.darkGrayishViolet};
      font-size: 1rem;
      margin-bottom: 10px;
    }
  }

  @media only screen 
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  {
    .socials
    {
      flex-direction: column;
      gap: 2rem;
    }

    .bottom-footer
    {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
`;

export default StyledFooter;
