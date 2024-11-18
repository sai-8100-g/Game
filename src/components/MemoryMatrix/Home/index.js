import {useState} from 'react'
import GameRules from '../GameRules'
import Game from '../Game'
import './index.css'

function MemoryMatrix() {
  const [isPlaying, setIsPlaying] = useState(false)
  const handleIsPlaying = () => {
    setIsPlaying(true)
  }
  return isPlaying ? <Game /> : <GameRules handleIsPlaying={handleIsPlaying} />
}

export default MemoryMatrix
