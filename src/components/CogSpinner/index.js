import React, { Component } from 'react';

import { ButtonGroup, ContentWrapper } from '../../blocks';
import { CogIcon } from '../../elements';

class CogSpinner extends Component {
  state = {
    speed: this.props.speed
  };

  handleClick = e => {
    this.setState({ speed: e.target.name });
  };

  render() {
    return (
      <ContentWrapper>
        <CogIcon speed={this.state.speed} />
        <ButtonGroup>
          <ButtonGroup.Button name="off" onClick={this.handleClick} bgColor="deepPurple">
            Off
          </ButtonGroup.Button>
          <ButtonGroup.Button name="slow" onClick={this.handleClick} bgColor="blue">
            Slow
          </ButtonGroup.Button>
          <ButtonGroup.Button name="med" onClick={this.handleClick} bgColor="orange">
            Med
          </ButtonGroup.Button>
          <ButtonGroup.Button name="fast" onClick={this.handleClick} bgColor="red">
            Fast!
          </ButtonGroup.Button>
        </ButtonGroup>
      </ContentWrapper>
    );
  }
}

export default CogSpinner;
