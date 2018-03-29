import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup as ButtonGroupBlock, ContentWrapper } from '../../blocks';

// This context key is needed in each of our components, so I extracted it.
import { COG_SPINNER_CONTEXT } from './constants';

import ButtonGroup from './ButtonGroup';
import Icon from './Icon';

class CogSpinner extends Component {
  // ButtonGroup and Icon are our 'functional children.'
  // They're effectively wrapper components to handle additional business logic.
  static Icon = Icon;
  static ButtonGroup = ButtonGroup;
  // We don't need a functional child for this component,
  // so we can use the styled-component directly
  static Button = ButtonGroupBlock.Button;

  static childContextTypes = {
    [COG_SPINNER_CONTEXT]: PropTypes.object.isRequired
  };

  static defaultProps = {
    onChange: () => {},
    speed: 'off'
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func,
    speed: PropTypes.string
  };

  state = {
    speed: this.props.speed
  };

  getChildContext() {
    return {
      [COG_SPINNER_CONTEXT]: {
        handleClick: this.handleClick,
        speed: this.state.speed
      }
    };
  }

  handleClick = e => {
    // This `onChange` handler allows our users to get some data
    // about what's happening inside the component if they want.
    this.props.onChange(e.target.name);
    this.setState({ speed: e.target.name });
  };

  render() {
    const { children, ...rest } = this.props;
    return <ContentWrapper {...rest}>{children}</ContentWrapper>;
  }
}

export default CogSpinner;
