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