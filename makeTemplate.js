// export const makeButton = (text, callback, buttonClass) => {
//   const button = document.createElement('button');
//   button.innerText = text;
//   button.addEventListener('click', callback);
//   button.className = buttonClass;
//   return button;
// }

// templateList.append(...promptOptions.map(option => makeButton(option.buttonText, () => pickTemplate(option.array))))

// let prompts = [];

// const renderList = () => {
//   list.replaceChildren(...prompts.map(renderPrompt));
// }

// const removeItemFromPrompts = (item) => {
//   prompts = prompts.filter(p => p !== item);
//   renderList();
// }

// const renderPrompt = (prompt) => {
//   const promptEl = document.createElement('section');
//   promptEl.className = 'prompt';
//   const promptText = document.createElement('li');
//   promptText.innerText = prompt;
//   const deleteButton = makeButton('X', () => removeItemFromPrompts(prompt), 'deleteButton')
//   promptEl.append(deleteButton, promptText);
//   return promptEl;
// }

// function addPrompt(){
//   prompts.push(promptInput.value);
//   promptInput.value = '';
//   renderList();
// }

// function pickTemplate(template) {
//   prompts = template;
//   renderList();
// }

// function makeTemplate() {
//   const template = new CardTemplate(titleInput.value, null, prompts);
//   titleInput.value = '';
//   makeTemplateButton.innerText = 'New Card';
//   return template;
// }

// function makeCard(){
//   const temp = makeTemplate();
//   const card = temp.generateNewCard();
//   cardPreviewElement.replaceChildren(card.render());
// }