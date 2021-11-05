var s = '';

for (var i = 0 ;i <= 10;i++) {
   for(var k=10;k>0;k--)s+=' ';
   for(var j=0;j<i;j++)s+='*';
   s += '\n';
}
console.log(s);