const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = value.trim();
  });


  if (!formObject.email || !formObject.password) {
    alert('Усі поля повинні бути заповнені');
    return;
  }
  console.log(formObject);
  this.reset();
});