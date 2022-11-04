import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CustomButton, CustomInput, PageHOC, GameLoad } from '../components'
import styles from '../styles'
import { useGlobalContext } from '../context'

const CreateBattle = () => {
  const { contract, battleName, setBattleName, gameData } = useGlobalContext()
  const [waitBattle, setWaitBattle] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (gameData?.activeBattle?.battleStatus === 0) {
      setWaitBattle(true)
    }
  }, [gameData])
  const handleClick = async () => {
    if (!battleName || !battleName.trim()) return null

    try {
      await contract.createBattle(battleName)
      setWaitBattle(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {waitBattle && <GameLoad />}
      <div className="flex flex-col mb-5">
        <CustomInput
          label="Battle"
          placeholder="Enter battle name"
          vaue={battleName}
          handleValueChange={setBattleName}
        />
        <CustomButton
          title="Create Battle"
          handleClick={handleClick}
          restStyles="mt-6"
        />
      </div>
      <p className={styles.infoText} onClick={() => navigate('/join-battle')}>
        Or join already existing battles
      </p>
    </>
  )
}

export default PageHOC(
  CreateBattle,
  <>
    {' '}
    Create <br /> a new Battle
  </>,
  <>
    Create your own battle <br /> and wait for other player to join you
  </>,
)
