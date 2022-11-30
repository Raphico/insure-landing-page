import styled from 'styled-components';

type Props = {
  direction?: string,
  justify?: string,
  align?: string,
  gap?: string
}

const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction && direction};
  align-items: ${({ align }) => align ? align : 'center'};
  justify-content: ${({ justify }) => justify ? justify : 'space-between'};
  gap: ${({ gap }) => gap && gap};
`;

export default Flex;
