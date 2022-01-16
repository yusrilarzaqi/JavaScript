import http from 'http';

const port = 8080;
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    request.addListener("data", data => {
      res.setHeader("Content", "application/json");
      res.write(data);
      res.end();
    })
  } else {
    if (req.url === "/home") {
      res.write("Halaman Home");
    } else {
      res.write("Hello HTTP Server");
    }
    res.end();
  }
})

server.listen(port, () => {
  console.info(`Listen to port ${port}`);
})

