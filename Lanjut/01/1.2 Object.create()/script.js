
// Function deklaration
const MethodMahasiswa = {
    makan : function (porsi) {
    this.energy += porsi;
      console.log(`Hallo ${this.nama}, selamat makan`);
    }, 
    main : function (jam) {
      this.energy -= jam;
      console.log(`Hallo ${this.nama}, selamat Bermain`);
    },
    tidur: function (jam) {
        this.energy += jam * 2;
        console.log(`Hallo ${this.nama}, selamat Tidur`);
    }
}

function Mahasisawa(nama, energy) {
  let mahasiswa = Object.create(MethodMahasiswa);
  mahasiswa.nama = nama;

  return mahasiswa;
}

const yusril = Mahasisawa("Yusril", 10);

const arzaqi = Mahasisawa("Arzaqi", 20);


