// export const makeButton = (text, callback, buttonClass) => {
//   const button = document.createElement('button');
//   button.innerText = text;
//   button.addEventListener('click', callback);
//   button.className = buttonClass;
//   return button;
// }

// templateList.append(...spaceOptions.map(option => makeButton(option.buttonText, () => pickTemplate(option.array))))

// let spaces = [];

// const renderList = () => {
//   list.replaceChildren(...spaces.map(renderSpace));
// }

// const removeItemFromSpaces = (item) => {
//   spaces = spaces.filter(p => p !== item);
//   renderList();
// }

// const renderSpace = (space) => {
//   const spaceEl = document.createElement('section');
//   spaceEl.className = 'space';
//   const spaceText = document.createElement('li');
//   spaceText.innerText = space;
//   const deleteButton = makeButton('X', () => removeItemFromSpaces(space), 'deleteButton')
//   spaceEl.append(deleteButton, spaceText);
//   return spaceEl;
// }

// function addSpace(){
//   spaces.push(spaceInput.value);
//   spaceInput.value = '';
//   renderList();
// }

// function pickTemplate(template) {
//   spaces = template;
//   renderList();
// }

// function makeTemplate() {
//   const template = new CardTemplate(titleInput.value, null, spaces);
//   titleInput.value = '';
//   makeTemplateButton.innerText = 'New Card';
//   return template;
// }

// function makeCard(){
//   const temp = makeTemplate();
//   const card = temp.generateNewCard();
//   cardPreviewElement.replaceChildren(card.render());
// }