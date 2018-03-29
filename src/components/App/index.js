import React, { Component } from 'react';

import { ContentWrapper, Header, Row } from '../../blocks';

import CogSpinner from '../CogSpinner';

function App() {
  return (
    <ContentWrapper>
      <Header>
        <Header.Title>Cog Spinners</Header.Title>
        <Header.Text>Click a button to animate the cog!</Header.Text>
      </Header>
      <CogSpinner>
        <CogSpinner.Icon />
        <CogSpinner.ButtonGroup>
          <CogSpinner.Button name="off">Off</CogSpinner.Button>
          <CogSpinner.Button name="slow">slow</CogSpinner.Button>
        </CogSpinner.ButtonGroup>
      </CogSpinner>
      <CogSpinner>
        <Row>
          <CogSpinner.Icon />
          <CogSpinner.Icon />
        </Row>
        <CogSpinner.ButtonGroup>
          <CogSpinner.Button name="off" bgColor="red">
            Off
          </CogSpinner.Button>
          <CogSpinner.Button name="med" bgColor="orange">
            med
          </CogSpinner.Button>
          <CogSpinner.Button name="fast" bgColor="green">
            fast
          </CogSpinner.Button>
        </CogSpinner.ButtonGroup>
      </CogSpinner>
      <CogSpinner>
        <Row>
          <CogSpinner.Icon />
          <CogSpinner.Icon />
          <CogSpinner.Icon />
        </Row>
        <CogSpinner.ButtonGroup>
          <CogSpinner.Button name="off" bgColor="deepPurple">
            Off
          </CogSpinner.Button>
          <CogSpinner.Button name="slow" bgColor="blue">
            slow
          </CogSpinner.Button>
          <CogSpinner.Button name="med" bgColor="orange">
            med
          </CogSpinner.Button>
          <CogSpinner.Button name="fast" bgColor="red">
            fast
          </CogSpinner.Button>
        </CogSpinner.ButtonGroup>
      </CogSpinner>
    </ContentWrapper>
  );
}

export default App;
