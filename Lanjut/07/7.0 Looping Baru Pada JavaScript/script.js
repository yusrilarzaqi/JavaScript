// for ..of 
// Array
//const mhs = ['Yusril', 'Dimas', 'Adam'];

//for(let i = 0; i < mhs.length; i++) {
  //console.log(mhs[i]);
//}

//mhs.forEach(m => console.log(m));

//for( const m of mhs) {
  //console.log(m);
//}



// String
//const nama = 'Yusril';

//for (const n of nama ){
  //console.log(n);
//}



//const mhs = ['Yusril', 'Dimas', 'Adam'];
//mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke-${i+1}`));

//for (const [i, m] of mhs.entries()) {
  //console.log(`${m} adalah mahasiswa ke-${i+1}`);
//}

// Node List 
// const liNama = document.querySelectorAll('.nama');

//console.log(liNama);
// liNama.forEach(n => console.log(n.textContent));
// for (n of  liNama) {
//   console.log(n.innerHTML);
// }

// Arugments
// function jumlahkanAngka() {
//   //return arguments.reduce((a, i) => a + i);
//   let jumlah = 0;
//   //arguments.forEach(a => jumlah += a);
//   for (const a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for in
const mhs = {
  nama : "Yusril",
  umur : 18,
  email: "arzaqiyusril@gmail.com",
  nilai: {
    tugas: 80,
    uts  : 85,
    uas  : 95
  }
};

// for (m in mhs) {
//   console.log(mhs[m]);
// }

for (n in mhs.nilai) {
  console.log(mhs.nilai[n]);
}




