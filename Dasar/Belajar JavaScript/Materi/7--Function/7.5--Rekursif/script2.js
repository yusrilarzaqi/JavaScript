// 5! = 5 * 4 * 3 * 2 * 1

function faktorikal(n) {
   if(n===0)return ;
   return n*faktorikal(n-1);
}
var hasil = faktorikal(5);
console.log(hasil);