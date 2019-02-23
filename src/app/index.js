import React, { Component } from 'react';
import CryptoTable from '../list';
import { Title } from './styles';

class App extends Component {
  render() {
    return (
      <>
        <Title>Top 100 Cryptocurrencies</Title>
        <CryptoTable />
      </>
    );
  }
}

export default App;
