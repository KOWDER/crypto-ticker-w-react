import React, { Component } from 'react';
import Ticker from "./Ticker"

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-title">Crypto Ticker of Top Currencies - Updates every 10 seconds from <a href="https://www.coinmarketcap.com">CoinMarketCap</a></div>
        </div>
        <Ticker/>
      </div>
    );
  }
}

export default App;
