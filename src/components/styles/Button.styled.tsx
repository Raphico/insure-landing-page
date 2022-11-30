import styled from 'styled-components';

type Props = {
  theme: {
    fonts: {
      body: string,
      heading: string,
    },
    colors: {
      darkViolet: string,
      grayishBlue: string,
      veryDarkViolet: string,
      darkGrayishViolet: string,
      veryLightGray: string
    },
    padding: {
      main: string
    }
  },
  
  c1: string,
  c2: string,
  borderWidth: string
}

const Button = styled.button<Props>`
  cursor: pointer;
  background-color: ${({ c1 }) => c1};
  color:  ${({ c2 }) => c2};
  padding: 10px 30px;
  border: ${({ borderWidth }) => borderWidth} solid ${({ c2 }) => c2};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 15px;
  transition: all 0.3s;

  :hover 
  {
    background-color: ${({ c2 }) => c2};
    color:  ${({ c1 }) => c1};
    transform: Scale(1.1);
    font-weight: 300;
  }
`;

export default Button;
