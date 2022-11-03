import React from 'react';
import {PageHOC} from '../components'

const Home = () => {
  return (
    <div>
          <h1 className="text-white text-xl"> Hello from Home</h1>

    </div>
  )
};

export default PageHOC(
  Home, 
  <> Welcome to Card Wars <br/> A web3 NFT card game</>,
  <>Connect your wallter to start playing <br/> the Ultimate Web3 card game</>
);