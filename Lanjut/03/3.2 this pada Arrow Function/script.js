// konsep this pada arrow function

// Constructor function

// const Mahasiswa = function() {
//   this.nama = "Yusril Arzaqi";
//   this.umur = 18;
//   this.sayHello = function() {
//     console.log(`Hello ${this.nama}, umur saya ${this.umur} tahun`);
//   }
// }

// Arrow function

// const Mahasiswa = function() {
//   this.nama = "Yusril Arzaqi";
//   this.umur = 18;
//   this.sayHello = () => {
//     console.log(`Hello ${this.nama}, umur saya ${this.umur} tahun`);
//   }
// }

// Objeck literal

// const mhs1 = {
//   nama : 'Yusril A',
//   umur : 18,
//   sayHello: function() {
//     console.log(`Hello ${this.nama}, umur saya ${this.umur} tahun`);
//   }
// }




// const Mahasiswa = function() {
//   this.nama = "Yusril Arzaqi";
//   this.umur = 18;
//   this.sayHello = function() {
//     console.log(`Hello ${this.nama}, umur saya ${this.umur} tahun`);
//   }

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// }

// const yusril = new Mahasiswa();


const box = document.querySelector('.box');
box.addEventListener('click', function () {
  let satu = 'size';
  let dua = 'caption';

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() =>{
    this.classList.toggle(dua);
  }, 600);
});








