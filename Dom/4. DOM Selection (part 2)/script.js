// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '26px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'blue';

// // document.quetySelectorAll() -> nodelists
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//   const item = p[i];
//   item.style.backgroundColor = 'lightblue';
// }

/* merubah node root
 */

const sectionB = document.querySelector('section#b');

const p4 = sectionB.getElementsByTagName('p')[0];
console.log(p4);
