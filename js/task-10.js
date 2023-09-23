// Отримуємо посилання на елементи DOM
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Додаємо слухачів подій для кнопок "Create" і "Destroy"
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  // Отримуємо кількість елементів для створення зі значення input
  const amount = input.valueAsNumber;
  const boxes = [];

  // Створюємо масив блоків з різними розмірами і випадковим кольором фону
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const size = 30 + i * 10; // Розмір збільшується на 10px з кожним новим елементом
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  // Додаємо створені блоки до контейнера
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  // Очищаємо контейнер, видаляючи всі елементи
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  // Генеруємо випадковий колір у форматі HEX
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

