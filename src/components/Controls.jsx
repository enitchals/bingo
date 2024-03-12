function Controls({newCard}) {
  return(
    <>
      {/* <select>
        <option value="">What kind of bingo do you want to play?</option>
        <option value="zoom">Zoom Bingo</option>
      </select> */}
      <button onClick={newCard}>New Card</button>
    </>
  )
}

export default Controls