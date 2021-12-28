function cetakNama(nama) {
  console.log(`Halo, Nama saya ${nama}`);
}

const PI = 3.14;

const mahasiswa = {
  nama : "Yusril",
  umur : 18,
  cetakMhs() {
    return `Halo, nama saya ${this.nama}, saya ${this.umur} tahun.`;
  }
}

class Orang {
  constructor() {
    console.log("Obejek telah dibuat");
  }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports ={
  cetakNama,
  PI,
  mahasiswa,
  Orang
}
