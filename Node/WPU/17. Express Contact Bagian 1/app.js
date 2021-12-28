const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const {loadContact, findContact} = require('./utils/contacts');
const port = 8080;
const app = express();
// const router = express.Router();


// gunakan ejs
app.set('view engine', 'ejs');

// third-party middleware
app.use(expressLayouts);
app.use(morgan('dev'));

// built-in middleware
app.use(express.static('public'));

// Application Middleware
app.use((req, res, next) => {
  console.log(`Time : ${Date.now()}`);
  next();
});

// Rouer-level
// router.use((req, res, next) => {
//   console.log(`Time : ${Date.now()}`);
//   next();
// })

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
  });
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













