const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const validLength = parseInt(input.getAttribute('data-length'));
  const inputValue = input.value;

  if (inputValue.length === validLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});