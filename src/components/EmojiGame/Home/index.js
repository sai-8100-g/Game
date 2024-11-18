import {useState} from 'react'
import GameRules from '../GameRules'
import Game from '../Game'
import './index.css'

function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const handlePlayingState = () => {
    setIsPlaying(true)
  }
  return isPlaying ? (
    <Game />
  ) : (
    <GameRules handlePlayingState={handlePlayingState} />
  )
}

export default Home
