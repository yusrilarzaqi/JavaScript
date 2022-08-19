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
- [Number Static Value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#static_properties)

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
- [Number Instance Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#instance_methods)

## String

- Tipe data String sudah kita bahas pada materi JavaScript Dasar.
- Namun kita belum membahas instance method atau juga instance properties yang terdapat di `String`.
- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### String Instance Method dan Properties

- String sendiri memiliki banyak sekali instance method dan properties.
- Hal ini menjadikan untuk memanipulasi dan `String` dan mudah di JavaScript, seperti mengubah menjadi lowercase, UPPERCASE, memotong string menjadi array dan lain-lain.
- [String Instance Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods)

### Kode : String Instance Method dan Properties

```javascript
const input = '              input data             ';
console.info(input.trim());
```

## Array

- Tipe data Array kita bahas di materi JavaScript Dasar.
- Namun kita hanya membahas beberapa instance method yang ada di Array.
- Sebenarnya, terdapat banyak sekali Instance Method yang ada di Array, dan kita akana coba bahas beberapa di sini.
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Array Loop

- Sebelumnya kita biasa menggunakan `for in` dan `for of` untuk melakukan iterasi `Array`, namun `Array` juga memiliki method yang bernama `forEach()`.
- Method `forEach()` bisa diunakan untuk melakukan iterasi dan array.

### Kode : Array Loop

```javascript
const array = ['Yusril Arzaqi', 'Adam Saputra', 'Bimo Alamsyah', 'Dimas Rafif'];

array.forEach(function (v, i) {
	console.info(`${i} : ${v}`);
});

array.forEach((v, i) => console.info(`${i} : ${v}`));

array.forEach((v) => console.info(v));
```

### Array Queue

- Dimana struktur data, terdapat tipe struktur data bernama Queue (Antrian).
- Dimana data maka akan diposisikan di urutan paling belakang.
- Sedengkan data keluar akaan diposisikan dari urutan paling depan.
- Mirip sekali dengan antrian, atau istilah **FIFO** (_first in first out_).
- Kita bisa menggunakan Array dengan bantuan function `push()` untuk menambah data di belakang, dan `shift()` untuk mengambil dan menghapus data paling depan.

### Kode : Array Queue

```javascript
// Array Queue
const queue = [];
queue.push('Yusril Arzaqi');
queue.push('Adam Saputra');
queue.push('Bimo Alamsyah');

console.info(queue.shift());
console.info(queue.shift());
console.info(queue.shift());
```

### Array Stack

- struktur data Stack (Tumpukan) kebalikan dari Queue, dimana aturannya mirip dengan tumpukan kartu.
- Saat kita memasukan data, kita akan memasukan di urutan paling belakang (atau atas).
- Sedengkan saat kita mengambil data, kita akan mengambil data paling belakang (atau atas) terlebih dahulu.
- Stack ini sifatnya **LIFO** (_last in first out_).
- Untuk mengubah diurutkan belakang, kita bisa menggunakan function `push()`.
- Dan untuk mengambil dan menghapus paling belakang, kita bisa menggunakan function `pop()`.

### Kode : Array Stack

```javascript
const stack = [];

stack.push('Yusril Arzaqi');
stack.push('Adam Saputra');
stack.push('Bimo Alamsyah');

console.info(stack.pop());
console.info(stack.pop());
console.info(stack.pop());
```

### Array Search

Array memiliki banyak function untuk melakukan pencarian :

|                Function                |                Keterangan                |
| :------------------------------------: | :--------------------------------------: |
|    `find(value => boolean) : value`    |    Mencari data sesuai dengan kondisi    |
| `findIndex(value => boolean) : number` | Mencari data index sesuai dengan kondisi |
|      `includes(value) : boolean`       |       Menecek apakah terdapat data       |
|       `indexOf(value) : number`        |        Mengecek posisi index data        |
|     `lastIndexOf(value) : number`      |   Mengecek posisi index data terakhir    |

### Kode : Array Search

```javascript
// Array Search
const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

console.info(source.find((v) => v > 3)); // 4
console.info(source.findIndex((v) => v > 3)); // 3
console.info(source.includes(7)); // false
console.info(source.indexOf(5)); // 4
console.info(source.lastIndexOf(5)); // 9
```

### Array Filter

Array memiliki function untuk melakukan filter data :

|              Function              |                     Keterangan                     |
| :--------------------------------: | :------------------------------------------------: |
| `filter(value => boolean) : array` | Melakukan filter data yang kondisi bernilai `true` |

### Kode : Array Filter

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.info(numbers.filter((value) => value % 2 == 1)); // ganjil
console.info(numbers.filter((value) => value % 2 == 0)); // genap
```

### Array Transform

Array juga memiliki function yang digunakan untuk melakukan transformasi

|                     Function                     |                                                         Keterangan                                                         |
| :----------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
|      `map(value => result) : Array<result>`      |                                Melakukan transform tiap value dan menghasilkan array result                                |
| `reduce(resultBefore, value => result) : result` | Melakukan transform dengan menggunakan value array dan value selanjutnya, lalu hasilnya dilanjutkan ke iterasi selanjutnya |
|   `reduceRight(resultBefore, value => result)`   |                                   Sama seperti `reduce()`, namun dilakukan dari belakang                                   |

### Kode : Array Transform

```javascript
// Array Transform
const names = 'Yusril Arzaqi'.split(' ');
console.info(names.map((value) => value.toUpperCase())); // menjadikan toUpperCase
console.info(names.reduce((before, value) => before + ' ' + value)); // mengabungkan array to string
console.info(names.reduceRight((before, value) => before + ' ' + value)); // mengabungkan array to string terbalik

const numbers = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.info(numbers.reduce((result, value) => result + value)); // 54
console.info(numbers.reduceRight((result, value) => result + value)); // 54
```

## Object

- Tipe data object sudah sering kita bahas di JavaScript Dasar dan JavaScript OOP.
- Pada materi ini, kita akan bahas banyak static method yang terdapat pada Object.
- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

### Object Freeze & Seal

- Secara default, object bisa diubah atau dihapus properties nya.
- Jika kita ingin mengubah sebuah object menjadi object yang tidak bisa diubah atau dihapus, kita bisa menggunakan beberapa static method.
- `Object.freeze()` digunakan untuk mengubah object menjadi object yang tidak bisa diubah atau dihapus attribute nya.
- `Object.seal()` digunakan untuk mengubah object yang tidak bisa dihapus attribute nya.

### Kode : Object Freeze

```javascript
const person = {
	firstName: 'Yusril',
	lastName: 'Arzaqi',
};

// Object.freeze(person);
Object.seal(person);

person.firstName = 'Diubah'; // tidak berubah
delete person.firstName; // tidak berubah
console.info(person);
```

### Object Assign

- Kadang kita ada kasus menggabungkan semua attribute dari sebuah object ke object lain.
- Hal ini bisa kita lakukan dengan menggunakan `Object.assign(target, source)`

### Kode : Object Assign

```javascript
// Object Assign
const target = { firstName: 'Yusril' };
const source = {
	firstName: 'Adam',
	lastName: 'Arzaqi',
};

Object.assign(target, source);
console.info(target);
console.info(source);
```

### Object Property Name & Value

- Object juga memiliki static method untuk digunakan mengambil mengambil semua properties names dan values.
- `Object.values()` digunakan untuk mengambil semua property value.
- `Object.getPropertyNames()` digunakan untuk mengambil semua property name.

### Kode : Object Property Name & Value

```javascript
const person = {
	firstName: 'Yusril',
	lastName: 'Arzaqi',
};

console.info(Object.values(person));
console.info(Object.getOwnPropertyNames(person));
```

### Dan Function lain-lain

- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
