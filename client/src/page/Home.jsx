import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { PageHOC, CustomInput, CustomButton } from '../components'

const Home = () => {
  const { contract, walletAddress } = useGlobalContext()
  const { playerName, setPlayerName } = useState('')

  return (
    <div className="flex flex-col">
      <CustomInput
        label="Name"
        placeholder="Enter you player name"
        value={playerName}
        handleValueChange={setPlayerName}
      />

      <CustomButton title="Register" handleClick={() => {}} restStyles="mt-6" />
    </div>
  )
}

export default PageHOC(
  Home,
  <>
    {' '}
    Welcome to Card Wars <br /> A web3 NFT card game
  </>,
  <>
    Connect your wallter to start playing <br /> the Ultimate Web3 card game
  </>,
)
