var ulang = true;
while(ulang){
//Player menginputkan
var p = prompt('Masukan gajah, orang, semut');

//Komputer Menmilih pilihan
var comp=Math.floor(Math.random()*3)+1;
var kom=function () {
   if(comp==1)comp='semut';
   else if(comp==2)comp='gajah';
   else if(comp==3)comp='orang';
};
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
}else {
   hasil = 'Anda memasukan inputan yg salah';
}


//tampilan
alert('Anda memilih : '+p+' dan komputer memilih : '+comp+'\nMaka hasilnya adalah : '+hasil);

//pengulangan
ulang = confirm('Lagi?');
if (!ulang) {
   alert('Terima kasih');
}
}

console.log(p);