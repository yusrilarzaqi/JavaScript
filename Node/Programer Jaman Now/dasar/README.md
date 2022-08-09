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
- NodeJS merupakan teknologi yang bisa digunakan untuk menjalankan kode JavaScript diluar Web Browser
- NodeJS dibuat dari V8 Engine, yaitu Engine untuk Google Chrome.
- NodeJS merupakan project yang Free dan OpenSource
- [NodeJS](https://nodejs.org)

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
- [Dokumentasi Threadpool](https://docs.libuv.org/en/v1.x/threadpool.html)

## Menginstall NodeJS Manual

- Download versi NodeJS LTS (Long Term Support)
- [Download NodeJS](https://nodejs.org/en/download/)

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
- [Web API](https://developer.mozilla.org/en-US/docs/Web/API)
- Kebanyakan fitur Web API hanya berjalan di Web Browser, sehingga tidak bisa jalan di NodeJS.
- NodeJS sendiri hanya menggunakan bahas pemrograman JavaScript nya, namun tidak mengadopsi fitur Web API nya, karena itu hanya berjalan di Web Browser.
- NodeJS sendiri memiliki standard library yang bisa kita gunakan untuk mempermudah pembuatan aplikasi.
- [Web API NodeJS](https://nodejs.org/dist/latest-v16.x/docs/api/)

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
- [Dokumentasi Standard Library OS](https://nodejs.org/dist/latest-v16.x/docs/api/os.html)

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
- [Dokumentasi Standard Library Path](https://nodejs.org/dist/latest-v16.x/docs/api/path.html)

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
- [Dokumentasi Standard Library Path](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html)

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
- [Dokumentasi Standard Library Path](https://nodejs.org/dist/latest-v16.x/docs/api/debugger.html)

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

### Kode: Debugger

```javascript
function sayHello(name) {
  debugger
  return `hello ${name}`
}

const firstName = "Yusril"

console.info(sayHello(firstName))
```

## DNS

- DNS merupakan standard library yang bisa digunakan untuk bekerja dengan DMS (domain name server)
- [Standard Library DNS](https://nodejs.org/dist/latest-v16.x/docs/api/dns.html)

### Kode: DNS

```javascript
import dns from 'dns'

function callback(err, ip) {
  console.info(ip)
}

dns.lookup("www.google.com", callback)
```

## Events

- Events adalah standard library di NodeJS yang bisa digunakan sebagai implementasi Event Listener.
- Di dalam Events, terdapat sebuah class bernama EventEmitter yang bisa digunakan untuk menampung data listener per jenis event.
- Lalu kita bisa melakukan emmit untuk mentrigger jenis event dan mengirim data ke event tersebut.
- [Standard Library Events](https://nodejs.org/dist/latest-v16.x/docs/api/events.html)

### Kode: Events

```javascript
import {EventEmitter} from 'events'

const emitter = new EventEmitter


emitter.addListener("hello", name => {
  console.info(`Hello ${name}`)
})

emitter.addListener("hello", name => {
  console.info(`Hello ${name}`)
})

emitter.emit("hello", "Yusril")
```

## Globals

- Di dalamam NodeJS, terdapat library berupa variable atau function yang secara global bisa diakses dimana saja, tanpa harus melakukan import.
- Kita bisa melihat detail apa saja fitur yang terdapat secara global di halaman dokumentasinya. 
- [Standard Library Globals](https://nodejs.org/dist/latest-v16.x/docs/api/globals.html)

## Kode: Globals

```javascript
setTimeout(() => {
  console.info("Hello World")
}, 3000)
```

## Process

- Process merupakan standard library yang digunakan untuk mendapatkan informasi process NodeJS yang sedang berjalan.
- Process juga merupakan instance dari EventEmitter, sehingga kita bisa menambahkan listener kedalam Process.
- [Standard Library Globals](https://nodejs.org/dist/latest-v16.x/docs/api/process.html)

### Kode: Process

```javascript
import process from "process"

process.addListener("exit", exitCode => {
  console.info(`NodeJS exit with code ${exitCode}`)
})

console.info(process.version)
console.table(process.argv)
console.table(process.report)
console.table(process.env)

process.exit(1)

console.info(
  "Not Printed because already exit"
)
```

## Readline

- Readline merupakan standard library yang digunakan untuk membaca input.
- Namun pada saat dibuat video ini, Readline hanya mendukung versi callback di versi NodeJS LTS 16
- Di NodeJS 17 sudah mendukung Process sehingga lebih mudah digunakan, namun itupun bash tahap experimental
- [Standard Library Readline](https://nodejs.org/dist/latest-v16.x/docs/api/readline.html)

### Kode: Readline

```javascript
import process from 'process'
import readline from 'readline'

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

input.question("Siapa Nama Anda ? ", nama => {
  console.info(`Hello ${nama}`)
  input.close()
})
```

## Report

- Report merupakan fitur yang terdapat di NodeJS untuk membuat laporan secara otomatis dalam file ketika sesuatu terjadi pada aplikasi NodeJS kita.
- [Standard Library Report](https://nodejs.org/dist/latest-v16.x/docs/api/report.html)

### Kode: Report

import process from 'process'

```javascript
process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = 'report.json';

function simpleError() {
  throw new Error("Ups");
}

simpleError()
```

## Buffer

- Buffer merupakan object yang berisikan urutan byte dengan panjang tetap.
- Buffer merupakan turunan dari tipe data Uint8Array
- [Standard Library Buffer](https://nodejs.org/dist/latest-v16.x/docs/api/buffer.html)

### Kode: Buffer

```javascript
const buffer = Buffer.from("Yusril");
console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString)
```

### Buffer Encoding

- Buffer juga bisa digunakan untuk melakukan encoding dari satu encoding ke encoding yang lain.
- Ada banyak encoding yang didukung oleh Buffer, misal utf-8, ascii, hex, base 64, base64url, dan lain-lain

### Kode: Buffer Encoding

```javascript
const buffer = Buffer.from('Yusril Arzaqi', 'utf8');

console.info(buffer.toString("base64"))
console.info(buffer.toString("hex"))

const buffer2 = Buffer.from()
```

## Stream

- Stream adalah standard library untuk kontrak aliran data di NodeJS.
- Ada banyak sekali Stream object di NodeJS
- Stream bisa jadi object yang bisa dibaca, atau bisa ditulis, dan Stream adalah turunan dari Eventemitter.
- [Standard Library Stream](https://nodejs.org/dist/latest-v16.x/docs/api/stream.html)

### Kode: Stream

```javascript
import fs, {read} from 'fs'

const filePath = './target.log'

const writer = fs.createWriteStream(filePath)
writer.write("Yusril\n")
writer.write("Arzaqi\n")
writer.close()


const reader = fs.createReadStream(filePath)
reader.on('data', (data) => {
  console.log(data.toString())
  reader.close()
})
```

## Timer

- Timer merupakan standard library untuk melakukan scheduling.
- Function di Timer terdapat di globals, sehingga kita bisa menggunakannnya tanpa melakukan import, namun semua function Timer menggunakan Callback.
- Jika kita ingin menggunakan Timer versi Promise, kita bisa meng-import dari module `timer/promise`
- [Standard Library Timer](https://nodejs.org/dist/latest-v16.x/docs/api/timers.html)

### Kode: Timer

```javascript
setInterval(() => {
  console.info(new Date());
}, 1000)
```

### Kode: Timer-promises

```javascript
import timers from 'timers/promises/'

for await (const startTime of timers.setInterval(1000, new Date())) {
  console.info(`Start Timer at ${startTime}`)
}
```

## NET

- Net merupakan standard library yang bisa digunakan untuk membuat network client dan server berbasis TCP.
- Net Server dan Client merupakan object Stream, sehingga kita bisa baca datanya, tulis datanya dan juga menambahkan listener.
- [Standard Library Net](https://nodejs.org/dist/latest-v16.x/docs/api/net.html)

### Kode: Net Server

```javascript
import net from 'net';

const server = net.createServer((client) => {
  console.info("Client Connected");
  client.on("data", data => {
    console.info(`Recive data from client : ${data.toString()}`);
    client.write(`Hello ${data.toString()}\n`);
  })
});
server.listen(8080, 'localhost')
```

### Kode: Net Client

```javascript
import net from 'net';

const connection = net.createConnection({
  port: 8080,
  host: '127.0.0.1'
});

connection.addListener("data", data => {
  console.info(`Recive data from server: ${data.toString('utf8')}`);
});

setInterval(() => {
  connection.write(`${process.argv[2]}`);
}, 2000);
```

## URL

- URL merupakan standard library untuk bekerja dengan URL
- [Standard Library URL](https://nodejs.org/dist/latest-v16.x/docs/api/url.html)

### Kode: URL

```javascript
import { URL } from 'url';

const link = new URL('https://www.programmerzamannow.com/belajar?kelas=nodejs');

console.info(link.toString());
console.info(link.protocol);
console.info(link.host);
console.info(link.pathname);
console.info(link.searchParams);
console.info(link.password);
console.info(link.href);
console.info(link.origin);
console.info(link.hash);

```

### Kode: Mengubah URL

```javascript
// Mengubah url
link.host = 'www.yusrilarzaqi.github.io';
link.searchParams.append('status', 'OK');
```

## Util

- Util adalah standard library yang berisikan utility-utility yang bisa kita gunakan untuk mempermudah pembuatan kode program di NodeJS.
- [Standard Library Util](https://nodejs.org/dist/latest-v16.x/docs/api/util.html)

### Kode: Util

```javascript
import util from 'util';

const nama = "Yusril";

console.info(`Nama : ${nama}`);
console.info(util.format("Nama : %s", nama));
const person = {
  firstName: "Yusril",
  lastName : "Arzaqi"
};
console.info(util.format("Person : %j", person));
console.info(JSON.stringify(person));
```

## Zlib

- Zlib merupakan standard library yang digunakan untuk melakukan kompresi menggunakan Gzip
- [Standard Library Zlib](https://nodejs.org/dist/latest-v16.x/docs/api/zlib.html)

### Kode: Zlib Compress

```javascript
import {readFileSync, writeFileSync} from 'fs';
import zlib from 'zlib';

const source = readFileSync('tmp.txt');
const result = zlib.gzipSync(source);

writeFileSync('data.bin', result);
```

### Kode: Zlib Decompress

```javascript
import fs from 'fs';
import zlib from 'zlib';


const source = fs.readFileSync('data.bin')
const result = zlib.gunzipSync(source)

fs.writeFileSync('data.txt', result);
```

## Console

- Console adalah standard library yang sering digunakan.
- Secara global, object console bisa kita gunakan tanpa harus meng-import module, dan console melakukan print text-nya ke stdout.
- Namun kita bisa juga membuat object Console sendiri jika kita mau.
- [Standard Library Console](https://nodejs.org/dist/latest-v16.x/docs/api/console.html)

### Kode: Console

```javascript
import {Console} from 'console';
import fs from 'fs';

const logFile = fs.createWriteStream('application.log')

const log = new Console({
  stdout: logFile,
  stderr: logFile
});

log.info("Hello World")
log.err("404")
```

## Worker Threads

- Worker Threads adalah standard library yang bisa kita gunakan untuk menggunakan thread ketika mengeksekusi JavaScript secara paralel
- Worker Threads sangat cocok ketika membuat kode program yang butuh jalan secara paralel, dan biasanya kasusnya adalah ketika kode program kita membutuhkan process yang CPU intensive, seperti misalnya *enkripsi* atau *kompresi*
- Cara kerja Worker Threads mirip dengan Web Worker di JavaScript Web API
- [Standard Library Worker Threads](https://nodejs.org/dist/latest-v16.x/docs/api/worker-threads.html)

### Kode: Main Thread

```javascript
import {threadId, Worker} from 'worker_threads':

const worker1 = new Worker("./worker.mjs");
const worker2 = new Worker("./worker.mjs");

worker1.addListener("message", message => {
  console.info(`thread-${threadId} rechive message : ${message}}}`);
})

worker2.addListener("message", message => {
  console.info(`thread-${threadId} rechive message : ${message}}}`);
})

worker1.postMessage(10);
worker2.postMessage(10);
```

### Kode: Worker

```javascript
import {threadId, parentPort} from 'worker_threads';

parentPort.addListener("message", message => {
  for (let i = 0; i < message; i++) {
    console.info(`thread-${threadId} send message ${i}`);
    parentPort.postMessage(i);
  }
  parentPort.close();
})
```

## HTTP Client

- NodeJS juga memiliki standard library untuk HTTP.
- Salah satu fitur di module HTTP adalah HTTP Client, dimana kita bisa melakukan simulasi HTTP Request menggunakan NodeJS.
- Terdapat 2 jenis module HTTP di NodeJS, HTTP, dan HTTPS
- [Standard Library HTTP](https://nodejs.org/dist/latest-v16.x/docs/api/http.html)
- [Standard Library HTTPS](https://nodejs.org/dist/latest-v16.x/docs/api/https.html)

### Kode: HTTPS Client

```javascript
import https from "https";

const url = 'https://hookb.in/1gmqywqrLLfd6N0061k8'
const request = https.request(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept"      : "application/json"
  }
}, response => {
  response.addListener("data", data => {
    console.info(`Recive : ${data.toString()}`);
  });
});

const body = JSON.stringify({
  firstName: "Yusril",
  lastName: "Arzaqi",
});

request.write(body);
request.end();

```

## HTTP Server

- Standard Library HTTP juga tidak bisa digunakan untuk membuat HTTP Client, tapi juga bisa digunakan untuk membuat HTTP Server.
- Untuk kasus sederhana, cocok sekali jika ingin membuat HTTP Server menggunakan standard library NodeJS, namun untuk kasus yang lebih kompleks, direkomendasikan menggunakan library atau framework yang lebih mudah penggunaannya. 
- [Standard Library HTTP](https://nodejs.org/dist/latest-v16.x/docs/api/http.html)

### Kode: HTTP Server

```javascript
import http from 'http';

const port = 8080;

const server = http.createServer((req, res) => {
  res.write("Hello World");
  res.end();
});

server.listen(port);
```

### Kode: Request Response HTTP Server

```javascript
import http from 'http';

const port = 8080;
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    request.addListener("data", data => {
      res.setHeader("Content", "application/json");
      res.write(data);
    })
  } else {
    res.write("Hello World");
  }
  res.end();
})

server.listen(port, () =>{
  console.info(`Listen to port ${port}`);
})
```

## Cluster

- Seperti yang dijelaskan di awal, bahwa NodeJS itu secara default dia berjalan single thread, kecuali jika kita membuat thread manual menggunakan worker thread, tetapi dalam satu process.
- NodeJS memiliki standard library bernama Cluster, dimana kita bisa menjalankan beberapa process NodeJS secara sekaligus.
- Ini sangat cocok ketika kita menggunakan CPU yang multicore, sehingga semua core bisa kita utilitasi denganbaik, misal kita jalankan process NodeJS sejumlah CPU core.
- [Standard Library Cluster](https://nodejs.org/dist/latest-v16.x/docs/api/cluster.html)

### Cluster Primary dan Worker

- Di dalam Cluster, terdapat 2 jenis aplikasi, Primary dan Worker.
- Primary biasanya digunakan sebagai kooridator atau manajer untuk para Worker.
- Sedangakan Worker sendiri adalah aplikasi yang menjalankan tugasnya.

### Kode: Cluster Primary

```javascript
import cluster from "cluster";
import http from "http";
import os from "os";
import process from "process";

if (cluster.isPrimary) {
  for (let i = 0; i < os.cpus.length; i++) {
    cluster.fork();
  }

  cluster.addListener("exit", worker => {
    console.info(`Worker ${worker.id} is exited`);
  });
}
```

### Kode: Cluster Worker

```javascript
if (cluster.isWorker){
  const port = 8080;
  const server = http.createServer((req, res) => {
    res.write(`Response from process ${process.pid}`);
    res.end();
    process.exit();
  })

  server.listen(port, () => console.info(`Listen to port ${port}`));
  console.info(`Start Cluster Worker ${process.pid}`)
}
```

## Materi Selanjutnya

- NPM (Node Package Manager)
- NodeJS Unit Test
- ExpressJS
- Dan lain-lain

