//Before
//function jumblahVolumDuaKubus(a,b) {
//   var volumA,volumB,total;
//   volumA = a*a*a;
//   volumB = b*b*b;
//   total = volumA + volumB;
//  return total;
//}
//console.log(jumblahVolumDuaKubus(8,3));

//After
function jumblahVolumDuaKubus(a,b) {
   return a*a*a + b*b*b;
}
console.log(jumblahVolumDuaKubus(8,3));
