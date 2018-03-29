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
  fast: 100
};

const CogIcon = styled.span.attrs({
  className: 'ix-cog',
  'aria-label': 'spinning cog icon'
})`
  animation: ${props => SPEED_MAP[props.speed]}ms ${spin} linear infinite;
  display: inline-block;
  font-size: 144px;
  margin: 8px;
  transition: font-size 200ms ease;

  &:before {
    color: ${props => props.theme.colors.chrome600};
  }

  @media (max-width: 700px) {
    font-size: 64px;
  }
`;

CogIcon.defaultProps = {
  speed: 'off'
};

export default CogIcon;
