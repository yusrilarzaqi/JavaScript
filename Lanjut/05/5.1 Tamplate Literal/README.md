# 5.1 Template Literal / Template String

## Pengertian

> Template literal adalah **String Literal** yang memungkinkan adanya **Expression** di dalamnya.
> **MDN Web Docs**

## String Literal

```javascript
let nama = 'Yusril Arzaqi';
let nrp = "112101341";
let email = `arzaqiyusril@gmail.com`;
```

## Template Literal

- Menggunakan \`\` backtick
- Multi-line String
- Embedded Expression
- HTML Fragments
- Expression Interpolation
- Tagged Template

```javascript
`string text`

`string text baris 1
 string text baris 2
 string text baris 3
 string text baris 4`

`string text ${expression} string text`

tag `string text ${expression} string text`
```

## Multi-line String

```javascript
console.log('string1 \nstring 2');
console.log(`string 1
string 2`);
```

### HTML Fragments (1)

```javascript
const mhs = {
  nama : 'Yusril Arzaqi',
  umur : 18,
  nrp  : '112101341',
  email: 'arzaqiyusril@gmail.com'
};
```
---

```javascript
let el = '';

el += '<div class="mhs">';
el += '<h2>' + mhs.nama + '</h2>';
el += '<span class="nrp"' + mhs.nrp + '</span>';
el += '</div>';

console.log(el);
```

### HTML Fragments (2)

```javascript
const mhs = {
  nama : 'Yusril Arzaqi',
  umur : 18,
  nrp  : '112101341',
  email: 'arzaqiyusril@gmail.com'
};
```

---

```javascript
let el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);
```

### Embedded Expression

```javascript
const nama = 'Yusril Arzaqi';
let umur = 18;
console.log(`Halo, Perkenalkan nama saya ${nama}, saya ${umur} tahun.`);
```

### Expression Interpolation (1)

```javascript
let a = 10;
let b = 15;
console.log('Jika a = 10 dan b = 15, maka hasil penjumlahanya adalah ' + (a + b) + ', bukan ' + (2 * a + b));
```
### Expression Interpolation (2)

```javascript
let a = 10;
let b = 15;
console.log(`Jika a = 10 dan b = 15, maka hasil penjumlahanya adalah ${a + b}, bukan ${2 * a + b}`;
```



















