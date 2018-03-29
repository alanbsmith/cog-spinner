import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup as ButtonGroupBlock, ContentWrapper } from '../../blocks';
import { CogIcon } from '../../elements';

const COG_SPINNER_CONTEXT = '__COG_SPINNER_CONTEXT__';

// ============================================================================= //

function Icon(props, context) {
  const { speed } = context[COG_SPINNER_CONTEXT];

  return <CogIcon {...props} speed={speed} />;
}

Icon.contextTypes = {
  [COG_SPINNER_CONTEXT]: PropTypes.object.isRequired
};

// ============================================================================= //

function ButtonGroup({ children, ...props }, context) {
  const { handleClick, speed } = context[COG_SPINNER_CONTEXT];

  const mappedChildren = React.Children.map(children, (child, i) => {
    const active = speed === child.props.name;
    return React.cloneElement(child, {
      active,
      onClick: handleClick
    });
  });

  return <ButtonGroupBlock {...props}>{mappedChildren}</ButtonGroupBlock>;
}

ButtonGroup.contextTypes = {
  [COG_SPINNER_CONTEXT]: PropTypes.object.isRequired
};

// ============================================================================= //

class CogSpinner extends Component {
  static Icon = Icon;
  static ButtonGroup = ButtonGroup;
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
    this.props.onChange(e.target.name);
    this.setState({ speed: e.target.name });
  };

  render() {
    const { children, ...rest } = this.props;
    return <ContentWrapper {...rest}>{children}</ContentWrapper>;
  }
}

export default CogSpinner;
