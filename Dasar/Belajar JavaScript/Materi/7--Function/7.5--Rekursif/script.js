function angka(n) {
   console.log(n);
   return angka(n-1);
}
angka(10);
// Infinity loop
// "Maximum call stack size exceded"