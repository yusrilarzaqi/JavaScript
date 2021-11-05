//Hitung Segitiga
function hitungLuasSegitiga(a,t)
{
   return a*t/2;
}
var a = parseFloat(prompt('Masukan alas Segitiga : '));
var t = parseFloat(prompt('Masukan tinggi Segitiga : '));
var ulang=true;
while (ulang===true)
{
   var hasil = hitungLuasSegitiga(a,t);
   alert(hasil);
   ulang=confirm('lagi?');
}