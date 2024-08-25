// src/components/CoinFlip.js
import React, { useState, useCallback } from 'react';
import Coin from './Coin';
import InputSection from './InputSection';
import Result from './Result';
import TransactionHistory from './TransactionHistory';

const CoinFlip = () => {
  const [side, setSide] = useState('');
  const [betAmount, setBetAmount] = useState('');
  const [tokenType, setTokenType] = useState('ETH');
  const [flipping, setFlipping] = useState(false);
  const [result, setResult] = useState(null);
  const [balance, setBalance] = useState(100);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [warning, setWarning] = useState('');

  const flipCoin = useCallback(() => {
    // Prevent flipping if already flipping or invalid input
    if (flipping || !side || betAmount <= 0) return;

    // Check if the bet amount exceeds the balance
    if (betAmount > balance) {
      setWarning('Bet amount exceeds balance. Please enter a valid amount.');
      return;
    }

    setWarning(''); // Clear warning if bet amount is valid
    setFlipping(true);

    setTimeout(() => {
      const randomSide = Math.random() < 0.5 ? 'Heads' : 'Tails';
      const win = randomSide === side;
      const newBalance = win ? balance + betAmount : balance - betAmount;

      setResult(randomSide);
      setBalance(newBalance);
      setFlipping(false);

      setTransactionHistory(prevHistory => [
        ...prevHistory,
        {
          side: randomSide,
          betAmount,
          tokenType,
          win,
          balance: newBalance,
          date: new Date().toLocaleString()
        }
      ]);

      // Reset input values
      setSide('');
      setBetAmount('');
    }, 2000);
  }, [flipping, side, betAmount, balance, tokenType, transactionHistory]);

  return (
    <div className="coin-flip-container">
      <h1>Coin Flip Game</h1>

      <div className="balance">
        <p>Balance: {balance.toFixed(2)} {tokenType}</p>
      </div>

      {warning && <div className="warning">{warning}</div>}

      <InputSection
        tokenType={tokenType}
        setTokenType={setTokenType}
        betAmount={betAmount}
        setBetAmount={setBetAmount}
        side={side}
        setSide={setSide}
        flipping={flipping}
        flipCoin={flipCoin}
      />

      <Coin flipping={flipping} />

      <Result result={result} side={side} betAmount={betAmount} tokenType={tokenType} />

      <TransactionHistory transactionHistory={transactionHistory} />
    </div>
  );
};

export default CoinFlip;
