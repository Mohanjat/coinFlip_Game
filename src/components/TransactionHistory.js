// src/components/TransactionHistory.js
import React from 'react';

const TransactionHistory = ({ transactionHistory }) => {
  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <ul>
        {transactionHistory.map((tx, index) => (
          <li key={index}>
            <p>{tx.date}: {tx.side} - {tx.win ? 'Win' : 'Lose'} - {tx.betAmount} {tx.tokenType} - Balance: {tx.balance.toFixed(2)} {tx.tokenType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
