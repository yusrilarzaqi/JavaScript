// DOM Manipulation

// document.createElement();
// membuat element baru
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Ini Paragraf baru');

// simpan tulisan ke dalam paragraf
pBaru.appendChild(textPBaru);


// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);



const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('item baru ditambahkan');
liBaru.appendChild(textLiBaru);


const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

const sectionB = document.getElementById('b');

const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Judul Baru');
h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4);



pBaru.style.backgroundColor = 'lightgreen';











