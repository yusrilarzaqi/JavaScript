// DOM Selection
// document.getElementById()

const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'darkgrey';
judul.innerHTML = "Yusril arzaqi";

// document.getElementByTagName
var p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
  const item = p[i];
  item.style.color = '#dedede';  
}  

// ambil elemen 1 saja index ke-n
var h1 = document.getElementsByTagName('h1')[0];
console.log(h1);

document.getRootNode
