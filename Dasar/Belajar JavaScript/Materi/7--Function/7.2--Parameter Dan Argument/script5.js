function tambah() {
   var hasil = '';
   for (var i = 0; i < arguments.length; i++) {
      hasil += arguments;
   }
   return hasil;
}
var coba = tambah(1,20,25);
console.log(coba);
