import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const SPEED_MAP = {
  off: 0,
  slow: 10000,
  med: 1000,
  fast: 100,
};

const Icon = styled.span.attrs({
  className: props => `ix ix-${props.name}`,
})`
  animation: ${props => SPEED_MAP[props.speed]}ms ${spin} linear infinite;
  display: inline-block;
  font-size: 144px;
  &:before {
    color: ${props => props.theme.colors.chrome600};
  }
`;

Icon.defaultProps = {
  speed: 'off',
}

export default Icon;
