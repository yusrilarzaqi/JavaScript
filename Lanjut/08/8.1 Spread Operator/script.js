// Spread Operator
// Memecah iterables menjadi single element

//console.log(...mhs[0]);

// Megabungkan 2 Array
//const mhs = ['Yusril', 'Dimas', 'Adam'];
//const dosen = ['Budi', "Unang", "Lawren"];
//const orang = [...mhs,'Aji',  ...dosen];
//const orang = mhs.concat(dosen);

//console.log(orang);

// // Mengcopy Array
// const mhs = ['Yusril', 'Dimas', 'Adam'];
// //const mhs1 = mhs;
// const mhs1 = [...mhs];
// const mhs2 = [].concat(mhs);
// mhs1[0] = 'Bimo';
// mhs2[0] = 'Arzaqy';
// console.log(mhs1);
// console.log(mhs);
// console.log(mhs2);

//const liMhs = document.querySelectorAll('li');

//let mhs = [];

// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }

//const mhs = [...liMhs].map(m => m.textContent);


//console.log(mhs);
//console.log(liMhs[1].textContent);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;




