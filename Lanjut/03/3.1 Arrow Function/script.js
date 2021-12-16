/* Function Expression
const tampilPesan = function(nama) {
  return `Hello ${nama}`;
}

console.log(tampilPesan('Yusril arzaqi'));
*/

// Arrow Function
/*
const tampilPesan = (nama) => {
  return `Hello ${nama}`;
}
*

const tampilNama = (nama, waktu) => {
  return `Selamat ${waktu} ${nama}`;
}
*/

// implist return
// const tampilPesan = nama => `Hello ${nama}`;

// const tampilPesan = () => `Hello world!`;


let mahasiswa = ['Yusril arzaqi', 'Adam Saputra', 'Bimo alamsyah'];
/*
let jumlahHuruf = mahasiswa.map(function (nama) {
  return nama.length;
});
*/

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
let objKu = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length}))

console.table(objKu);
 
