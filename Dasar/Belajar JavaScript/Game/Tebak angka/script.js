// Game tebak angka
// perulangan
var ulang=true;
while (ulang) {
// Pemain memasukan angka
var p=parseInt(prompt('mausukan angka 1-10 !\nkesempatan anda 3'));
//comp menentukan angka
var comp=Math.floor(Math.random()*10)+1;
// console.log(comp);
// function tampilan
// benar
var benar=function(){return alert('selamat anda benar!')};
// kurang dari
var kurangDari=function(){return alert('Angka yang anda masukan terlalu kecil')};
// lebih dari
var lebihDari=function(){return alert('Angka yang Anda masukan terlalu besar')};
// kalah
var kalah=function(){return alert('kesempatan Anda habis, anda kalah!')};
// Dimulai
   if(p==comp)benar();
   else if(p<=comp){kurangDari();
      var p=parseInt(prompt('mausukan angka !\nkesempatan anda 2'));
      if(p==comp)benar();
      else if(p<=comp){kurangDari();
         var p=parseInt(prompt('mausukan angka !\nkesempatan anda 1'));
         if(p==comp)benar();
         else kalah();
      }
      else if(p>=comp){lebihDari();
         var p=parseInt(prompt('mausukan angka !\nkesempatan anda 1'));
         if(p==comp)benar();
         else kalah();
      }
   }
   else if(p>=comp){lebihDari();
      var p=parseInt(prompt('mausukan angka !\nkesempatan anda 2'));
      if(p==comp)benar();
      else if(p<=comp){kurangDari();
         var p=parseInt(prompt('mausukan angka !\nkesempatan anda 1'));
         if(p==comp)benar();
         else kalah();
      }else if(p>=comp){lebihDari();
         var p=parseInt(prompt('mausukan angka !\nkesempatan anda 1'));
         if(p==comp)benar();
         else kalah();
      }
   }
   else alert('Yang anda masukan bukan angka');
   ulang=confirm('Mau main lagi?');
}