class BingoGame {
  constructor(title = 'Bingo', freeSpaceText = 'FREE SPACE', prompts = nums || []){
    this.title = title;
    this.freeSpaceText = freeSpaceText;
    this.prompts = prompts;
    this.initialPrompts = prompts;
    this.generateNewCard = this.generateNewCard.bind(this);
    this.resetList = this.resetList.bind(this);
    this.addPrompt = this.addPrompt.bind(this);
  }
  bindButtons = () => {
    makeCardButton.addEventListener('click', this.generateNewCard);
    resetButton.addEventListener('click', this.resetList);
    addButton.addEventListener('click', this.addPrompt);
  }
  renderPrompt = (prompt) => {
    const promptEl = document.createElement('section');
    promptEl.className = 'option';
    const promptText = document.createElement('div');
    promptText.innerText = prompt;
    const deleteButton = makeButton('X', () => this.removeItemFromPrompts(prompt), 'deleteButton')
    promptEl.append(deleteButton, promptText);
    return promptEl;
  }
  renderList = () => {
    this.prompts.sort();
    const list = document.createElement('section');
    list.className = 'options-list'
    list.append(...this.prompts.map(this.renderPrompt));
    const count = document.createElement('span');
    count.append('You have ' + this.prompts.length + ' prompts:')
    listContainer.replaceChildren(count, list);
  }
  resetList = () => {
    this.prompts = this.initialPrompts;
    this.renderList();
  }
  addPrompt(){
    if (promptInput.value === ''){
      return;
    }
    this.prompts.push(promptInput.value);
    promptInput.value = '';
    this.renderList();
  }
  removeItemFromPrompts = (item) => {
    this.prompts = this.prompts.filter(p => p !== item);
    this.renderList();
  }
  generateNewCard(){
    if (this.prompts.length < 24){
      window.alert("You need at least 24 squares on a bingo card! Add more or reset the list.");
      return;
    }
    this.prompts.sort(() => (Math.random() > .5) ? 1 : -1);
    const card = new Card(
      this.title,
      this.freeSpaceText,
      this.prompts.slice(0,24));
    cardPreviewElement.replaceChildren(card.render());
  }
}