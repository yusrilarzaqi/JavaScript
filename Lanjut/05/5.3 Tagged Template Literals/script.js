// Tagged Template

// const nama = 'Yusril Arzaqi';
// const umur = 18;

// function coba(strings, ...args){
//   // let result = '';
//   // strings.forEach((str, i) => {
//     // result += `${str}${args[i] || ''}`;
//   // });

//   // return result;

//   return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${args[i] || ''}</span>`, '')
// }

// const str = coba`Halo, Nama saya ${nama}, saya ${umur} tahun`;

// document.body.innerHTML = str;

// Highlight
// const nama = 'Yusril Arzaqi';
// const umur = 18;
// const email = 'arzaqiyusril@gmail.com';

// function highlight(strings, ...args){
//   return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${args[i] || ''}</span>`, '')
// }

// const str = highlight`Halo, Nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}`;

// document.body.innerHTML = str;

// Escaping HTML Tags

import "dompurify";

function sanitize(strings, ...args) {
  return DOMPurify.sanitize(aboutMe);
}

const name = 'Yusril Arzaqi';
const aboutMe = `I Love to do evil <img src="https://unplash.it/100/100?random" onload="alert('I hack you hahaha')" />`;

const html = sanitize`
  <h3>${name}</h3>
  <p>${aboutMe}</p>
`;

document.body.innerHTML = html;








