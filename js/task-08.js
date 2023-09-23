const form = document.querySelector('.login-form'); 

function handleSubmit(event) {
  event.preventDefault(); 

  const formData = new FormData(event.currentTarget);

  const email = formData.get('email');
  const password = formData.get('password');

  if (email === '' || password === '') {
    
    alert('Please fill in all fields');
    return;
  }

  const userData = {
    email, 
    password,
  };

  console.log(userData); 
  form.reset(); 
}
