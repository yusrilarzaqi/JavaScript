/*
function init() {
  // let nama = 'Yusril'; // local variable
  return function (nama) { // inner function (closure*)
    console.log(nama); // akses ke parent variable
  }
}

let panggilNama = init();
panggilNama('Arzaqi');


function ucapanSalam(waktu) {
  return function(nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan!`);
  }
}

let selamatPagi = ucapanSalam('Pagi');
let selamatSiang = ucapanSalam('Siang');
let selamatMalam = ucapanSalam('Malam');

// selamatPagi('Yusril Arzaqi');
//
console.dir(selamatMalam);
*/

let add = (function() {
  let counter = 0;
  return function(){
    return ++counter;
  }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
