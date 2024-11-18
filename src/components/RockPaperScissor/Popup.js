import {CgClose} from 'react-icons/cg'
import './Popup.css'

function Popup(props) {
  const {handlePopup} = props
  return (
    <div className="rock-popup">
      <button
        type="button"
        aria-label="close button"
        onClick={() => handlePopup()}
      >
        <CgClose />
      </button>
      <h2>Rules</h2>
      <div className="ul-container">
        <ul className="list">
          <li className="item">
            The game result should be based on user and user opponent choices
          </li>
          <li className="item">
            When the user choice is rock and his opponent choice is rock then
            the result will be <span>IT IS DRAW</span>
          </li>
          <li className="item">
            When the user choice is paper and his opponent choice is rock then
            the result will be <span>YOU WON</span>
          </li>
          <li className="item">
            When the user choice is a scissor and his opponent choice is rock
            then the result will be <span>YOU LOSE</span>
          </li>{' '}
          <li className="item">
            When the user choice is paper and his opponent choice is paper then
            the result will be <span>IT IS DRAW</span>
          </li>
          <li className="item">
            When the user choice is scissors and his opponent choice is paper
            then the result will be <span>YOU WON</span>
          </li>
        </ul>
        <ul className="list">
          <li className="item">
            When the user choice is rock and his opponent choice is scissors
            then the result will be <span>YOU WON</span>
          </li>
          <li className="item">
            When the user choice is paper and his opponent choice is scissors
            then the result will be <span>YOU LOSE</span>
          </li>
          <li className="item">
            When the user choice is scissors and his opponent choice is scissors
            then the result will be <span>IT IS DRAW</span>
          </li>
          <li className="item">
            When the result is <span>YOU WON</span>, then the count of the score
            should be incremented by 1
          </li>
          <li className="item">
            When the result is <span>IT IS DRAW</span>, then the count of the
            score should be the same
          </li>
          <li className="item">
            When the result is <span>YOU LOSE</span>, then the count of the
            score should be decremented by 1.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Popup
