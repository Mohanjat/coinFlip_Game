import React from 'react';
import WalletConnect from './components/WalletConnect';
import CoinFlip from './components/CoinFlip';

const App = () => {
  return (
    <div>
      <h1>Welcome to the Crypto Coinflip Game</h1>
      <WalletConnect />
      
      <div className="app">
      <CoinFlip />
      </div>
      {/* Add other components like CoinFlipGame here */}
    </div>
  );
};

export default App;
