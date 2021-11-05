/*
Beginilah kira-kira segitiga pascal 3 baris.
  1
 1 1
1 2 1
 
Jika dibuat rata ke kiri
1
1 1
1 2 1
*/
 
// Berapa banyak baris segitiga pascal yang ingin dibuat
var lines = 5;
 
// Array untuk menampung setiap baris segitiga pascal
var list = [];
// Baris pertama selalu 1
list.push([1]);
// Baris kedua selalu 1, 1
list.push([1, 1]);
 
// Baris ke 3 sampai ke N
for(var i=2; i&lt;lines; i++) {
	// Mengambil baris diatasnya
  // Misal: Mau membuat baris ke 3, maka perlu baris ke 2
  // untuk memproduksi baris ke 3
	var prev = list[i-1];
  
  // Membatasi berapa angka dalam baris baru.
  // Tiap baris akan ditambahkan 1 angka baru dari baris sebelumnya
  // Contoh:
  // Baris 1 = 1 angka
  // Baris 2 = 2 angka(jumlah_baris_1 + 1)
  // Baris 3 = 3 angka(jumlah_baris_2 + 1)
  var max = prev.length + 1;
  
  // Menampung hasil deret angka baris yang sedang dicari
  var temp = [];
  for(var x=0; x&lt;max; x++) {
  	// Pada deret pascal, angka pertama dan terakhir pasti 1
  	if(x == 0 || x == max-1) {
    	// console.log('in', x);
   		temp[x] = 1;
    } else {
    	// Membuat angka baru dimana
      // angka baru ke N = (angka sebelumnya ke N-1) + angka sebelumnya ke N)
      // Contoh: N = N + (N-1). Misalkan baris ke 3 mencari deret ke 2, maka 2 = 1(baris sebelumnya) + 1(baris sebelumnya)
    	temp[x] = prev[x-1] + prev[x];
    }
  }
  
  // Menambahkan ke array list
  list.push(temp);
}
 
// Melakuka print segitiga pascal
print(list);
 
function print(list) {
  document.write("&lt;pre>");
 
  var lines = list.length
  for(var keyX in list) {
    for(var y=lines - keyX; y>0; y--)
    	document.write(' ');
      
    for(var keyY in list[keyX])
    	document.write(list[keyX][keyY] + ' ');
    document.write("&lt;br />");
  }
  
  document.write("&lt;/pre>");
}