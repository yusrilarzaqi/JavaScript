const click = document.getElementById('klik');
click.addEventListener('click', function() {
  document.body.classList.toggle('backgroundKu');
});

const tAcakWarna = document.createElement('button');
const textTombol = document.createTextNode('acak warna');
tAcakWarna.appendChild(textTombol);
tAcakWarna.setAttribute('type', 'button');

// document.body.appendChild(tAcakWarna);
click.after(tAcakWarna);
tAcakWarna.addEventListener('click', function() {
  const r = Math.round(Math.random() * 254 + 1);
  const g = Math.round(Math.random() * 254 + 1);
  const b = Math.round(Math.random() * 254 + 1);
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});