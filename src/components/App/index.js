import React, { Component } from 'react';

import { ButtonGroup, ContentWrapper, Header, Row } from '../../blocks';
import { Icon } from '../../elements';

class App extends Component {
  state = {
    speed: 'off',
  }

  handleClick = (e) => {
    this.setState({ speed: e.target.name });
  }

  render() {
    return (
      <ContentWrapper>
        <Header>
          <Header.Title>Cog Spinner</Header.Title>
          <Header.Text>Click a button to animate the cog!</Header.Text>
        </Header>
        <Row>
          <Icon name="cog" speed={this.state.speed} />
        </Row>
        <ButtonGroup>
          <ButtonGroup.Button name="off" onClick={this.handleClick} bgColor="deepPurple">Off</ButtonGroup.Button>
          <ButtonGroup.Button name="slow" onClick={this.handleClick} bgColor="blue">Slow</ButtonGroup.Button>
          <ButtonGroup.Button name="med" onClick={this.handleClick} bgColor="orange">Med</ButtonGroup.Button>
          <ButtonGroup.Button name="fast" onClick={this.handleClick} bgColor="red">Fast!</ButtonGroup.Button>
        </ButtonGroup>
      </ContentWrapper>
    );
  }
};

export default App;
