// 1. Object Literal
/*
let mahasiswa = {
  nama: "Yusril",
  energy: 10,
  makan: function(porsi) {
    this.energy += porsi;
    console.log(`Hallo ${this.nama}, selamat makan`);
  }
};

let mahasiswa2 = {
  nama: "Arzaqi",
  energy: 10,
  makan: function(porsi) {
    this.energy += porsi;
    console.log(`Hallo ${this.nama}, selamat makan`);
  }
};


console.log(mahasiswa);
mahasiswa.makan(2);
console.log(mahasiswa);
*/

// Function deklaration
// function Mahasisawa(nama, energy) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;

//   mahasiswa.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`Hallo ${this.nama}, selamat makan`);
//   }
  
//   mahasiswa.main = function (jam) {
//     this.energy -= jam;
//     console.log(`Hallo ${this.nama}, selamat Bermain`);
//   }
//   return mahasiswa;
// }

// const yusril = new Mahasisawa("Yusril", 10);

// const arzaqi = Mahasisawa("Arzaqi", 20);


// 3. Constructor
// keyword new
function Mahasisawa(nama, energy) {
  this.nama = nama;
  this.energy = energy;
  
  this.makan = function (porsi) {
    this.energy += porsi;
    console.log(`Hallo ${this.nama}, selamat makan`);
  }
  
  this.main = function (jam) {
    this.energy -= jam;
    console.log(`Hallo ${this.nama}, selamat Bermain`);
  }
}

const yusril = new Mahasisawa("Yusril", 10);

const arzaqi = new Mahasisawa("Arzaqi", 20);




