var arr =["Adam","Bimo","Dimas","Yusril"];
// .length berfumgsi untuk mengetahui berapa jumblah elemen pada Array
// Contoh
//menggunakan looping
// for (var i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }


// join, untuk menggabung isi array dan mengubah menjadi string 
//Contoh
// console.log(arr.join(" "+"-"+" "));
// parameter join berfungsi untuk pemisah


//Push (menambah elemen di belakang)
// arr.push("Hello","world");
// console.log(arr.join());


//Pop (menghapus elemen di belakang)
// arr.pop();
// arr.pop();
// Cara menghapus satu satu
// cara ini benar benar hilang, bukan mengganti undefined


// unshift (menambah elemen pertama)
//arr.unshift('Bomi','Rizal');


// shift (menghapus elemen pertama)
arr.shift();


console.log(arr.join(" "+"-"+" "));