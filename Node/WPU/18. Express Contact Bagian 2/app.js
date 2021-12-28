const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const {loadContact, findContact, addContact, cekDuplikat} = require('./utils/contacts');
const { body, validationResult, check } = require('express-validator');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash');

const port = 8080;
const app = express();


// gunakan ejs
app.set('view engine', 'ejs');

// third-party middleware
app.use(expressLayouts);

// built-in middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Konfigurasi
app.use(cookieParser('secret'));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true 
  })
);
app.use(flash);

app.get('/', (req, res) => {
  const mahasiswa = [{
    nama : "Yusril Arzaqi",
    email : "arzaqiyusril@gmail.com"
  },
  {
    nama : "Bimo Alam",
    email : "Bimoal@gmail.com"
  },
  {
    nama : "Dimas Rafif",
    email : "DimsRaf@gmail.com"
  }];
  res.render('index', { 
    layout: 'layouts/main-layout',
    nama: 'Yusril Arzaqi',
    title : "NodeJS Web Server",
    mahasiswa,
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title : 'Halaman About',
  });
});


app.get('/contact', (req, res) => {
  const contacts = loadContact();
  res.render('contact', {
    layout: 'layouts/main-layout',
    title : 'Halaman Contact',
    contacts,
    msg: req.flash('msg'),
  });
});

app.get('/contact/add', (req, res) => {
  res.render('add-contact', {
    layout: 'layouts/main-layout',
    title : 'From Tambah Data Contact',
  });
});

app.post('/contact',[
  body('nama').custom(value => {
    const duplikat = cekDuplikat(value);
    if (duplikat){
      throw new Error(`Nama ${value} sudah ada, cari yang lain!`);
    }
    return true;
  }),
  check('email', 'Email Tidak Valid').isEmail(),
  check('noHp', 'No Hp Tidak Valid').isMobilePhone('id-ID')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render('add-contact',{
      title : 'From Tambah Data Contact',
      layout: 'layouts/main-layout',
      errors: errors.array()
    });
  } else {
    addContact(req.body);
    
    //kirimkan flash
    req.flash('msg', 'Data contact berhasil ditambahkan');
    res.redirect('/contact');
  }
  
});

app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama);
  
  res.render('detail', {
    layout: 'layouts/main-layout',
    title : 'Halaman Detail Contact',
    contact,
  });
});


app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

