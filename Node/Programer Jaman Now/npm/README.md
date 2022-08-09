# NPM

## Sebelum Belajar

- Menyelesaikan Kelas Javascript Programer Zaman Now
- NodeJS Dasar

## Agenda

- Pengenalan Node Package Manager.
- Membuat Project.
- Project Configuration.
- Project Type.
- Script.
- Dependency Management.
- Dan lain-lain.

## Pengenalan Node Package Manager

- Saat kita membuat aplikasi, biasanya kita akan buat dalam bentuk project.
- Sederhanynnya, project adalah directory/folder yang berikiskan kode program dan dependency (library) yang kita butuhkan.
- Melakukan management kode program dan dependency management secara manual bukannya hal yang mnyenangkan.
- Untungnya, NodeJS menyediakan NPM (Node Package Manager) yang bisa kita gunakan untuk melakukan management project NodeJS.

### Kegunaan NPM

- NPM tidak hanya digunakan untuk melakukan management project NodeJS.
- NPM jiga bisa digunakan untuk melakukan dependency management yang kita butuhkan dalam project yang kita buat.
- NPM bisa digunakan untuk download dependency, update dan upgrade dependency secara otomatis, tanpa harus kita lakukan secara manual dengan cara download dependency secara manual.

### File package.json

- Saat kita melakukan management project menggunakan NPM.
- NPM menyimpan semua konfigurasi project di file bernama package.json.
- Semua konfigurasi project dan juga dependency kita simpan dalam file package.json yang terdapat di dalam directory project.
- Kita bisa buat file package.json secara manual, atau menggunakan auto generate secara otomatis menggunakan NPM

### NodeJS Dependency Repository

