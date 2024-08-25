// src/components/Coin.js
import React from 'react';

const Coin = ({ flipping }) => {
  return (
    <div className={`coin ${flipping ? 'flipping' : ''}`}>
      <div className="side heads">Heads</div>
      <div className="side tails">Tails</div>
    </div>
  );
};

export default Coin;
