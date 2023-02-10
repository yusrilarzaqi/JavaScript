const express = require('express');
const expressLayout = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
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
app.use(methodOverride('_method'));
app.use(cookieParser('ypOwphJKMtleGIvEIGIi'));
app.use(flash());
app.use(
	session({
		cookie: { maxAge: 6000 },
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
app.get('/contact', async (req, res) => {
	const contacts = await Contact.find();

	res.render('contact', {
		layout: 'layouts/main-layout',
		title: 'Halaman Contact',
		contacts,
		message: req.flash('msg'),
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
			const duplikat = await Contact.findOne({ nama: value });
			if (duplikat) {
				throw new Error(`Nama ${value} sudah ada, cari yang lain !`);
			}
			return true;
		}),
		check('email', 'Email Tidak Valid').isEmail(),
		check('nohp', 'No Hp Tidak Valid').isMobilePhone('id-ID'),
	],
	(req, res) => {
		const errors = validationResult(req);
		console.log('iki /conctact app.post');
		if (!errors.isEmpty()) {
			res.status(400);
			res.render('add-contact', {
				title: 'From Tambah Data Contact',
				layout: 'layouts/main-layout',
				errors: errors.array(),
			});
		} else {
			Contact.insertMany(req.body, () => {
				req.flash('msg', 'Data contact berhasil ditambahkan');
				res.redirect('/contact');
			});
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
// delete
app.delete('/contact', async (req, res) => {
	const result = await Contact.deleteOne({ nama: req.body.nama });
	if (result.deletedCount > 0) {
		console.log(result);
		req.flash(
			'msg',
			`Data Contact Berhasil dihapus dengan nama ${req.body.nama}`
		);
		return res.redirect('/contact');
	}

	console.log(result);
	return res.send(result);
});

app.get('/contact/edit/:nama', async (req, res) => {
	const contact = await Contact.findOne({ nama: req.params.nama });
	res.render('edit-contact', {
		layout: 'layouts/main-layout',
		title: 'From Ubah Data Contact',
		contact,
	});
});
app.put(
	'/contact',
	body('nama').custom(async (value, { req }) => {
		const duplikat = await Contact.findOne({ nama: value });
		if (value !== req.body.oldName && duplikat)
			throw new Error(`Nama contact sudah digunakan`);

		return true;
	}),
	check('email', 'Email tidak valid').isEmail(),
	check('nohp', 'No hp tidak valid').isMobilePhone('id-ID'),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.render('edit-contact', {
				title: 'From Ubah Data Contact',
				layout: 'layouts/main-layout',
				errors: errors.array(),
				contact: req.body,
			});
		const result = await Contact.updateOne(
			{
				_id: req.body._id,
			},
			{
				$set: {
					nama: req.body.nama,
					email: req.body.email,
					nohp: req.body.nohp,
				},
			}
		);
		if (result.modifiedCount > 1) {
			req.flash('msg', `Data ${req.body.nama} Berhasil diubah `);
			return res.redirect('/contact');
		}
	}
);

// 404 error
app.use((_, res) => {
	res.status(404);
	res.send('<h1>Not Found 404</h1>');
});

app.listen(port, () => {
	console.log(`Monggo Contact listen to http://127.0.0.1:${port}`);
});
