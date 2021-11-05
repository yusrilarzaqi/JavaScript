var tampilkan = '';

for( var i = 1 ; i <= 10 ; i++ ) {
   if ( i % 2 == 0 )
   {
      for( var j = 1 ; j <= 10 ; j++ )
      {
         if ( j % 2 == 0 )tampilkan+='#';
         else tampilkan += ' ';
      }
   }
   else
   {
      for( var j = 1 ; j <= 10 ; j++ )
      {
         if (j%2==0)tampilkan+=' ';
         else tampilkan+='#';
      }
   }
   tampilkan += '\n';
}
console.log(tampilkan);