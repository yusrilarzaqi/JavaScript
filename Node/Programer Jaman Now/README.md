# Agenda

- Pengenalan NodeJS
- Pengenalan Concurrency
- NodeJS Arhiterture
- Menginstall NodeJS
- NodeJS  REPL
- Standard Library
- Dan lain-lain

## Pengenalan NodeJS

- NodeJS diperkenalkan pertama kali oleh Ryan Dahl pada tahun 2009
- NodeJS merupakan teknologi yang bisa digunakan untuk menjalankan kode Javascript diluar Web Browser
- NodeJS dibuat dari V8 Engine, yaitu Engine untuk Google Chrome.
- NodeJS merupakan project yang Free dan OpenSource
- ![NodeJS](https://nodejs.org)

## Kenapa Belajar NodeJS ?

- NodeJS mempopulerkan paradigma JavaScript Everywhere, dimana dengan menggunakan NodeJS, kita bisa membuat aplikasi berbasis server side denan bahas pemrograman JavaScript
- Hal ini membuat kita hanya butuh belajar bahasa pemrograman JavaScript untuk membuat aplikasi web misalnya, sehingga tidak butuh belajar bahasa pemrograman lain seperti PHP, Java maupun python untuk side web nya
- Saat ini NodeJS sangan populer dan banyak sekali digunakan di perusahaan teknologi, terutama untuk membantu pengembangan Web Frontend

## Yang Tidak Bisa Dilakukan di NodeJS

- Pada kelas JavaScript, kita sudah membahas banyak sekali fitur JavaScript yang berjalan di Browser.
- Karena NodeJS tidak berjalan di Browser, jadi tidak semua fitur JavaScript bisa dilakukan di NodeJS.
- Fitur seperti Document Object Model dan banyak Web API tidak bisa dilakukan di NodeJS, hal ini karena DOM dan beberapa Web API berjalan membutuhkan Browser.

## Text Editor

- NodeJS menggunakan bahasa pemrograman JavaScript, oleh karena itu kita bisa menggunakan Text Editor apapun untuk membuat aplikasi menggunakan NodeJS, misal:
- Visual Studio Code
- JetBrains WebStrom
- Sublime
- Atom
- NodePad++
- Dan lain-lain

## Web Application

- Web Application adalah aplikasi yang berjalan di Server dan ditampilkan di Browser Client.
- Saat kita membuat Web Application, biasanya akan dibagi menjadi 3 bagian, Client, Server, dan Database

## Diagram Web Application

![Diagram Web Application](img/Diagram-Web-Application.png)

## Client

- Client merupakan user interface atau bagian frontend dari frontend dari web application, yang digunakan oleh pengguna web application.
- Client digunakan untuk berinteraksi dengan Server, baik itu mengirim data atau menerima data.
- Frontend biasanya dibuat menggunakan HTML, CSS, dan JavaScript

## Server

- Server bertanggung jawab untuk request dari Client, mengerjakan request yang dikirim dan membalas request berupa response ke Client
- Server bertugas sebagai backend untuk web application, dimana semua logic aplikasi akan dilakukan di Server
- Bisanya Server dibuat menggunakan PHP, Python, Javam .NET dan banyak bahasa pemrograman lainnya.
- Dengan adanya NodeJS, sekarang kita bisa membuat Server menggunakan JavaScript.

## Database

- Database adalah tempat untuk menyimpan data web application
- Data disimpan dan diambil oleh Server
- Client tidak bisa langsung mengambil atau menyimpan data ke Database secara langsung, oleh karena itu perlu penengah untuk melakukan, yaitu Server
- Database biasanya menggunakan aplikasi sistem basis data sepertinya MySQL, PostgreSQL, MongoDB, dan lain-lain


## Concurrency dan Parallel

### Sejarah

- Dahulu, komputer hanya menjalankan sebuah program pada satu waktu
- Karena hanya bisa menjalankan satu program pada satu waktu, hal ini tidak efisien dan memakan waktu lama karena hanya bisa mengerjakan satu tugas pada satu waktu
- Semakin kesini, sistem operasi untuk komputer semakin berkembang sistem operasi bisa menjalankan program secara bersamaan dalam proses yang berbeda-beda, terisolasi dan saling independen antar program

### Thread

- Program biasanya berjalan dalam sebuah proses, dan proses akan memiliki resource yang independen dengan proses lain.
- Sekarang, sistem operasi tidak hanya bisa menjalankan multiple process, namun dalam process kita bisa menjalankan banyak pekerjaan sekaligus, atau bisa dibilang process ringan atau lebih dikenal dengan nama Thread.
- Thread membuat process aplikasi bisa berjalan tidak harus selalu sequential, kita bisa membuat process aplikasi berjalan menjadi asynchronous atau pararel.

### Concurrency vs Parallel

- Kadang banyak yang bingung dengan concurrency dan parallel, sebenarnya kita tidak perlu terlalu memusingkan hal ini.
- Karena saat ini pasti akan menggunakan keduanya ketika membuat aplikasi.
- Concurrency artinya mengerjakan beberapa pekerjaan satu persatu.
- Parallel artinya mengerjakan beberapa pekerjaan sekaligus pada satu waktu.

### Contoh Concurrency dan Parallel

- Browser adalah aplikasi yang concurrent dan parallel.
- Browser akan melakukan process concurrent ketika membuaka web, browser akan melakukan http request, lalu mendownload semua file web(html, css, js) lalu merender dalam bentuk tampilan web.
- Browser akan melakukan prcess parallel ketika kita membuka beberapa tab web, dan juga sambil mendownload beberapa file , dan nonton video dari web streaming.

### Synchronous vs Asynchronous

- Saat membuat aplikasi yang concurrent atau parallel, kadang kita sering menemui istilah synchronous dan asynchronous.
- Tidak perlu bingung dnegan istilah tersebut, secara sederhana:
- Synchronous adalah ketika kode program kita berjalan secara sequential dan semua tahapan ditunggu sampai processnya selesai baru akan dieksekusi ke tahapan selanjutnya.
- Asynchronous artinya kode program berjalan dan tidak perlu menuggu eksekusi kode tersebut selesai, kita bisa lanjutkan ke tahapan kode program selanjutnya.

## Threadpool Web Model

### Threadpool

- Pada meteri sebelumnya sudah dijelaskan bahwa thread adalah process ringan yang biasa dibuat saat membuat aplikasi.
- Walaupun bisa dibilang ringan, namun jika terlalu banyak membuat thread, maka tetap  kan memberatkan sistem operasi kita.
- Oleh karena itu, biasanya kita akan menggunakan threadpool untuk melakukan management thread
- Threadpool merupakan tempat dimana kita menyimpan thread, ketika kita butuh kita akan ambil dari threadpool, ketika sudah selesai, kita akan kembalikan thread nya ke threadpool.
- Dengan threadpool, kita bisa memanfaatkan threadpool yang sama berkali-kali, tanpa harus membuat thread baru terus menerus.

### Diagram Threadpool

![Diagram Threadpool](img/Diagram-Threadpool.png)

### Threadpool Queue

- Apa yang terjadi ketika semua thread sedang bekerja? Bagaimana jika kita ingin meminta thread ke threadpool untuk mengerjakan sesuatu?
- Jika semua thread penuh, kita tidak bisa meminta lagi thread ke threadpool. Kita harus menuggu sampai ada thread yang tidak sibuk.
- Dimana kita harus menunggu sampai ada thread tersedia untuk digunakan ?
- Biasanya threadpool memiliki tempat untuk menyimpan tugas yang belum dikerjakan oleh thread di tempat benama queue (antian ).
- Ketika kita mengirim perintah ke threadpool, perintah tersebut akan dikirim ke queue, lalu perintah-perintah itu akan dieksekusi satu per satu oleh thread yang tersedia di threadpool.

### Diagram Threadpool Queue

![Diagram Threadpool Queue](img/Diagram-Threadpool-Queue.png)

### Threadpool Web Model

- Dahulu pembuatan web application sangat populer menggunakan threadpool model.
- Setiap request yang masuk ke web server akan diproses oleh satu buah thread.
- Dengan demikian ketka anyak request masuk, semua bisa diproses secara paralel karena akan ditangani oleh thread masing-masing
- Namun threadpool model ini memiliki kekurangan, ketika thread sedang sibuk semua, secara otomatis request selanjutnya harus menunggu sampai ada thread yang selesai melakukan tugas sebelumnya.
- Contoh web server yang menggunakan threadpool model, seperti Apache HTTPD. Apache Tomcat, dan lain-lain.

## Blocking dan Non-Blocking

### Blocking

- Saat kita membuat kode program, secara default kode program akan berjalan secara blocking atau synchronous.
- Artinya kita harus menunggu sebuah kode selesai sebelum kode selanjutnya dieksekusi.
- Contoh ketika kita membuat kode program untuk membaca file, jika kode kita blocking, maka kita harus menunggu program selesai membaca file, baru kita bisa melanjutkan kode program selanjutnya

### Non-Blocking

- Non-Blocking berbeda dengan Blocking, kode program Non-Blocking akan dieksekusi tanpa harus menunggu kode program tersebut selesai.
- Non-Blocking akan dijalankan secara asynchronous.
- ketika memanggil kode Non-Blocking, biasanya kita perlu mengirimkan callback untuk dipanggil oleh kode Non-Blocking tersebut ketika kodenya sudah selesai.
- Contoh-contoh Non-Blocking sudah kita bahas di kelas JavaScript Async, seperti AJAX, Fetch API, dan lain-lain.
- Di NodeJS, hampir semua fitur mendukung kode Non-Blocking.

## NodeJS Architecture

![NodeJS Architecture](img/NodeJS-Architecture.png)

### Event-Loop

- Event-Loop merupakan single thread proses yang digunakan untuk mengeksekusi kode Non-Blocking.
- Karena Event-Loop hanya menggunakan single thread, maka kita harus berhati-hati ketika membuat blocking kode, karena bisa memperlambat proses eksekusi kode kita.
- Event-Loop sendiri sebenarnya tugasnya hanya menerima dan mengirim eksekusi kode ke C++ Threadpool, oleh karena itu selalu usahakan menggunakan kode Non-Blocking agar proses blocking-nya dikerjakan di C++ threadpool.
- Event-Loop akan menerima response dari C++ threadpool yang dikirim via callback.

### C++ Threadpool

- NodeJS Menggunakan C++ Threadpool untuk workernya, yaitu threadpool untuk melakukan pekerjaan.
- Libuv adalah library yang digunakan di NodeJS, dimana secara default libuv menggunakan 4 thread di dalam threadpool nya, hal ini menjadikan kita bisa melakukan 4 pekerjaan blocking sekaligus dalam satu waktu.
- Jika terlalu banyak pekerjaan blocking, kita bisa menghubah jumlah thread di libuv dengan perngaturan environment variable UV_THREADPOOL_SIZE
- ![Dokumentasi Threadpool](https://docs.libuv.org/en/v1.x/threadpool.html)

## Menginstall NodeJS Manual

- Download versi NodeJS LTS (Long Term Support)
- ![Download NodeJS](https://nodejs.org/en/download/)

### Setting PATH NodeJS

- Setelah menginstall NodeJS, disarankan melakukan setting PATH NodeJS pada sistem operasi kalian.
- Hal ini agar mudah ketika mengakses program NodeJS menggunakan terminal/command prompt

### Menjalankan Kode JavaScript

- Karena NodeJS tidak memerlukan Web Browser, jadi kita bisa langsung menjalankan program JavaScript kita menggunakan aplikasi NodeJS lewat terminal / command prompt, dengan perintah:
- node namaFile.js

## NodeJS REPL

### REPL (Read Eval Print Loop)

- REPL singkatan dari Read Eval Print Loop 
- Yaitu mekanisme dimana program bisa langsung kode program yang diketikan, lalu mengeksekusinya, menampilkan hasilnya, lalu mengulangi dari awal lagi.
- NodeJS mendukung REPL, sehingga lebih mudah ketika belajar.
- Namun tetap, saya menyarankan menyimpan kode program di file JavaScript, agar lebih mudah diubah ketika terjadi masalah
- Untuk menggunakan NodeJS REPL, cukup jalankan aplikasi node saja.

### Kode : REPL

```bash
node 
```

## NodeJS Standard Library

- Saat kita belajar JavaScript, di Web Browser, terdapat fitur-fitur yang bernama Web API.
- ![Web API](https://developer.mozilla.org/en-US/docs/Web/API)
- Kebanyakan fitur Web API hanya berjalan di Web Browser, sehingga tidak bisa jalan di NodeJS.
- NodeJS sendiri hanya menggunakan bahas pemrograman JavaScript nya, namun tidak mengadopsi fitur Web API nya, karena itu hanya berjalan di Web Browser.
- NodeJS sendiri memiliki standard library yang bisa kita gunakan untuk mempermudah pembuatan aplikasi.
- ![Web API NodeJS](https://nodejs.org/dist/latest-v16.x/docs/api/)

## Modules

- Standard Library yang terdapat di NodeJS bisa kita gunakan 
- Jika belum mengerti tentang JavaScript Modules, silahkan pelajari kelas saya tentang JavaScript Modules.
- Karena NodeJS menggunakan Modules, jika kita ingin menggunakan Modules, kita juga perlu memberi tahu bahwa file JavaScript kita menggunakan Modules, caranya dengan mengubah nama file dari .js menjadi .mjs

## Require Function

- Awalnya ketika NodeJS rilis, fitur JavaScript Modules belum rilis, namun sekarang JavaScript sudah banyak menggunakan JavaScript Moudles.
- NodeJS pun awalnya tidak menggunakan JavaScript modules, namun sekarang NodeJS sudah bisa menggunakan JavaScript Moudles, dan sangat direkomendasikan menggunakannya.
- Namun awal sebelum modules, NodeJS menggunakan function require() untuk melakukan import file
- Di materi ini saya sengaja bahas, agar tidak bungung ketika kita melihat tutorial yang masih menggunakan function require.

```javascript
const os = require("os")

console.info(os.platform())
console.table(os.cpus())
```

## Global Async di Module

- Saat kita belajar JavaScript, untuk menggunakan Async Await, biasanya kita perlu membuat terlebih dahulu function yang kita tandai sebagai async.
- Saat kita menggunakan Module, secara default, global code adalah Async, oleh karena itu kita bisa menggunakan Async Await.
- Kecuali jika kita membuat function, maka function tersebut harus kita tandai sebagai Async jika ingin menggunakan Async Await.

### Kode: JavaScript

```javascript
function samplePromise() {
  return Promise.resolve("Yusril")
}

const data = await samplePromise();
console.info(data);
```

## OS

- OS merupakan standard library yang bisa digunakan untuk mendapatkan informasi tentang sistem operasi yang digunakan.
- ![Dokumentasi Standard Library OS](https://nodejs.org/dist/latest-v16.x/docs/api/os.html)

### Kode: OS

```javascript
import os from "os"

console.info(os.platform())
console.info(os.arch())
console.table(os.cpus())
console.info(os.uptime())
console.info(os.totalmem())
console.info(os.freemem())
console.table(os.networkInterfaces())
```

## Path

- Path merupakan standard library yang bisa kita gunakan untuk bekerja dengan lokasi file dan directory / folder
- ![Dokumentasi Standard Library Path](https://nodejs.org/dist/latest-v16.x/docs/api/path.html)

### Kode: Path

```javascript
import path from 'path'

const file = '/home/yusril/Documents/JavaScript/Node/Programer Jaman Now/src/path.mjs'

console.info(path.sep)
console.info(path.dirname(file))
console.info(path.basename(file))
console.info(path.extname(file))
console.info(path.parse(file))
console.info(path.normalize(file))
```

## File System

- File System merupakan standard library yang bisa digunakan untuk memanipulasi file system
- Dalam File System terdapat 3 jenis library.
- Pertama library yang bersifat blocking atau synchronous.
- Kedua library yang bersifat non-blocking atau asynchronous menggunakan callback
- ketiga library yang bersifat non-blocking atau asynchronous tapi menggunakan promise
- ![Dokumentasi Standard Library Path](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html)

### Kode: File System

```javascript
import fs from 'fs'

const buffer = fs.readFileSync('file-system.mjs')

console.info(buffer.toString())

fs.writeFileSync('tmp.txt', 'Hello World')
```

## Debugger

- NodeJS memiliki fitur debugger, dimana kita bisa mengikuti tahapan eksekusi program NodeJS.
- Hal ini sangat cocok ketika melakukan proses debugging, mencari sebab masalah yang terjadi di aplikasi kita.
- ![Dokumentasi Standard Library Path](https://nodejs.org/dist/latest-v16.x/docs/api/debugger.html)

### Breakpoint

- Dalam debugging terdapat istilah breakpoint, yaitu lokasi dimana kita ingin menghentikan sementara eksekusi kode program.
- Biasanya ini dilakukan untuk mengawasi data-data disekitar lokasi berhentinya tersebut.
- Untuk menambahkan breakpoint, kita bisa menggunakan kata kunci: `debugger;`

### Menjalankan Model Debug

- Jika kita menjalankan file JavaScript hanya dengan menggunakan perintah node namafile.js, maka secara default dia tidak akan jalan dalam mode debug.
- Agar jalan dalam mode debug, kita harus menambahkan perintah **inspect**: `node inspect namaFile.js`

### Perintah Debug

Saat masuk ke mode debug, ada beberapa perintah yang bisa kita gunakan dalam melakukan debugging

- `cont, c`: Continue execution
- `next, n`: Step next
- `step, s`: Step in
- `out, o` : Step out
- `pause`  : Pause running code







































