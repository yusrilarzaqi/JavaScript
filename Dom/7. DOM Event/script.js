/*
const p3 = document.querySelector('.p3');

function ubahWarna2(){
  p2.style.backgroundColor = 'lightblue';
}

function ubahWarna3(){
  p3.style.backgroundColor = 'lightgreen';
}


const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna2;

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
  const ul = document.querySelector('section#b ul');

  const liBaru = document.createElement('li');
  const textLiBaru = document.createTextNode('item baru');
  liBaru.append(textLiBaru);
  ul.appendChild(liBaru);
});
*/

const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//   p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function() {
//   p3.style.color = 'red';
// }
p3.addEventListener('wheel', function() {
  // p3.style.backgroundColor = 'lightblue';
  p3.classList.toggle('biru-muda');
});
// p3.addEventListener('click', function() {
//   p3.style.color = 'red';
// });

  
