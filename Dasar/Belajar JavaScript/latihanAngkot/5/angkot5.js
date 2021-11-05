var noAngkot = 1,
   angkotBeroperasi = 6,
   jmlAngkot = 10;

for( noAngkot ;noAngkot <= jmlAngkot; noAngkot++){
   if ( noAngkot <= angkotBeroperasi && noAngkot != 5) {
      console.log('angkot no. ' + noAngkot +' beroperasi dengan baik.');
   }else if( noAngkot == 8 || noAngkot == 10 || noAngkot == 5){
      console.log('angkot no. '+noAngkot+ ' sedang lembur');
   }else{
      console.log('angkot no. '+ noAngkot +' sedang tidak beroperasi');
   }
}