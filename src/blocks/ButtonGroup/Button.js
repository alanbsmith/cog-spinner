import styled from 'styled-components';
import PropTypes from 'prop-types';
import { rem } from 'polished';

const Button = styled.button`
  background: ${props => (props.active ? props.theme.colors[props.bgColor] : 'transparent')};
  border: 1px solid ${props => props.theme.colors.text};
  color: ${props => (props.active ? props.theme.colors.chrome000 : props.theme.colors.text)};
  font-size: ${props => rem(props.theme.dimensions.baseFontSize)};
  line-height: ${props => rem(props.theme.dimensions.baseFontSize * 2)};
  outline: none;
  padding: 0 ${props => rem(props.theme.dimensions.baseGrid)};
  text-transform: uppercase;
  transition: all 200ms ease;

  &:hover {
    background: ${props => props.theme.colors[props.bgColor]};
    color: ${props => props.theme.colors.chrome000};
  }
`;

Button.propTypes = {
  active: PropTypes.bool,
  bgColor: PropTypes.string,
  name: PropTypes.oneOf(['off', 'slow', 'med', 'fast']).isRequired
};

Button.defaultProps = {
  active: false,
  bgColor: 'blue'
};

export default Button;
