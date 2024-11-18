import {Link} from 'react-router-dom'
import './index.css'

const imgArr = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/druzptbxubid4rord04l',
    name: 'emoji game',
    path: 'emoji-game',
    className: 'home-emoji-game',
    para: '',
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/j9w39jqe0cbixjdofxir',
    name: 'memory matrix game',
    path: 'memory-matrix',
    className: 'home-memory-game',
    para: 'Memory Matrix',
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/txnnj7evekc6cm2a8opx',
    name: 'rock paper scissor',
    path: 'rock-paper-scissor',
    className: 'home-rock-game',
    para: 'ROCK  PAPER  SCISSOR',
  },
  {
    id: 4,
    imageUrl:
      'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/cgthz0gadcf5gbz0fnwc',
    name: 'card flip memory game',
    path: 'card-flip-memory-game',
    className: 'home-flip-game',
    para: '',
  },
]

function Home() {
  return (
    <div className="game-container">
      <h1 className="heading">Games</h1>
      <ul className="list">
        {imgArr.map(item => (
          <Link to={`/${item.path}`} className="item" key={item.id}>
            <li key={item.id} id={item.id}>
              {item.para !== '' && <p>{item.para}</p>}
              <img
                src={item.imageUrl}
                alt={item.name}
                className={item.className}
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Home
