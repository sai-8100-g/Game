import {useState} from 'react'
import GameRules from './GameRules'
import Game from './Game'

import './Home.css'

function CardFlipGame() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayState = () => {
    setIsPlaying(true)
  }

  return isPlaying ? <Game /> : <GameRules handlePlayState={handlePlayState} />
}

export default CardFlipGame
