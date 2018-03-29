import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup as ButtonGroupBlock } from '../../blocks';

import { COG_SPINNER_CONTEXT } from './constants';

function ButtonGroup({ children, ...props }, context) {
  // We can pull in `handleClick` and `speed` from context like this.
  const { handleClick, speed } = context[COG_SPINNER_CONTEXT];

  // Mapping over children to add an active prop and add our handleClick function.
  // Because we're handling all the wiring here, it makes our API really simple to use.
  const mappedChildren = Children.map(children, child => {
    const active = speed === child.props.name;
    return cloneElement(child, {
      active,
      onClick: handleClick
    });
  });

  return <ButtonGroupBlock {...props}>{mappedChildren}</ButtonGroupBlock>;
}

ButtonGroup.contextTypes = {
  [COG_SPINNER_CONTEXT]: PropTypes.object.isRequired
};

export default ButtonGroup;
