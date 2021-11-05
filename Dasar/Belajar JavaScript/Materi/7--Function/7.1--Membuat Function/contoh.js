function jumblahDuaKubus(a,b) {
   var volumeA,volumeB,total;
   
   volumeA = a*a*a;
   volumeB = b*b*b;
   total =volumeA+volumeB;
   
   return total;
}
console.log(jumblahDuaKubus(8,3));
