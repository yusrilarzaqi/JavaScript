# Express JS

## Sebelum Belajar

- Sudah mengikuti Kelas JavaScript Programmer Zaman Now.
- NodeJS Dasar, Unit Test dan Logging.
- Belajar HTTP

## Agenda

- Pengenalan Express JS
- App
- Route
- Template
- Dan lain-lain

## Pengenalan ExpressJS

- ExpressJS adalah salah satu Web Framework Open Source paling populer di NodeJS.
- ExpressJS pertama kali dibuat tahun 2010, dan karena sangat populer, ExpressJS sekarang sudah menjadi hal yang wajib dikuasai ketika akan membuat Web menggunakan NodeJS.
- [ExpressJS](https://expressjs.com/)
- [NPM ExpressJS](https://www.npmjs.com/package/express)
- [Github express](https://github.com/expressjs/express)

### Minimalist

- ExpressJS sangat minimalist, tidak memiliki banyak fitur seperti Web Framework di bahasa pemrograman lain seperti Laravel, Ruby on Rails, atau Django.
- Karena sangan minimalist, biasanya ExpressJS akan diintegrasikan dengan banyak library NodeJS lainnya.
- Oleh karena itu, programmer bisa bebas memilih Library NodeJS yang ingin diia integrasikan dengan ExpressJS.

## Membuat Project

- [belajar nodejs logging](https://github.com/ProgrammerZamanNow/belajar-nodejs-logging)

## Application

- Saat kita membuat web menggunakan ExpressJS, kita akan membuat object Application.
- Application adalah object utama dalam library ExpressJS.
- [ExpressJS API](https://expressjs.com/en/4x/api.html#app)

### Kode : Membuat Application

```javascript
import express from 'express';

const app = express();
```

### Menjalankan Application

- Application secara default tidak berjalan, jika kita ingin menjalankan Application nya, kita perlu menggunakan method listen(post).
- Dimana port adalah nomor port yang ingin kita gunakan untuk menjalankan webnya.
- Pastikan port yang kita pilih tidak bentrok dengan aplikasi lain.
- [Application Listen](https://expressjs.cm/en/4x/api.html#app.listen)

### kode : Menjalankan Application

```javascript
import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Server listen to port ${PORT}`));
```

## Basic Routing

### Routing

- Saat kita membuat web, biasanya kita akan membuat banyak sekali URL Path.
- Routing merupakan teknik yang digunakan untuk meneruskan request dari URL Path ke callback yang kita tuju.
- Routing di ExpressJS bisa menggunakan object Application, dan menggunakan method sesuai dengan nama HTTP Methodnya.

### Routing Method

| syntax                        | description         |
| ----------------------------- | ------------------- |
| `app.connect(path, callback)` | HTTP Method CONNECT |
| `app.get(path, callback)`     | HTTP Method GET     |
| `app.post(path, callback)`    | HTTP Method POST    |
| `app.put(path, callback)`     | HTTP Method PUT     |
| `app.delete(path, callback)`  | HTTP Method DELETE  |
| `app.options(path, callback)` | HTTP Method OPTIONS |
| `app.trace(path, callback)`   | HTTP Method TRACE   |
| `app.head(path, callback)`    | HTTP Method HEAD    |
| `app.patch(path, callback)`   | HTTP Method PATCH   |
| `app.all(path, callback)`     | Semua HTTP Method   |

### Kode : Routing

```javascript
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(PORT, () => console.log(`Server listen to port ${PORT}`));
```

## Unit Test

### Bagaimana Melakukan Unit Test ExpressJS ?

- Salah satu yang sulit ketika membuat aplikasi web yang harus berjalan yang melakukan automination test.
- Jika melakukan manual test, terlihat mudah tinggal kita buka melalui web browser.
- Namun dalam perkerjaan sehari-hari, lambat laun, hal ini akan menyulitkan kita ketika harus melakukan manual test jika terdapat perubahan aplikasi kita.
- Oleh karena itu, sangat direkomendasikan menggunakan unit test, walaupun aplikasinya dalam bentuk web.

### Super Test

- Supertest adalah salah satu library yang bisa digunakan untuk membantu melakukan pengetesan web ExpressJS.
- Dengan Supertest, kita bisa lebih mudah membuat unit testnya, dibanding melakukan secara manual.
- [Super Test](https://www.npmjs.com/package/supertest)

### Kode : Menginstall Dependency

```json
{
  "devDependencies" : {
    "@babel/plugin-transorm-runtime": "^7.17.12",
    "@babel/preset-env" : "^7.17.12",
    "babel-jest": "^28.1.0",
    "jest": "^28.1.0",,
    "supertest": "^6.2.3"
  }
}
```

### Kode : Unit Test

_hello.test.js_

```javascript
import express from 'express';
import request from 'supertest';

const app = express();
app.get('/', (req, res) => {
	res.send('Hello World!');
});

test('Hello World', async () => {
	const response = await request(app).get('/');
	exprect(response.txt).toBe('Hello World!');
});
```

## Request

- Saat kita membuat callback di router, parameter adalah object `Request`, yang secara otomatis diisi oleh ExpressJS.
- Object `Request` akan berisikan informasi tentang HTTP Request yang masuk ke callback tesebut.
- Ada banyak sekali informasi HTTP Request yang bisa kita ambil dari object Request, seperti Query Param, Header, Body dan lain-lain.
- [Request](https://expressjs.com/en/4x/api.html#req)

### Kode : Request

```javascript
test('Request', async () => {
	const app = express();
	app.get('/', (req, res) => {
		res.send(`Hello ${req.query.name}`);
	});

	const response = await request(app).get('/').query({ name: 'World' });
	expect(response.text).toBe('Hello World');
});
```

### Request URL

- Untuk mendapatkan URL saat ini, kita bisa menggunakan object `Request` untuk mendapatkan informasinya.
- `req.originalUrl`, untuk mendapatkan url secara full berserta query param nya.
- `req.hostname`, untuk mendapatkan nama host atau domain dari web kita.
- `req.protocol`, untuk mendapatkan protocol dari url web.
- `req.source`, untuk mengecek apakah url web nya https atau bukan.
- `req.subdomains`, untuk mendapatkan array subdomain dari url web kita.

### Kode : Request URL

```javascript
import express from 'express';
import request from 'supertest';

test('Request URL', async () => {
	const app = express();
	app.get('/hello/world', (req, res) => {
		res.json({
			path: req.path,
			originalUrl: req.originalUrl,
			hostname: req.hostname,
			protocol: req.protocol,
		});
	});

	const response = await request(app)
		.get('/hello/world')
		.query({ name: 'World' });
	expect(response.body).toEqual({
		path: '/hello/world',
		originalUrl: '/hello/world?name=World',
		hostname: '127.0.0.1',
		protocol: 'http',
	});
});
```

### Request Query Param

- Request juga bisa digunakan untuk mengambil data query parameter.
- Secara otomatis, semua query parameter akan disumpan dalam bentuk object di `req.query`.
- [Request Query Param](https://expressjs.com/en/4x/api.html#req.query)

### Kode : Req Query Param

```javascript
import express from 'express';
import request from 'supertest';

test('Request Query Param', async () => {
	const app = express();
	app.get('/', (req, res) => {
		res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
	});
	const response = await request(app).get('/').query({
		firstName: 'Yusril',
		lastName: 'Arzaqi',
	});
	expect(response.text).toBe('Hello Yusril Arzaqi');
});
```

### Request Header

- Object Request juga bisa kita gunakan untuk mendapatkan informasi dari HTTP Header dari Request.
- Kita bisa menggunakan `req.get(name)` atau `req.header(name)` untuk mendapatkan header berdasarkan name, khusus untuk HTTP Header, name nya adalah case insensitive.
- [Request Header](https://expressjs.com/en/4x/api.html#req.get)

### Kode : Req Header

```javascript
import express from 'express';
import request from 'supertest';

test('Request Header', async () => {
	const app = express();
	app.get('/', (req, res) => {
		const type = req.get('Accept');
		res.send(`Hello ${type}`);
	});

	const response = await request(app).get('/').set('Accept', 'text/plain');
	console.log(response.text);
	expect(response.text).toBe('Hello text/plain');
});
```

## Response

- Pada Callback Routing ExpressJS, terdapat parameter kedua yaitu response.
- Response merupakan object representasi dari HTTP Response.
- Kita bisa mengubah data HTTP Response melalui object `Response` tesebut.
- [Response](https://expressjs.com/en/4x/api.html#res)

### Kode : Response

```javascript
test('Response', async () => {
	const app = express();
	app.get('/', (req, res) => {
		res.send(`Hello Response`);
	});

	const response = await request(app).get('/');
	expect(response.text).toBe('Hello Response');
});
```

### Response Status

- Saat kita ingin mengubah HTTP Status dari HTTP Response yang kita buat, kita bisa menggunakan method `res.status(code)`.
- [Response Status](https://expressjs.com/en/4x/api.html#res.status)

### Kode : Response Status

```javascript
import express from 'express';
import request from 'supertest';

test('Response Status', async () => {
	const app = express();
	app.get('/', ({ query: { name } }, res) => {
		if (name) {
			res.status(200).send(`Hello ${name}`);
		} else {
			res.status(400).end();
		}
	});

	let response = await request(app).get('/').query({ name: 'Yusril' });
	expect(response.status).toBe(200);
	expect(response.text).toBe('Hello Yusril');
```

### Response Header

- Kita juga bisa mengubah HTTP Response Header dengan menggunakan method `res.set(name, value)` atau `res.header(name, value)`.
- Atau jika ingin langsung beberapa name, kita bisa memasukkan dalam bentuk object ke dalam parameter name nya.
- [Response Header](https://expressjs.com/en/4x/api.html#res.set)

### Kode : Response Header

```javascript
import express from 'express';
import request from 'supertest';

test('Response Header', async () => {
	const app = express();
	app.get('/', (req, res) => {
		res.set({
			'X-Powered-By': 'Yusril Channel',
			'X-Author': 'Yusril Arzaqi',
		});

		res.send('Hello World').end();
	});

	const response = await request(app).get('/');
	expect(response.text).toBe('Hello World');
	expect(response.get('X-Powered-By')).toBe('Yusril Channel');
	expect(response.get('X-Author')).toBe('Yusril Arzaqi');
});
```

### Response Body

- Untuk mengubah Response Body, kita bisa menggunakan mothod `res.sen()`.
- Dimana parameter body kia kita bisa dalaam bentuk buffer atau string, baik itu teks, json dan lain-lain.
- [Response Body](https://expressjs.com/en/4x/api.html#res.set)

### Kode : Response Body

```javascript
import express from 'express';
import request from 'supertest';

test('Response Body', async () => {
	const app = express();
	app.get('/', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.send('<html><head><title>Hello World</title></head></html>');
	});

	const response = await request(app).get('/');
	console.log(response.headers);
	expect(response.get('Content-Type')).toContain('text/html');
	expect(response.text).toBe(
		'<html><head><title>Hello World</title></head></html>'
	);
});
```

###
