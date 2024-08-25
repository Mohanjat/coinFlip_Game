import React, { useState } from 'react';
import { ethers } from 'ethers';

const WalletConnect = () => {
  const [account, setAccount] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const account = await signer.getAddress();

        setAccount(account);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      console.error('No Ethereum provider detected.');
    }
  };

  return (
    <div className='wallet'>
      <button className='walletConnect' onClick={connectWallet}>Connect Wallet</button>
      {account && <p>Connected Account: {account}</p>}
    </div>
  );
};

export default WalletConnect;
