var a = 1;

function tes() {
   a = 2;
}

tes();
console.log(a);
// >2

//Jika didalam function tidak ada deklarasi variabel 
// Maka akan mengambil variabel global
