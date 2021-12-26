const port = 8080;
const express = require('express');
const app = express();


app.get('/', (req, res) => {
  // res.send("Hello World");
  // res.json({
  //   nama : 'Yusril',
  //   email : 'arzaqiyusril@gmail.com',
  //   noHp : '088816981'
  // });
  res.sendFile('./index.html', {root : __dirname});
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', {root : __dirname});
});

app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', {root : __dirname});
});

app.get('/product/:id/', (req, res) => {
  res.send(`Product ID :  ${req.params.id}<br>Category ID : ${req.query.category}`);
});


app.use('/', (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})















// const {log} = require('console');
// const fs = require('fs');
// const http = require('http');
// const renderHTML = (path, res) => {
//   fs.readFile(path, 'utf-8', (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write('Error: File Not Found');
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// }


// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       'Content-Type': 'text/html'
//     });
    
//     const url = req.url;
//     log(url);
//     // if (url === '/about') {
//     //   renderHTML('./about.html', res);
//     // } else if(url === '/contact') {
//     //   renderHTML('./contact.html', res);
//     // } else {
//     //   renderHTML('./index.html', res);
//     // }

//     switch (url) {
//       case '/about':
//         renderHTML('./about.html', res);
//         break;
//       case '/contact':
//         renderHTML('./contact.html', res);
//         break;
//       default:
//         renderHTML('./index.html', res);
//         break;
//     }

//   })
//   .listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
//   });
