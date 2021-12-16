const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Mencari angka >= 3
// for

// for (let i = 0; i < angka.length; i++){
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }jjjjk
    
// console.log(newAngka);
    
// filter    
// const newAngka = angka.filter(a => a >= 3);

// console.log(newAngka);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map(a => a*2);

// console.log(newAngka);

// reduce
// jumlahkan seluruh elemen pada array 
// const newAnka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// console.log(newAnka)

// Method Chaining
// Cari angka > 5
// kalikan 3
// jumlahkan

const newAngka = angka.filter(a => a > 5).map(a => a*3).reduce((a,b) => a+b); console.log(newAngka);
console.log(newAngka);


