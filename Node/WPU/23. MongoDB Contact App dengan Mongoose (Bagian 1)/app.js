const express = require('express');
const expressLayout = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
const { body, validationResult, check } = require('express-validator');
const { Contact, Mahasiswa } = require('./model');
require('./utils/db');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('trust-proxy', 1); // trust first proxy

// middleware
app.use(expressLayout);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(
	session({
		cookie: { maxAge: 6000, secure: true },
		secret: 'ypOwphJKMtleGIvEIGIi',
		resave: true,
		saveUninitialized: true,
	})
);

// Halaman Home
app.get('/', async (_, res) => {
	const mahasiswa = await Mahasiswa.find();

	res.render('index', {
		layout: 'layouts/main-layout',
		nama: 'Yusril Arzaqi',
		mahasiswa,
		title: 'NodeJS Web Server',
	});
});

// Halaman About
app.get('/about', (_, res) => {
	res.render('about', {
		layout: 'layouts/main-layout',
		title: 'Halaman About',
	});
});

// Halaman Contact
app.get('/contact', async (_, res) => {
	const contacts = await Contact.find();

	res.render('contact', {
		layout: 'layouts/main-layout',
		title: 'Halaman Contact',
		contacts,
	});
});

// Halaman Add
app.get('/contact/add', (_, res) => {
	res.render('add-contact', {
		layout: 'layouts/main-layout',
		title: 'From Tambah Data Contact',
	});
});
app.post(
	'/contact',
	[
		body('nama').custom(async (value) => {
			const duplikat = await Contact.find({ nama: value });
			if (duplikat) {
				throw new Error(`Nama ${value} sudah ada, cari yang lain !`);
			}
			return true;
		}),
		check('email', 'Email Tidak Valid').isEmail(),
		check('nohp', 'No Hp Tidak Valid').isMobilePhone('id-ID'),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.render('add-contact', {
				title: 'From Tambah Data Contact',
				layout: 'layouts/main-layout',
				errors: errors.array(),
			});
		} else {
			await new Contact(req.body).save();

			req.flash('msg', 'Data contact berhasil ditambahkan');
			res.redirect('/contact');
		}
	}
);

// Halaman Detail
app.get('/contact/:nama', async (req, res) => {
	const contact = await Contact.findOne({ nama: req.params.nama });
	res.render('detail', {
		layout: 'layouts/main-layout',
		title: 'Halaman Detail Contact',
		contact,
	});
});

// 404 error
app.use((_, res) => {
	res.status(404);
	res.send('<h1>Not Found 404</h1>');
});

app.listen(port, () => {
	console.log(`Monggo Contact listen to http://127.0.0.1:${port}`);
});
