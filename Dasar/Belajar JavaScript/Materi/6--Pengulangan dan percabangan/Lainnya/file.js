var tampilan = '';

document.write('Membuat paoan catur');

for( var i = 1 ; i <= 10 ; i++ ) {
   if ( i % 2 == 0 ) {
      for( var j = 1 ; j <= 10 ; j++ ) {
         if ( j % 2 == 0 ) {
            tampilan += '#';
         }else{
            tampilan += ' ';
         }
      }
      tampilan += '<br>';
   }else{
      for( var j = 1 ; j <= 10 ; j++ ) {
         if ( j % 2 == 0 ) {
            tampilan += ' ';
         }else{
            tampilan += '#';
         }
      }
      tampilan += '<br>';
   }
   tampilan += '<br>';
}
document.write(tampilan);