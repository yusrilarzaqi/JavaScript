const button = document.querySelector('.button');
button.addEventListener('click', () => {
  const input = document.querySelector('.input').value;
  document.querySelector('.test').innerHTML = input;
})

