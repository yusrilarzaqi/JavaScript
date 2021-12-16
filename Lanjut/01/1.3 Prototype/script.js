
// function Mahasiswa(nama, energy) {
//   // let mahasiswa = Object.create(MethodMahasiswa);
//   this.nama = nama;
//   this.energy = energy;

// }

// Mahasisawa.prototype.makan = function (prosi) {
//   this.energy += prosi;
//   return `Hello ${this.nama}, Selamat makan!`;
// }

// Mahasisawa.prototype.main = function (jam) {
//   this.energy -= jam;
//   return `Hello ${this.nama}, Selamat main!`;
// }

// Mahasisawa.prototype.tidur = function (jam) {
//   this.energy += jam * 2;
//   return `Hello ${this.nama}, Selamat tidur!`;
// }

// const yusril = Mahasisawa("Yusril", 10);

// const arzaqi = Mahasisawa("Arzaqi", 20);


class Mahasiswa {
  constructor(nama, energy) {
    this.nama = nama;
    this.energy = energy;
  }

  makan(prosi) {
    this.energy += prosi;
    return `Hallo ${this.nama}, Selamat Makan!`
  }
  main(jam) {
    this.energy -= jam;
    return `Hallo ${this.nama}, Selamat Main!`
  }
  makan(jam) {
    this.energy += jam * 2;
    return `Hallo ${this.nama}, Selamat Tidur!`
  }
}
