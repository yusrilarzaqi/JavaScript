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
- Map
- Set
- Symbol
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

## JSON

- JavaScript mendukung konversi data dari String json ke Object ataupun sebaliknya.
- `JSON.stringify()` digunakan untuk melakukan konversi dari Object ke String.
- `JSON.parse()` digunakan untuk melakukan konversi dari String ke Object.
- [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

### Pengenalan JSON

- **JSON** singkatan dari JavaScript Object Notation.
- **JSON** merupakan data String yang bentuknya mirip dengan JavaScript Object.
- Saat ini **JSON** banyak sekali digunakan untuk komunikasi antara Server dan Client.
- [JSON](https://json.org/json-en.html)

### Kode : JSON

```javascript
// JSON
const person = {
	firstName: 'Yusril',
	lastName: 'Arzaqi',
	address: {
		contry: 'Indonesia',
		city: 'Semarang',
	},
};

const json = JSON.stringify(person);
const personAgain = JSON.parse(json);

console.info(json);
console.info(personAgain);
```

## BigInt

- BigInt merupakan tipe data `Number` yang bisa mencakup data angka lebih dari `Number.MAX_SAFE_INTEGER`.
- Untuk kasus number yang lebih dari itu, sangat disarankan menggunakan tipe data BigInt.
- Cara penggunaan BigInt
- [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Refrence/Global_Objects/BigInt)

### Kode : BigInt

```javascript
const a = BigInt(Number.MAX_SAFE_INTEGER);
const b = BigInt(Number.MAX_SAFE_INTEGER);

const c = a + b;

console.info(c);
console.info(typeof c);
```

## Date

- JavaScript memiliki tipe data untuk representasi waktu dan tanggal, yaitu `Date`.
- `Date` merupakan representasi milisecond sejak tanggal 1 January 1970, atau dikenal dengan Epoch & Unix Timestamp.
- [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Refrence/Global_Objects/Date)

### Membuat Object Date

Untuk membuat object Date, kita bisa menggunakan `new Date()`, dimana terdapat constructor parameter.

|                            Function                             |                  Keterangan                  |
| :-------------------------------------------------------------: | :------------------------------------------: |
|                          `new Date()`                           |            Membuat date saat ini             |
|                  `new Date(year, month, date)`                  |            Membuat dengan tanggal            |
| `new Date(year, month, date?, hour?, minute?, second?, milis?)` | Membuat date dnegan parameter sampai `milis` |
|                      `new Date(Timestamp)`                      | Membuat date dari epoch atau unix timestamp  |

### Kode : Membuat Object Date

```javascript
const date1 = new Date();
console.info(date1);

const date2 = new Date(2022, 08, 19);
console.info(date2);

const date3 = new Date(2022, 08, 19, 1, 0, 0, 0);
console.info(date3);

const date4 = new Date(1660903035);
console.info(date4);
```

### Epoch & Unix TimeStamp

- Dalam menggunakan tipe data waktu, biasanya disemua bahasa pemrograman akan mendukung yang namanya epoch & unix timestamp
- Epoch & Unix timestamp merupakan hitungan miliseconds setelah 1 January 1970.
- JavaScript pun mendukung pembuatan waktu dalam bentuk epoch dan unix timestamp.
- Untuk mendapatkan waktu saat ini dalam epoch & unix timestamp, kita bisa menggunakan `Date.now()`
- Untuk mengubah dari object date ke epoch & unix timestamp, kita bisa menggunakan function `getTime()`

### Kode : Epoch & Unix TimeStamp

- Kita juga bisa melakukan parsing membuat date dari string menggunakan method `Date.parse(value)`.
- Format string harus `YYYY-MM-DDTHH:mm:ss.sssZ`.
- Dimana jika kita hanya membuat date berisi tanggal saja, kita cukup gunakan `YYYY-MM-DD`.
- Jika date dengan tanggal, waktu, dan timezone, gunakan `YYYY-MM-DDTHH:mm:ss.sssZ`.
- Hasil parsing adalah unix timestamp, bukan object date.

### Format Date

| Format Date |        Keterangan         |
| :---------: | :-----------------------: |
|    YYYY     |           Tahun           |
|     MM      |           Bulan           |
|     DD      |          Tanggal          |
|      T      | Pemisah tanggal dan waktu |
|     HH      |            Jam            |
|     mm      |           Menit           |
|     ss      |           Detik           |
|     sss     |         Milidetik         |
|      Z      |         Timezone          |

### Kode : Fomat Date

```javascript
// Fomat Date  YYYY-MM-DDTHH:mm:ss.sssZ

const date = new Date('2022-08-19T07:00:00.000Z');
console.info(date.getTime());
```

### Date Getter dan Setter

- Date juga memiliki banyak sekali method untuk mendapatkan informasi date dan juga mengubah informasi date, atau istilahnya adalah getter & setter.
- [Date Instance Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#instance_methods)

### Kode : Date Getter dan Setter

```javascript
const date = new Date();
date.setFullYear(2022);

console.info(date.getFullYear());
console.info(date.getMonth());
console.info(date.getDate());
console.info(date.getHours());
console.info(date.getMinutes());
console.info(date.getSeconds());
console.info(date.getMilliseconds());
console.info(date.getTimezoneOffset());
```

## Math

- `Math` merupakan class di JavaScript yang berisikan static property dan method untuk operasi matematika.
- Ada banyak sekali static property dan method di `Math`.
- `Math` hanya bisa digunakan untuk tipe data `Number`, tidak bisa digunakan untuk tipe data `BigInt`.
- [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

### Kode : Math

```javascript
// Kode math
const num = [10, 11, 9, 13, 8];
console.info(Math.max(num));
console.info(Math.min(num));

console.info(Math.round(10.5)); // 11 dibulatakan ke atas
console.info(Math.round(10.3)); // 10 dibulatakan ke atas
console.info(Math.floor(10.5)); // 10 dibulatakan ke bawah
```

## Boolean

- `Boolean` merupakan wrapper class untuk tipe primitif boolean.
- `Boolean` memiliki method `toString()` untuk mengkonversi ke `String`.
- Dan memiliki method `valueOf()` untuk mengkonversi ke tipe boolean primitif.
- [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### Kode : Boolean

```javascript
// Boolean
const boolean = Boolean(true);

console.info(`typeof boolean ${typeof boolean}`);
console.info(boolean);
console.info(boolean.valueOf());

const str = boolean.toString();
console.info(str);
console.info(`typeof str ${typeof str}`);
```

## Map

- `Map` merupakan representasi dari struktur data key-value.
- `Map` mirip dnegan tipe data object, hanya saja pada `Map`, semua method untuk manipulasi data disediakan.
- `Map` mengikuti kontrak iterable, sehingga bisa di iterasi secara default.
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

### Perbedaan Map dan Object

|                              Map                               |                                        Object                                        |
| :------------------------------------------------------------: | :----------------------------------------------------------------------------------: |
|               Pertama dibuat, tidak memiliki key               | Karena memiliki prototype, jadi bisa jadi memiliki default key ketika pertama dibuat |
|                   Key bisa tipe data apapun                    |                             Key hanya string atau symbol                             |
| Jumlah key bisa diketahui dengan mudah dengan attribute `size` |                Tidak bisa diketahui, harus manual menggunakan iterasi                |
|         Secara default tidak bisa dikonversi ke `JSON`         |                      Bisa dikonversi ke `JSON` secara otomatis                       |

### Map Instance Mathod & Property

|      Method & Property      |              Keterangan              |
| :-------------------------: | :----------------------------------: |
|           `size`            |             Panjang Map              |
|          `clear()`          |       Menghapus semua isi Map        |
|        `delete(key)`        |  Menghapus data Map berdasarkan key  |
|     `get(key) : value`      | Mendapatkan data Map berdasarkan key |
|    `has(key) : boolean`     | Mengecek apakah Map berisi data key  |
|      `set(key, value)`      | Mengubah data Map dengan key = value |
| `forEach((key, value) => )` |        Melakukan iterasi Map         |

### Kode : Map

```javascript
// kode Map
const map = new Map();

map.set('Name', 'Yusril Arzaqi');
map.set('Address', 'Indonesia');

console.info(map);
console.info(map.get('Name'));
console.info(map.get('Address'));

for (const element of map) {
	console.info(`${element[-1]} : ${element[1]}`);
}

map.forEach((value, key) => {
	console.info(`${key} : ${value}`);
});
```

## Set

- Set merupakan implementasi dari struktur data yang berisikan data-data unique.
- Set mirip seperti Array, hanya saja isi datanya selalu unique.
- Jika kita menambahkan data yang sama, maka data hanya akan diterima satu saja.
- Set mengimplementasi kontrak iterable, sehingga bisa diiterasi secara default.
- [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

### Set Instance Method & Property

|  Method & Property   |             Keterangan             |
| :------------------: | :--------------------------------: |
|        `size`        |            Panjang set             |
|     `add(size)`      |      Menambahkan data ke set       |
|     `has(value)`     | Mengecek apakah Set memiliki Value |
|   `delete(value)`    |      Menghapus value dari Set      |
| `forEach(value => )` |       Melakukan iterasi Set        |

### Kode : Set

```javascript
// Kode Set
const set = new Set();

set.add('Yusril');
set.add('Yusril');
set.add('Arzaqi');
set.add('Arzaqi');

console.info(set);
set.forEach((value) => console.info(value));
```

## Symbol

- `Symbol` merupakan tipe data yang digaransi akan selalu unique setiap kali kita membuat data symbol.
- `Symbol` kadang banyak digunakan untuk membuat key pada object.
- [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

### Kode : Symbol

```javascript
// Kode Symbol
const firstName = Symbol();
const lastName = Symbol();

const person = {};
person[firstName] = 'Yusril';
person[lastName] = 'Arzaqy';

console.info(person[firstName]);
console.info(person[lastName]);
```

### Symbol For

- Kadang agak sulit membuat symbol harus selalu menggunakan variable.
- Pembuatan symbol juga bisa menggunakan static method `Symbol.for(key)`.
- Jika kita menggunakan key yang sama, `Symbol` , yang sama akan selalu dikembalikan.

### Kode : Symbol For

```javascript
const person = {};
person[Symbol.for('firstName')] = 'Yusril';
person[Symbol.for('lastName')] = 'Arzaqy';

console.info(person);
console.info(person[Symbol.for('firstName')]);
console.info(person[Symbol.for('lastName')]);
```

## RegExp

- **RegExp** merupakan implementasi dari regular expression di JavaScript.
- Regular expression merupakan fitur untuk mencari text dengan pola.
- Membuat regular expression di JavaScript bisa dilakukan dengan dua cara, yaitu menggunakan literal notation atau membuat object **RegExp**.
- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### Membuat RegExp

```javascript
// Kode : RegExp
const regex1 = /[a]/;
const regex2 = new RegExp('[a]');
const regex3 = new RegExp(/[a]/);

console.info(regex1);
console.info(regex2);
console.info(regex3);
```

### RegExp Instance Method

|     Instance Method     |                                            Keterangan                                            |
| :---------------------: | :----------------------------------------------------------------------------------------------: |
| `exec(value) : result`  | Exekusi regex, jika menemukan datta sesuai pola, maka kembalian result nya, jika tidak maka null |
| `test(value) : boolean` |     Exekusi regex, jika menemukan data sesuai pola, maka return true, jika tidak maka false      |

### RegExp Modifier

RegExp memiliki modifier untuk mengubah sifat cara pencarian

| Modifier |                                            Keterangan                                             |
| :------: | :-----------------------------------------------------------------------------------------------: |
|   `i`    |                                  Regex menjadi incase sensitive                                   |
|   `g`    | Pencarian dilakukan secara global, secara default setelah menemukan data, pencarian akan berhenti |
|   `m`    |                        Multiple, pencarian dilakukan di tiap baris (enter)                        |

### Kode : RegExp Modifier

```javascript
const name = 'Yusril\nArzaqi\nyusril';
const regex1 = /yusril/g;
const regex2 = /Arzaqi/gi;

let result;
while ((result = regex1.exec(name)) !== null) console.info(result);

while ((result = regex2.exec(name)) !== null) console.info(result);
```

### Fitur RegExp Lainnya

- Assersions : inikasi awal dan akhir teks [Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
- Character Classes : membedakan anatra huruf dan angka [Character Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
- Group dan Range : melakukan grouping atau range huruf atau angka [Group and Ranges](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences)
- Quantifiers : menentukan jumlah huruf atau angka [Quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)

### Kode : Contoh Fitur RegExp

```javascript
const regex = /s[aiueo]/gi;
const text =
	'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.';

while ((result = regex.exec(text)) !== null) {
	console.info(result);
}
```

### Regular Expression di String

Di JavaScript, tipe data String memiliki instance method yang dapat menfaatkan RegExp untuk melakukan pencarian.

|       String Method        |                     Keterangan                      |
| :------------------------: | :-------------------------------------------------: |
|   `match(reges) : Array`   |     Mencari semua data yang sesuai dengan regex     |
|   `search(regex) :index`   |     Mencari index data yang sesuai dengan regex     |
|  `replace(regex, value)`   | Mengubah data dengan value yang sesuai dengan regex |
| `replaceAll(regex, value)` | Mengubah semua data dengan value yang sesuai regex  |
|   `split(regex) : Array`   |            Memotong string dengan regex             |

### Kode : Regular Expression di String

```javascript

```
