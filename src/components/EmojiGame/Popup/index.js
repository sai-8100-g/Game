import {CgClose} from 'react-icons/cg'
import './index.css'

function Popup(props) {
  const {handleShowRules} = props
  return (
    <div className="emoji-popup">
      <button
        type="button"
        aria-label="close button"
        onClick={() => handleShowRules()}
      >
        <CgClose />
      </button>
      <h2>Rules</h2>
      <ul>
        <li>User should be able to see the list of Emojis</li>
        <li>
          When the user clicks any one of the Emoji for the first time, then the
          count of the score should be incremented by 1 and the List of emoji
          cards should be shuffled.
        </li>
        <li>
          This process should be repeated every time the user clicks on an emoji
          card
        </li>
        <li>
          When the user clicks on all Emoji cards without clicking any of it
          twice, then the user will win the game
        </li>
        <li>
          When the user clicks on all Emoji cards without clicking any of it
          twice, then the user will win the game
        </li>
        <li>
          Once the game is over, the user will be redirected to the results
          page.
        </li>
      </ul>
    </div>
  )
}

export default Popup
