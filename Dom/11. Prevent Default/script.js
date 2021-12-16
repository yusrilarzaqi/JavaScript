/*
// Event Handling
const close = document.querySelector('.close');
const card = document.querySelector('.card');
close.addEventListener('click', function () {
  // card.remove();
  card.style.display = 'none';
});
*/

// DOM Transversal
/*

for (let i = 0; i < close.length ; i++) {
  close[i].addEventListener('click', function(e) {
    //close[i].parentElement.style.display = 'none';
    e.target.parentElement.style.display = 'none';
  });
}
*/

const close = document.querySelectorAll('.close');

close.forEach(el => {
  el.addEventListener('click', e => {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
  });
});