- Saat kita melakukan dependency menggunakan NPM.
- NPM akan melakukan pencarian dan download dependency secara otomatis dari website [npmjs](https://www.npmjs.com/)
- Kiita kuga bisa mencari dependency di website [npmjs](https://www.npmjs.com/)

### Menginstall NPM

- Kita tidak perlu menginstall NPM secara manual.
- Saat kita menginstall NodeJS, secara otomatis NPM akan terinstall juga.
- Untuk mengecek versi NPM yang terinstall di komputer kita, kita bisa gunakan perintah :

```sh
npm --version
```

```
8.15.1
```

## Membuat Project

- Buat folder project
- Masuk ke folder project melalui terminal/command line.
- Buat project NPM baru dengan perintah :

```sh
npm init
```

## Project Configuration

- Inti dari konfigurasi project NodeJS adalah package.json.
- File package.json merupakan konfigurasi yang berupa format.json untuk project NodeJS yang kita buat.

| Attrubute   | Description            |
| ----------- | ---------------------- |
| name        | Nama Project / package |
| version     | Versi project          |
| Description | Deskripsi project      |
| homepage    | Home page project      |
| author      | Author project         |

### Kode : package.json

```json
{
	"name": "belajar-nodejs-npm",
	"version": "1.0.0",
	"description": "Belajar NodeJS NPM",
	"homepage": "https://yusrilarzaqi.github.io/Portfolio/",
	"keyword": ["Yusril Arzaqi", "Portfolio"],
	"repository": {
		"type": "git",
		"url": "https://github.com/yusrilarzaqi/Portfolio/"
	},
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"author": "Yusril Arzaqi",
	"license": "ISC"
}
```

### Menjalankan Project

- Untuk menjalankan project, sebenarnya kita lakukan buat sama seperti ketika kita menjalankan script NodeJS.
- Kita bisa gunakan perintah :

```sh
node filescript
```

- Yang membedakan adalah, NodeJS sebelum menjalankan file nya, dia akan membaca konfigurasi dari package.json terlebih dahulu.

### Kode : Hello world

```javascript
console.info('hello world');
```

```sh
node index.js
```

## Project Type

- Secara default, saat kita membuat project NodeJS, NodeJS menggunakan commonjs.
- Oleh karena itu, ketika kita ingin menggunakan JavaScript Modules, kita harus mengubah file nya menjadi file mjs.
- Namun, kita juga bisa mengubah default project type dari commonjs menjadi js modules, dengan cara mengubah type di package.json.
- Sangat direkomendasikan sekarang menggunakan js modules dibanding commonjs, karena js modules sudah menjadi standard di JavaScript.

```json
{
	"name": "belajar-nodejs-npm",
	"version": "1.0.0",
	"description": "Belajar NodeJS NPM",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"type": "module",
	"author": "Yusril Arzaqi",
	"license": "ISC"
}
```

### kode : wirte.js

```javascript
import fs from 'fs';

export const writeToFile = (file, content) => {
	fs.writeFileSync(file, content);
};
```

### Kode : index.js

```javascript
import { writeToFile } from './write';

writeToFile(
	'hello.txt',
	'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
);
```

## Script

- NPM memiliki fitur yang bernama script, dimana kita bisa menyediakan perintah script yang nanti bisa digunakan untuk menjalankan perintah lainnya.
- Penggunaan script ini biasanya perintah lainnya penggunaan script ini biasanya digunakan untuk mempermudah ketika kita menjalankan perintah yang panjang.
- Untuk menambahkan script, kita bisa tambahkan script nya di package.json.

### Menjalankan Script

- Untuk menjalankan script, kita bisa gunakan NPM dengan perintah :

```sh
npm run-script namaScript
```

### Special Script

- Script di package.json terdapat beberpa yang spesial atau khusus.
- Script tersebut tidak perlu dijalankan menggunakan `npm run-script namaScript`, tapi bisa langsung dijalankan menggunakan perintah :

```sh
npm namaScript
```

- Contoh special script yaitu: `start`, `stop`, `test`, `restart`, `uninstall`, `version`, dan lain-lain.
- Selain itu, terdapat script special untuk script diatas, kita bisa gunakan gunakan prefix pre sebagai script yang akan dijalankan sebelumnya, dan prefix post sebagai script yang dijalankan setelahnya.
- Misal ketika kita gunakan perintah `npm start`, maka akan menjalankan script prestart, `start` dan `poststart`.

### Kode : Start Script

```json
{
	"script": {
		"run": "node index.js",
		"prestart": "echo 'Before Application Start'",
		"start": "node index.js",
		"poststart": "echo 'After Application Start'",
		"test": "echo \"Error: no test specified\" && exit 1"
	}
}
```

## Export Module

- Problem ketika kita menggunakan attribute main adalah, kita cuma bisa mengekspos satu file JS, oleh karena itu penggunaan attribute main sebenarnya sudah tidak direkomendasikan lagi.
- Sebagai penggantinya, terdapat attribute `export` yang bisa digunakan sebagai konfigurasi untuk mengekspos file JS.
- Yang menarik dari fitur export ini, kita bisa membuat alias ketika mengekspos file JS, sehingga tidak perlu menggunakan file JS aslinya.

### Main

- Sampai saat ini, kita tidak pernah membahas tentang attribute main di package.json.
- Attribute main adalah entry porint yang akan di-load ketika kita me-load NodeJS Project/Package.
- Pada kasus ketika kita membuat aplikasi, mungkin tidak terlalu berguna, tapi pada kasus ketika kita membuat library yang akan digunakan di banyak project, baru attribute main ini akan terlihat kegunaannya.

### Kode : Exports

```json
{
	"exports": {
		".": "./index.js",
		"./write": "./write.js"
	}
}
```

### Menggunakan Module

- Untuk menggunakan module yang sudah di export, kita cukup gunakan `import` dari nama module yang di `export` tersebut, namun ganti danta `.` (titik) dengan nama package yang ada di package.json.
- Misal :
  - `"."` menjadi `"belajar-nodejs-npm"`.
  - `"./write"` menjadi `"belajar-nodejs-npm/write"`.

### Kode : Menggunakan Module

```javascript
import { writeToFile } from 'belajar-nodejs-npm/write';

writeToFile(
	'hello.log',
	'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
);
```

## Dependency Management

- Salah satu fitur yang sangat berguna dalam NPM adalah dependency management.
- Saat kita membuat aplikasi, sering sekali kita akan membuatuhkan dependency ke library atau package pihak lain, misal package open source, atau pacage yang kita buat sendiri.
- NPM mendukung dependency management, sehingga kita tidak perlu download package yang kita butuhkan secara manual, termasuk tidak perlu melakukan update dependency secara manual ketika ada update terbaru.

### npmjs.com

- Secara default, NPM akan download dependency dari website [npmjs](https://www.npmjs.com) 
- Kita bisa mencari open source package atau membuat open source package disana jika kita mau.
- Untuk menginstall dependency, kita bisa gunakan perintah :

```sh
npm install namadependency@version
```

- Atau bisa langsung tulis di dependency di package.json.

### Kode : Menambah Dependency

```json
{
  "dependencies" : {
    "lodash" : "4.17.21"
  }
}
```

### Download Dependency

- Untuk download dependency, kita bisa gunakan perintah :

```sh
npm install
```

- Secara otomatis NPM akan download package yang ada di dependency ke dalam folder `node_modules`.
- Selain itu, NPM juga akan membuat file `package-lock.json` yang berisikan informasi versi package yang di download, ini untuk mempermudah ketika kita melakukan download ulang library di komputer lain.

### Kode : Menggunakan Dependency

```javascript
import _ from 'lodash';

const source = "YUSRIL ARZAQI";
const target = _.capitalize(source);

console.info(target);
```

```javascript
import _ from "lodash";

const data = [...Array(101).keys()].slice(1);

const result = _.chunk(data, 10);

console.info(result);
```

