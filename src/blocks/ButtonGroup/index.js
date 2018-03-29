import styled from 'styled-components';

import Row from '../Row';

import Button from './Button';

const ButtonGroup = Row.extend`
  button:first-child {
    border-radius: 4px 0 0 4px;
  }

  button:last-child {
    border-radius: 0 4px 4px 0;
  }

  button:not(:last-child) {
    border-right: none;
  }
`;

ButtonGroup.Button = Button;

export default ButtonGroup;
