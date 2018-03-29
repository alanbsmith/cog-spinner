import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CogIcon } from '../../elements';

import { COG_SPINNER_CONTEXT } from './constants';

function Icon(props, context) {
  const { speed } = context[COG_SPINNER_CONTEXT];

  return <CogIcon {...props} speed={speed} />;
}

Icon.contextTypes = {
  [COG_SPINNER_CONTEXT]: PropTypes.object.isRequired
};

export default Icon;
