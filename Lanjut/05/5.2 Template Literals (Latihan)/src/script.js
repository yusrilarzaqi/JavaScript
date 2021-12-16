// 1. Html Fragment 
/*
const mhs = {
  nama : 'Yusril Arzaqi',
  umur : 18,
  nrp  : '185512',
  email: 'arzaqiyusril@gmail.com'
};

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="nrp">${mhs.nrp}</span>
</div>`;
*/

// 2. looping
/*
const mhs = [
  {
    nama : 'Yusril Arzaqi',
    email: 'arzaqiyusril@gmail.com'
  },
  {
    nama : 'Adam Saputra',
    email: 'adam@gmail.com'
  },
  {
    nama : 'Bimo Alamsyah',
    email: 'bimo@mail.com'
  }
];

const el = `<div class="mhs">
  ${mhs.map(m => `<ul>
    <li>${m.nama}</li>
    <li>${m.email}</li>
  </ul>`).join('')}
</div>`
*/

// 3. Conditional
// ternary
/*
const lagu = {
  judul : 'Kau Adalah',
  penyanyi : 'Isyana Sarasvati',
  feat : 'Rayi Putra'
}
const el = `<div class="mhs">
  <ul>
    <li>${lagu.penyanyi}</li>
    <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})`: ''}</li>
  </ul>
</div>`;
*/

// 4. Nested
// HTML Fragment bersarang
const mhs = {
  nama : 'Yusril Arzaqi',
  semester : 5,
  mataKuliah : [
    `Rekayasa Web`,'Analisis dan Perancangan Sistem Informasi','Perancangan Sistem Interaktif', 'Perancangan Sistem Berorientasi Object'
  ]
};

function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
      ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
  `
}

const el = `<div class='mhs'>
  <h2>${mhs.nama}</h2>
  <span class="semester">${mhs.semester}</span>
  <h4>Mata Kuliah</h4>
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;























