
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');


let counterValue = 0;

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  updateValue();
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  updateValue();
});


function updateValue() {
  valueSpan.textContent = counterValue;
}