class BingoGame {
  constructor(title = 'Bingo', freeSpaceText = 'FREE SPACE', spaces = nums || []){
    this.title = title;
    this.freeSpaceText = freeSpaceText;
    this.spaces = spaces;
    this.initialSpaces = spaces.slice();
    this.generateNewCard = this.generateNewCard.bind(this);
    this.resetList = this.resetList.bind(this);
    this.addSpace = this.addSpace.bind(this);
  }
  bindButtons = () => {
    makeCardButton.addEventListener('click', this.generateNewCard);
    resetButton.addEventListener('click', this.resetList);
    addButton.addEventListener('click', this.addSpace);
  }
  renderSpace = (space) => {
    const spaceEl = document.createElement('section');
    spaceEl.className = 'option';
    const spaceText = document.createElement('div');
    spaceText.innerText = space;
    const deleteButton = makeButton('X', () => this.removeItemFromSpaces(space), 'deleteButton')
    spaceEl.append(deleteButton, spaceText);
    return spaceEl;
  }
  renderList = () => {
    this.spaces.sort();
    const list = document.createElement('section');
    list.className = 'options-list'
    list.append(...this.spaces.map(this.renderSpace));
    const count = document.createElement('span');
    count.append('You have ' + this.spaces.length + ' possible squares:')
    listContainer.replaceChildren(count, list);
  }
  resetList = () => {
    this.spaces = this.initialSpaces.slice();
    this.renderList();
  }
  addSpace(){
    if (spaceInput.value === ''){
      return;
    }
    this.spaces.push(spaceInput.value);
    spaceInput.value = '';
    this.renderList();
  }
  removeItemFromSpaces = (item) => {
    this.spaces = this.spaces.filter(p => p !== item);
    this.renderList();
  }
  generateNewCard(){
    if (this.spaces.length < 24){
      window.alert("You need at least 24 squares on a bingo card! Add more possibilities or reset the list.");
      return;
    }
    this.spaces.sort(() => (Math.random() > .5) ? 1 : -1);
    const card = new Card(
      this.title,
      this.freeSpaceText,
      this.spaces.slice(0,24));
    cardPreviewElement.replaceChildren(card.render());
  }
}