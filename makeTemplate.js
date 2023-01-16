const titleInput = document.querySelector('#prompt-input');
const promptInput = document.querySelector('#prompt-input');
const list = document.querySelector('#prompt-list');
const makeTemplateButton = document.querySelector('#make-template');

let prompts = [];

const renderList = () => {
  list.replaceChildren(...prompts.map(renderPrompt));
}

const renderPrompt = (prompt) => {
  const promptEl = document.createElement('li');
  promptEl.className = 'prompt';
  const promptText = document.createElement('span');
  promptText.innerText = prompt;
  const deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', () => {
    prompts = prompts.filter(p => p !== prompt);
    renderList();
  });
  deleteButton.innerText = 'X'
  promptEl.append(deleteButton, promptText);
  return promptEl;
}

function addPrompt(){
  prompts.push(promptInput.value);
  promptInput.value = '';
  renderList();
}

function pickTemplate(template) {
  prompts = template;
  renderList();
}

function makeTemplate() {
  const template = new CardTemplate(titleInput.value, null, prompts);
  titleInput.value = '';
  return template;
}

function makeCard(){
  const temp = makeTemplate();
  const card = temp.generateNewCard();
  const cardPreviewElement = document.querySelector('#preview');
  cardPreviewElement.append(card.render());
}