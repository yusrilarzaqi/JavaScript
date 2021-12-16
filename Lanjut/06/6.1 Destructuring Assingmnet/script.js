// Distructuring Variable / Assingment

// Destructuring array

//const perkenalan = ['Hallo', "nama", "saya", "Yusril Arzaqi"];

//const [salam, satu, dua, nama] = perkenalan;

// skip item
//const [salam, satu, dua, nama] = perkenalan;

//console.log(salam, nama);

// swap items
//let a = 1;
//let b = 2

//console.log(`a : ${a}`);
//console.log(`b : ${b}`);

//[a, b] = [b, a];

//console.log(`a : ${a}`);
//console.log(`b : ${b}`);


// return value pada function
/*
function coba() {
  return [1, 2];
}

const [a, b] = coba();
console.log(a);
*/


// Rest Parameter
//const [a, ...values] = [1, 2, 3, 4, 5];

//console.log(a);
//console.log(values)


// Destructuring Object
/*
const mhs = {
  nama : "Yusril Arzaqi",
  umur : 18
};

const {nama, umur} = mhs;

console.log(nama);
console.log(umur);
*/

// Assingment tanpa deklarasi object
/*
const mhs = {
  nama : "Yusril Arzaqi",
  umur : 18
};

({nama, umur} = {nama : "Yusril Arzaqi",umur : 18});



console.log(nama);
console.log(umur);
*/

// Assingment ke variable baru
/*
const mhs = {
  nama : "Yusril Arzaqi",
  umur : 18
};

const {nama: n, umur: u} = mhs;

console.log(n);
console.log(u);
*/

// Memberikan Default Value
/*
const mhs = {
  nama : "Yusril Arzaqi",
  umur : 18,
  email: "arzaqiyusril@gmail.com"
};

const {nama, umur, email = 'email@default.com'} = mhs;

console.log(nama);
console.log(umur);
console.log(email);
*/

// Memberikan nilai default + assign ke variable baru
/*
const mhs = {
  nama : "Yusril Arzaqi",
  umur : 18,
  email: "arzaqiyusril@gmail.com"
};

const {nama: n, umur: u, email: e = 'email@default.com'} = mhs;

console.log(n);
console.log(u);
console.log(e);
*/

// Rest Parameter
/*
const mhs = {
  nama : "Yusril Arzaqi",
  umur : 18,
  email: "arzaqiyusril@gmail.com"
};

const {nama, ...values} = mhs;

console.log(values);
*/

// Mengambil field pada object, setelah dikirm sebagai parameter untuk function
const mhs = {
  id   : 123,
  nama : "Yusril Arzaqi",
  umur : 18,
  email: "arzaqiyusril@gmail.com"
};

function getIdMhs({id}) {
  return id;
}

console.log(getIdMhs(mhs));


























