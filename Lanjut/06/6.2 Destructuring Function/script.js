// Destructuring

//function kalkulasi(a, b) {
//  return [a + b, a - b, a * b, a / b];
//}

//const jumlah = penjumlahanPerkailan(2, 3)[0];
//const kali = penjumlahanPerkailan(2, 3)[1];
//
//const [jumlah, kali] = penjumlahanPerkailan(2,3);
//console.log(jumlah);
//console.log(kali);

//const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
//console.log(bagi)
/*
function kalkulasi(a, b) {
  return {
    tambah : a + b,
    kurang : a - b,
    kali   : a * b,
    bagi   : a / b
  }
}

const {bagi, tambah, kali, kurang}  = kalkulasi(2, 3);

console.log(bagi);
*/

// Destructuring function arguments
/*
const mhs1 = {
  nama : 'Yusril Arzaqi',
  umur : 18,
  email: 'arzaqiyusril@gmail.com'
};

function cetakMhs(mhs) {
  return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun`;
}

console.log(cetakMhs(mhs1));
 */
const mhs1 = {
  nama : 'Yusril Arzaqi',
  umur : 18,
  email: 'arzaqiyusril@gmail.com',
  nilai: {
    tugas: 80,
    uts  : 85,
    uas  : 75
  }
};

function cetakMhs({nama, umur, nilai:{uts}}) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uts saya ${uts}`;
}

console.log(cetakMhs(mhs1));








