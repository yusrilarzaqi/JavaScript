# Higer Order Function

> Function yang beroperasi pada function yang lain. Baik itu digunakan dalam argumen, maupun sebagai return value.
> 
> Semakin besar sebuah program, semakin tinggi kompleksitasnya semakin membingungkan programmernya.
>
> - https://eloquentjavascript.net

> Ada dua cara untuk merancang sebuah software: Cara pertama adalah untuk membuat programnya se-sederhana mungkin sehingga jelas-jelas tidak ada kekurangan, dan cara lainnya adalah untuk membuat programnya se-kompleks mungkin sehingga tidak ada kekurangan yang jelas.
> - C.A.R.Hoare, 1980 ACM Turing Award Lecture

 ## First Class Function

 > Javascript memperlakukan function sebagai objek.
 > - https://sitepoint.com

## Contoh

```javascript
function kerjakanTugas(mataKuliah, selesai) {
  console.log(`Mulai mengerjakan tugas ${mataKuliah} ...`);
  selesai();
}

function selesai() {
  alert('Selesai mengerjakan tugas!');
}

kerjakanTugas('Pemrograman Web', selesai);
```

---

```javascript
setTimeout(function() {
  console.log('Hello world!');
}, 1000);
```

---

```javascript
const tombol = document.querySelector('.submit');

tombol.addEventListener('click', function() {
  console.log('tombol ditekan!');
});
```

---

```javascript
function ucapanSalam(waktu) {
  return function(nama) {
    console.log(`Hello ${nama}, Selamat ${waktu} semoga harimu menyenangkan!!`);
  }
}

const selamatMalam = ucapanSalam('Malam');

console.dir(selamatMalam('Yusril Arzaqi'));
```

---

```javascript
let total = 0, count = 1;

while (count <= 10) {
  total += count;
  count += 1;
}

console.log(total);
```

vs

```javascript
console.log(sum(range(1, 10)));
```

---

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

vs

```javascript
function repeatLog(num) {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
}

repeatLog(10);
```

```javascript
function repeat(num, action) {
  for (let i = 0; i < num; i++){
    action(i);
  }
}

repeat(10, console.log);

repeat(100, alert);
```

## Functional Programing

## Contoh Higer Order Function

- `Array.prototype.map()`
- `Array.prototype.filter()`
- `Array.prototype.reduce()`


