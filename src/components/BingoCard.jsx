import { useState } from 'react'
import './BingoCard.css'

const zoomSquares = [
  "a/v trouble",
  "action item",
  "bandwidth",
  "bottom line",
  "breakout rooms",
  "can you see my screen?",
  "cat on camera",
  "circle back",
  "coffee shop noises",
  "deep dive",
  "dog on camera",
  "drill down",
  "ducks in a row",
  "follow up",
  "for the record",
  "game plan",
  "give it another minute",
  "happy ____day",
  "hard stop",
  "hit the ground running",
  "it is what it is",
  "kids on camera",
  "let me share my screen",
  "leverage",
  "low-hanging fruit",
  "mission critical",
  "moving parts",
  "next quarter",
  "next year",
  "no-brainer",
  "on my radar",
  "out-of-the-box",
  "pain points",
  "pivot",
  "put a pin in that",
  "reinvent the wheel",
  "scalable",
  "slide deck",
  "someone drinks coffee",
  "synergy",
  "take this offline",
  "tech debt",
  "this quarter",
  "unpack that",
  "value add",
  "win-win",
  "wrong window shared",
  "you're muted",
  "you're not muted"
]

const dummyData = zoomSquares.slice(0,12).concat('free space').concat(zoomSquares.slice(12,24))

function Square({text, checked, toggle}) {
  return (
    <div className={checked ? 'square checked' : 'square'} onClick={toggle}>{text}</div>
  )
}

// someday i'll add a backend
// when I do, the bingocard will access params like this:
// /card/category          gets the set of possible squares for a category
// /card/category/:id      gets a card by id

function BingoCard() {
  const [squares, setSquares] = useState(dummyData)
  const [checked, setChecked] = useState(['free space'])

  const toggleSquare = (square) => {
    if (square === 'free space') return;
    const index = checked.indexOf(square)
    switch(index){
      case -1:
        setChecked(checked.concat(square));
        return;
      case 0:
        setChecked(checked.slice(1));
        return;
      default:
        setChecked(checked.slice(0, index).concat(checked.slice(index+1)))
    }
  }

  return (
    <div className='card'>
    {squares.map(square => <Square text={square} checked={checked.includes(square)} toggle={() => toggleSquare(square)} key={square}/>)}
    </div>
  )
}

export default BingoCard
