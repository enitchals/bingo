const titleInput = document.querySelector('#prompt-input');
const promptInput = document.querySelector('#prompt-input');
const list = document.querySelector('#prompt-list');
const makeTemplateButton = document.querySelector('#make-template');

const prompts = [];

const renderList = () => {
  const promptElements = prompts.map(prompt => {
    const promptEl = document.createElement('span');
    promptEl.className = 'prompt';
    promptEl.innerText = prompt;
    return promptEl;
  })
  list.replaceChildren(...promptElements);

}

function addPrompt(){
  prompts.push(promptInput.value);
  promptInput.value = '';
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