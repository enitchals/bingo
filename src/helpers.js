export const getRandomSquares = (squareList) => {
  const indexes = [];
  while (indexes.length < 24){
    const randomIndex = Math.floor(Math.random() * squareList.length)
    if (!indexes.includes(randomIndex)) indexes.push(randomIndex);
  }
  const squares = indexes.map(i => squareList[i])
  return squares.slice(0,12).concat('free space').concat(squares.slice(12,24))
}

export const checkForBingo = (squareList, checkedList) => {
  const markedSquares = squareList.reduce((acc, curr, i) => {return checkedList.includes(curr) ? acc.concat([i]) : acc},[]);

  console.log(markedSquares)
  // check for a row
  const rowCheck = markedSquares.map(sq => sq % 5);
  const rowEval = rowCheck.reduce((acc, cur) => {
    if (acc[cur]){
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {})
  if (Object.values(rowEval).includes(5)){
    return true;
  };

  // check for a column bingo
  const columnEval = markedSquares.reduce((acc, cur)=> {
      if (cur < 5) {
        acc.b += 1
      } else if (cur < 10) {
        acc.i += 1;
      } else if (cur < 15) {
        acc.n += 1;
      } else if (cur < 20) {
        acc.g += 1;
      } else if (cur < 25) {
        acc.o += 1;
      }
    return acc;
  }, {b:0,i:0,n:0,g:0,o:0})
  console.log(columnEval);
  if (Object.values(columnEval).includes(5)){
    return true;
  }

  // check for diagonals
  console.log(markedSquares)
  if (
    markedSquares.includes(0) &&
    markedSquares.includes(6) &&
    markedSquares.includes(12) &&
    markedSquares.includes(18) &&
    markedSquares.includes(24)
    ) {
      return true;
    }
    if (
      markedSquares.includes(4) &&
      markedSquares.includes(8) &&
      markedSquares.includes(12) &&
      markedSquares.includes(16) &&
      markedSquares.includes(20)
    ) {
      return true;
    }
  return false;
}