class Card {
  constructor(title = 'bingo card', freeSpaceText = '', prompts = []){
    const squares = prompts.map(p => new Square(p));
    this.title = title;
    this.squares = squares
      .slice(0,12)
      .concat([new FreeSpace(freeSpaceText)])
      .concat(squares.slice(12,24));
  }
  render(){
    const squareElements = this.squares.map(s => s.render());
    const B = document.querySelector('#B');
    B.replaceChildren(...squareElements.slice(0,5));
    const I = document.querySelector('#I');
    I.replaceChildren(...squareElements.slice(5,10));
    const N = document.querySelector('#N');
    N.replaceChildren(...squareElements.slice(10,15));
    const G = document.querySelector('#G');
    G.replaceChildren(...squareElements.slice(15,20));
    const O = document.querySelector('#O');
    O.replaceChildren(...squareElements.slice(20));
  }
}

class Square {
  constructor(text=''){
    this.text = text;
    this.marked = false;
  }
  mark(){
    this.marked = true;
    console.log(this.marked)
  }
  render(){
    const mark = this.mark.bind(this);
    const square = document.createElement('div');
    square.className = !this.marked ? 'bingoSquare' : "bingoSquare--marked";
    square.innerText = this.text;
    square.addEventListener('click', function(){
      this.className = "bingoSquare--marked";
      mark();
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