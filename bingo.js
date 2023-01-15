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
    const columns = [
      squareElements.slice(0,5),
      squareElements.slice(5,10),
      squareElements.slice(10,15),
      squareElements.slice(15,20),
      squareElements.slice(20)
    ];
    const card = document.createElement('section');
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

class CardTemplate extends Card {
  constructor(defaultTitle = 'bingo card', freeSpaceText = '', promptSet = []){
    super();
    this.defaultTitle = defaultTitle;
    this.defaultFreeSpace = freeSpaceText;
    this.promptSet = promptSet;
  }
  generateNewCard(title, freeSpaceText){
    this.promptSet.sort(() => (Math.random() > .5) ? 1 : -1);
    return new Card(
      title || this.defaultTitle,
      freeSpaceText || this.defaultFreeSpace,
      this.promptSet.slice(0,24));
  }
}