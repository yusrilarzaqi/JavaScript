# 6.1 Destructuring Assingment

> Expression pada Syntax JavaScript yang membuat kita dapat **Membongkar** nilai dari **array** atau properti dari **object** kedalam **variable** yang terpisah
> **MDN Web Docs**

```javascript
const coba = ['satu', 'dua', 'tiga']

const [a, b, c] = coba;
console.log(a);// "satu"
console.log(b);// "dua"
console.log(c);// "tiga"
```

```javascript
const mhs = {
  nama : "Yusril Arzaqi",
  umur : 18,
  email: "arzaqiyusril@gmail.com"
};

const {nama, umur, email} = mhs;
console.log(nama);  // "Yusril Arzaqi"
console.log(umur);  // 18
console.log(email);  // "arzaqiyusril@gmail.com"
```



