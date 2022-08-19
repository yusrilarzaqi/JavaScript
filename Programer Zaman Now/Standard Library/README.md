# Standard Library

## Sebelum Belajar

- HTML
- Css
- JavaScript Dasar
- JavaScript Object Oriented Programming

## Agenda

- Number
- String
- Array
- Object
- JSON
- Dan lain-lain

## Number

- `Number` merupakan function yang digunakan untuk melakukan konversi ke tipe data number.
- Jika data tidak bisa dikonversi ke number, secara otomatis hasilnya adalah NaN.
- [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### Kode : Number

```javascript
const input = '12345';
const number = Number(input);

console.info(number);
console.info(Number('STRING')); // NaN (Not a Number)
```

### Number Static Properties

- Number memiliki banyak static propertis, seperti :
  - `Number.MIN_VALUE` untuk mendapat number minimal.
  - `Number.MAX_VALUE` untuk mendapat number maksimal.
- [Number Static Value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Refrence/Global_Objects/Number#static_properties)

### Kode : Number Static Properties

```javascript
console.info(Number.MIN_VALUE); // 5e-324
console.info(Number.MAX_VALUE); // 1.7976931348623157e+308
console.info(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.info(Number.MAX_SAFE_INTEGER); // 9007199254740991
```

### Number Static Method

- Number memiliki banyak static method, seperti :
  - `Number.isNaN(value)` untuk mengecek apakah value `NaN` atau bukan.
  - `Number.isInteger(value)` untuk mengecek apakah value berupa integer atau bukan.
  - `Number.parseFloat(string)` untuk konversi ke floating point.
  - `Number.parseInt(string, [radix])` untuk konversike integer.
- [Number Static Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#static_methods)

### Number Instance Method

- Number memiliki banyak instance method, seperti :
- `Number.toLocalString(locale)` untuk mengubah number menjadi string sesuai locale : [list of currency culture codes](https://www.lansweeper.com/knowledgebase/list-of-currency-culture-codes/)
- `Number.toString(redix)` untuk mengubah number menjadi string radix.
- [Number Instance Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Refrence/Global_Objects/Number#instance_methods)

## String

- Tipe data String sudah kita bahas pada materi JavaScript Dasar.
- Namun kita belum membahas instance method atau juga instance properties yang terdapat di `String`.
- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### String Instance Method dan Properties

- String sendiri memiliki banyak sekali instance method dan properties.
- Hal ini menjadikan untuk memanipulasi dan `String` dan mudah di JavaScript, seperti mengubah menjadi lowercase, UPPERCASE, memotong string menjadi array dan lain-lain.
- [String Instance Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods)

### Kode : String Instance Method dan Properties
