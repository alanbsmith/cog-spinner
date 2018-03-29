import styled from 'styled-components';

import Row from '../Row';

import Text from './Text';
import Title from './Title';

const Header = Row.extend`
  text-align: center;
`;

Header.Text = Text;
Header.Title = Title;

export default Header;
