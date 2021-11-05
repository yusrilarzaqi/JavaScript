var a = 1;

function tes() {
   var a = 2;
}
tes();

console.log(a);
// >1

// 'NAME CONFLIC'
// yang mana mempunyai 2 variabel yang sama tetapi scopenya berbeda 
// Jadi tidak menimpa 
// var diluar function tidak menimpa didalam