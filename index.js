const cardListElement = document.querySelector('#cards');

const numberBingo = new CardTemplate('bingo!', 'free', nums);
const card1 = numberBingo.generateNewCard();
const card2 = numberBingo.generateNewCard();
const card3 = numberBingo.generateNewCard();
cardListElement.append(card1.render())