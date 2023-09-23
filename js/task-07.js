
const fontSizeControl = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

fontSizeControl.addEventListener('input', () => {
  const fontSize = fontSizeControl.value;
  textOutput.style.fontSize = `${fontSize}px`;
});