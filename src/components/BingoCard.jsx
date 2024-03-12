import { useEffect, useState } from 'react'
import './BingoCard.css'
import { useParams } from 'react-router-dom'
import { squaresData } from '../data'
import { checkForBingo, getRandomSquares } from '../helpers'
import Controls from './Controls'

function Square({text, checked, toggle}) {
  return (
    <div className={checked ? 'square checked' : 'square'} onClick={toggle}>{text}</div>
  )
}

// someday i'll add a backend
// when I do, the bingocard will access params like this:
// /card/:category          gets the set of possible squares for a category
// /card/:category/:id      gets a card by id

// thoughts about individual cards
// records properties: squares, checked
// additional properties: name
// make sure the id is a uuid so links aren't guessable

// thoughts about categories in db
// record properties: category name, array of squares

function BingoCard() {
  const [squares, setSquares] = useState(null)
  const [checked, setChecked] = useState(['free space'])
  const [error, setError] = useState(null)

  const {category, id} = useParams();

  useEffect(() => {
    const localCard = JSON.parse(localStorage.getItem('bingo-card'))
    if (localCard){
      setSquares(localCard.squares)
      setChecked(localCard.checked)
      return;
    }
    if (id){
      // when I add the backend, this is where I'll fetch cards by id and use setSquares and setChecked
    }
    if (!category){
      setSquares(getRandomSquares(squaresData['zoom']))
      return;
    }
    const categorySquares = squaresData[category];
    if (!categorySquares){
      setError('No such category!')
    } else {
      setError(null)
      // when there's a backend, this will be a query
      setSquares(getRandomSquares(squaresData[category]));
    }

  }, [category, id])

  useEffect(() => {
    if (squares && checkForBingo(squares, checked)) {
      setTimeout(() => window.alert('you win!'), 500);
    }
  }, [checked])

  const toggleSquare = (square) => {
    if (square === 'free space') return;
    const index = checked.indexOf(square)
    let newChecked;
    switch(index){
      case -1:
        newChecked = (checked.concat(square));
        break;
      case 0:
        newChecked = (checked.slice(1));
        break;
      default:
        newChecked = (checked.slice(0, index).concat(checked.slice(index+1)))
    }
    setChecked(newChecked)
    localStorage.setItem('bingo-card', JSON.stringify({squares, checked: newChecked}))
  }

  const newCard = () => {
    const newBoardSquares = getRandomSquares(squaresData['zoom'])
    setSquares(newBoardSquares)
    setChecked(['free space'])
    localStorage.setItem('bingo-card', null)
  }

  if (error) {
    return (
      <div>{error}</div>
    )
  }

  if (!squares){
    return (
      <div>Loading . . .</div>
    )
  }

  return (
    <>
      {/* move <Controls/> into <App/> when Redux enters the chat */}
      <Controls newCard={newCard}/>
      <div className='card'>
      {squares.map(square => <Square text={square} checked={checked.includes(square)} toggle={() => toggleSquare(square)} key={square}/>)}
      </div>
    </>
  )
}

export default BingoCard
