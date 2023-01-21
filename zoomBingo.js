const titleInput = document.querySelector('#prompt-input');
const promptInput = document.querySelector('#prompt-input');
const templateList = document.querySelector('#existingTemplates');
const cardPreviewElement = document.querySelector('#preview');
const listContainer = document.querySelector('#options-list');
const makeTemplateButton = document.querySelector('#makeTemplate');

const makeButton = (text, callback, buttonClass) => {
  const button = document.createElement('button');
  button.innerText = text;
  button.addEventListener('click', callback);
  button.className = buttonClass;
  return button;
}

let prompts = zoomMeeting;

const renderList = () => {
  const list = document.createElement('section');
  list.className = 'options-list'
  list.append(...prompts.map(renderPrompt));
  listContainer.replaceChildren(list);
}

const resetList = () => {
  prompts = zoomMeeting;
  renderList();
}

const removeItemFromPrompts = (item) => {
  prompts = prompts.filter(p => p !== item);
  renderList();
}

const renderPrompt = (prompt) => {
  const promptEl = document.createElement('section');
  promptEl.className = 'option';
  const promptText = document.createElement('div');
  promptText.innerText = prompt;
  const deleteButton = makeButton('X', () => removeItemFromPrompts(prompt), 'deleteButton')
  promptEl.append(deleteButton, promptText);
  return promptEl;
}

function addPrompt(){
  if (promptInput.value === ''){
    return;
  }
  prompts.push(promptInput.value);
  promptInput.value = '';
  renderList();
}

function makeTemplate() {
  const template = new CardTemplate(null, 'FREE SPACE', prompts);
  titleInput.value = '';
  makeTemplateButton.innerText = 'New Card';
  return template;
}

function makeCard(){
  const temp = makeTemplate();
  const card = temp.generateNewCard();
  cardPreviewElement.replaceChildren(card.render());
}

renderList();
makeCard();