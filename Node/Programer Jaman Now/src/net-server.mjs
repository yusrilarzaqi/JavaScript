import net from 'net';

const server = net.createServer((client) => {
  console.info("Client Connected");
  client.on("data", data => {
    console.info(`Recive data from client : ${data.toString()}`);
    client.write(`Hello ${data.toString()}\n`);
  })
});
server.listen(8080, 'localhost')



