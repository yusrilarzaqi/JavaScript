var noAngkot = 1,
   angkotBeroperasi = 6,
   jmlAngkot = 10;

for( noAngkot ;noAngkot <= jmlAngkot; noAngkot++){
   if ( noAngkot <= angkotBeroperasi) {
      console.log('angkot no. ' + noAngkot +' beroperasi dengan baik.');
   }else{
      console.log('angkot no. '+ noAngkot +' sedang tidak beroperasi');
   }
}