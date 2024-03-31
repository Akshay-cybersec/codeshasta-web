import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import "./wallet.css";
import mobileimg from '../resources/mobile-2.png'
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId
const projectId = 'ac36f33f346c945d6d894c66c106faf5'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const sepolia = {
  chainId: 11155111,
  namespace: 'eip155:11155111',
  name: 'Sepolia',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.etherscan.io/',
  rpcUrl: 'https://rpc.sepolia.org/'
}

// 3. Create a metadata object
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 11155111, // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [sepolia, mainnet],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})


export default function Wallet() {
  return (
    <div className="main">
      <div className="inner">
        <img src={mobileimg}/>
        <w3m-button className="buttonme"/>
      </div>
    </div>
  );
}

