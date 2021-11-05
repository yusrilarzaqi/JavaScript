// Block Scope

// Bahasa C
//int i=2;
//if(i%2==0){
//   bool genap = true;
//}

var i = 2;
if (i%2==0) {
   var genap = true;
}
if (genap) {
   console.log('Genap!');
}
// Muncul,karena javascript tidak menganut
// block scope,tetapi function scope