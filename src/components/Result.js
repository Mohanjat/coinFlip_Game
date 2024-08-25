// src/components/Result.js
import React from 'react';

const Result = ({ result, side, betAmount, tokenType }) => {
  if (!result) return null;

  return (
    <div className="result">
      <p>The coin landed on <strong>{result}</strong>.</p>
      {result === side ? (
        <p>You won {betAmount} {tokenType}!</p>
      ) : (
        <p>You lost {betAmount} {tokenType}.</p>
      )}
    </div>
  );
};

export default Result;
