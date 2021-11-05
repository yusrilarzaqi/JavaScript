var ulang = true;
while(ulang){
//Player menginputkan
var p = prompt('Masukan gajah, orang, semut');

//Komputer Menmilih pilihan
var comp = Math.random();
if ( comp < 0.34 ) {
   comp = 'gajah';
}else if( comp >= 0.35 && comp < 0.68 ) {
   comp = 'orang';
}else if( comp >= 0.69 && comp < 1 ) {
   comp = 'semut';
}else {
   comp = 'anda salah memasukan';
}
console.log(comp);
var hasil = '';
//Rules
if ( p == comp ) {
   hasil = 'SERI';
}else if ( comp == 'gajah' ) {
   hasil = ( p == 'orang' ) ? 'KALAH' : 'MENANG';
}else if( comp == 'orang' ) {
   hasil = ( p == 'gajah' ) ? 'MENANG' : 'KALAH';
}else if ( comp == 'semut' ) {
   hasil = ( p == 'orang' ) ? 'MENANG' : 'KALAH';
}


//tampilan
alert('Anda memilih : '+p+' dan komputer memilih : '+comp+'\nMaka hasilnya adalah : '+hasil);

//pengulangan
ulang = confirm('Lagi?');
}