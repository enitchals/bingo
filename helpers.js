const makeButton = (text, callback, buttonClass) => {
  const button = document.createElement('button');
  button.innerText = text;
  button.addEventListener('click', callback);
  button.className = buttonClass;
  return button;
}