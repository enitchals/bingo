export const getRandomSquares = (squareList) => {
  const indexes = [];
  while (indexes.length < 24){
    const randomIndex = Math.floor(Math.random() * squareList.length)
    if (!indexes.includes(randomIndex)) indexes.push(randomIndex);
  }
  const squares = indexes.map(i => squareList[i])
  return squares.slice(0,12).concat('free space').concat(squares.slice(12,24))
}
