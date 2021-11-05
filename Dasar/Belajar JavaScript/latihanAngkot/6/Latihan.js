var penumpang = [];
var tambahPenumpang=function(namaPenumpang,penumpang){
   // jika angkot kosong
   if ( penumpang.length == 0 ) {
      // tambah penumpang di awal array
      penumpang.push(namaPenumpang);
      // tampilkan hasil dan keluar fun
      return penumpang;
   }   
   else{
      // telusuri angkot dari awal
      for (var i = 0; i < penumpang.length; i++) {
         // jika ada kursi kosong 
         if( penumpang[i] == undefined ){
            // tambah penumpang di kursi
            penumpang[i]=namaPenumpang;
            // kembalikan array&keluar fun
            return penumpang;
         }
         // jika ada nama yg sama
            // tampilkan pesan kesalahan
            // kembalikan array&keluar fun
         // jika semua terisi 
            // penumpang duduk di belakang
            // kembalikan array&keluar fun
      }
   }
};

console.log(tambahPenumpang('yuril',penumpang));
