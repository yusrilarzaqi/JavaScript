var penumpang = ['adam',undefined,'bumo'];
var tambahPenumpang = function(namaPenumpang, penumpang){
   // jika penumpang kosong
   if (penumpang.length == 0) {
      // tambah penumpang di awal
      penumpang.push(namaPenumpang);
      // kembalikan isi & keluar
      return penumpang;
   }else{
      for (var i = 0; i < penumpang.length; i++) {
         // jika ada kursi kosong
         if (penumpang[i]==undefined) {
            // tambah penumpang di kursi
            penumpang[i] = namaPenumpang;
            // return penumpang
            return penumpang;
         }else if(penumpang[i] == namaPenumpang){
            console.log(namaPenumpang+' sudah ada di dalam angkot');
            return penumpang;
         }else if(i == penumpang.length-1){
            penumpang.push(namaPenumpang);
            return penumpang;
         }
      }
   }
};
var hapusPenumpang=function(namaPenumpang,penumpang){
   if(penumpang.length==0){
      console.log('angkot masih kosong');
      return penumpang;
   }else{
      for(i=0;i<penumpang.length;i++){
         if(penumpang[i]==namaPenumpang){
            penumpang[i] = undefined;
            return penumpang;
         }else if(i==penumpang.length-1){
            console.log(namaPenumpang+' tidak ada di dalam angkot');
            return penumpang;
         }
      }
   }
};
