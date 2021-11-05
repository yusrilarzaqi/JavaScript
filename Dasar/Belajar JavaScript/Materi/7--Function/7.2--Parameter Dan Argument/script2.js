function tambah(a,b) {
   return a+b;
}
var ulang = true;
while (ulang == true) {
   
   var a = parseInt(prompt('Masukan Angka a : '));
   var b = parseInt(prompt('Masukan Angka b : '));
   var hasil = tambah(a,b);
   alert('Hasil dari '+a+' ditambah '+b+'   adalah '+hasil);
   
   ulang = confirm('Lagi?');
}