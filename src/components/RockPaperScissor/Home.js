import {useState} from 'react'
import GameRules from './GameRules'
import Game from './Game'
import './Home.css'

function RockPaperScissor() {
  const [isPlaying, setIsPlaying] = useState(false)
  const handleShowRules = () => {
    setIsPlaying(true)
  }
  return isPlaying ? <Game /> : <GameRules handleShowRules={handleShowRules} />
}

export default RockPaperScissor
