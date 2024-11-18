import './index.css'

function Nav(props) {
  const {formattedScore, formattedTopScore, gameStatus} = props
  return (
    <nav className="emoji-nav">
      <div>
        <img
          src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/tjotykd3iwmlero5dl66"
          alt="emoji logo"
        />
        <p>Emoji Game</p>
      </div>
      {gameStatus === 'progress' ? (
        <div>
          <p>Score: {formattedScore}</p>
          <p>Top Score : {formattedTopScore}</p>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default Nav
