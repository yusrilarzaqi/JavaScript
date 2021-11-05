// Global Scope / Window Scope
var a=1;
function tes() {
   var b=2;
}
tes();
console.log(b);
// b is not undefined
// var b hanya digunakan di dalam function
//saja