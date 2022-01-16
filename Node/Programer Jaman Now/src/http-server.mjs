import http from 'http';

const port = 8080;

const server = http.createServer((req, res) => {

  console.info(req.method);
  console.info(req.url);
  console.table(req.headers);

  if (req.url == '/home') {
    res.write('Ini Halaman Home ');
  } else {
    res.write('ini halaman Index')
  }

  res.end();
});

server.listen(port, () => {
  console.info(`listen to port ${port}`);
});

