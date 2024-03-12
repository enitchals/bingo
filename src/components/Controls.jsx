import { Link } from "react-router-dom"

function Controls({newCard}) {
  return(
    <>
      <Link to="/zoom">Zoom Bingo</Link>
      {/* <select>
        <option value="classic">Classic</option>
        <option value="pastel">Pastel</option>
        <option value="neon">Neon</option>
      </select> */}
      <button onClick={newCard}>New Card</button>
    </>
  )
}

export default Controls