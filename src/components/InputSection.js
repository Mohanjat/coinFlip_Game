// src/components/InputSection.js
import React from 'react';

const InputSection = ({ tokenType, setTokenType, betAmount, setBetAmount, side, setSide, flipping, flipCoin }) => {
  return (
    <div className="input-section">
      <select onChange={(e) => setTokenType(e.target.value)} value={tokenType}>
        <option value="SOL">SOL</option>
        <option value="ETH">ETH</option>
        <option value="BTC">BTC</option>
      </select>

      <input
        type="number"
        placeholder="Bet Amount"
        value={betAmount || ''}
        onChange={(e) => setBetAmount(parseFloat(e.target.value) || 0)}
      />

      <select onChange={(e) => setSide(e.target.value)} value={side || ''}>
        <option value="" disabled>Choose Your Side</option>
        <option value="Heads">Heads</option>
        <option value="Tails">Tails</option>
      </select>

      <button disabled={flipping || !side || betAmount <= 0} onClick={flipCoin}>
        {flipping ? 'Flipping...' : 'Flip Coin'}
      </button>
    </div>
  );
};

export default InputSection;
