var a = 1;
// a ini adalah var global

function tes(a) {
   console.log(a);
   // a ini adalah var lokal
}
tes(a);
console.log(a);
// global
