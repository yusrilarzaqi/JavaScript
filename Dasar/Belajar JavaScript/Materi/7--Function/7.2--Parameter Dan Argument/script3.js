function tambah(a,b) {
   return a + b;
}

function kali(a,b) {
   return a * b;
}
//Arrinya adalah sebelum dikali tambah dulu
//(2+3)*(10+2)
var hasil = kali( tambah(2,3) , tambah(10,2) );

console.log(hasil);