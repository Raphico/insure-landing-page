import styled from 'styled-components';

type Props = {
  columns: string,
  gap: string,
}

const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns &&  `repeat(${columns}, 1fr)`};
  gap: ${({ gap }) => gap && gap};
`;

export default Grid;
