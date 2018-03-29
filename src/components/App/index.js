import React, { Component } from 'react';

import { ContentWrapper, Header } from '../../blocks';

import CogSpinner from '../CogSpinner';

function App() {
  return (
    <ContentWrapper>
      <Header>
        <Header.Title>Cog Spinner</Header.Title>
        <Header.Text>Click a button to animate the cog!</Header.Text>
      </Header>
      <CogSpinner />
    </ContentWrapper>
  );
}

export default App;
