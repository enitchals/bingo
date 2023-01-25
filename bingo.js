class Card {
  constructor(title = 'bingo card', freeSpaceText = '', spaces = []){
    const squares = spaces.map(p => new Square(p));
    this.title = title;
    this.squares = squares
      .slice(0,12)
      .concat([new FreeSpace(freeSpaceText)])
      .concat(squares.slice(12,24));
    this.checkForBingo = this.checkForBingo.bind(this);
  }

  bingo(){
    window.alert('bingo!')
  }

  checkForBingo(){
    const markedSquares = this.squares.reduce((acc, curr, i) => {return curr.marked ? acc.concat([i]) : acc},[]);

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
      this.bingo();
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
      this.bingo();
    }
  }

  render(){
    const squareElements = this.squares.map(s => s.render());
    const columns = [
      squareElements.slice(0,5),
      squareElements.slice(5,10),
      squareElements.slice(10,15),
      squareElements.slice(15,20),
      squareElements.slice(20)
    ];
    const card = document.createElement('section');
    card.addEventListener('click', this.checkForBingo)
    card.className = 'bingoCard';
    columns.forEach(col => {
      const colElement = document.createElement('section');
      colElement.className = 'bingoColumn';
      colElement.append(...col)
      card.append(colElement);
    })
    return card;
  }
}

class Square {
  constructor(text=''){
    this.text = text;
    this.marked = false;
  }
  mark(){
    const status = this.marked;
    this.marked = !status;
    console.log()
    return status;
  }
  render(){
    const mark = this.mark.bind(this);
    const square = document.createElement('div');
    square.className = !this.marked ? 'bingoSquare' : "bingoSquare--marked";
    square.innerText = this.text;
    square.addEventListener('click', function(){
      const status = mark();
      this.className = status ? "bingoSquare" : "bingoSquare--marked";
    })
    return square;
  }
}

class FreeSpace extends Square {
  constructor(text = ''){
    super(text);
    this.marked = true;
  }
}