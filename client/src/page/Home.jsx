import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { PageHOC, CustomInput, CustomButton } from '../components'
import { id } from 'ethers/lib/utils'

const Home = () => {
  const { contract, walletAddress, setShowAlert } = useGlobalContext()
  const [playerName, setPlayerName] = useState('')
  const handleClick = async () => {
    try {
      const playerExists = await contract.isPlayer(walletAddress)
      if (!playerExists) {
        await contract.registerPlayer(playerName, playerName)

        setShowAlert({
          status: 'true',
          type: 'info',
          message: `${playerName} is being summoned!`,
        })
      }
    } catch (err) {
      setShowAlert({
        status: 'true',
        type: 'error',
        message: err.message,
      })
    }
  }

  return (
    walletAddress && (
      <div className="flex flex-col">
        <CustomInput
          label="Name"
          placeHolder="Enter your player name"
          value={playerName}
          handleValueChange={setPlayerName}
        />

        <CustomButton
          title="Register"
          handleClick={handleClick}
          restStyles="mt-6"
        />
      </div>
    )
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
