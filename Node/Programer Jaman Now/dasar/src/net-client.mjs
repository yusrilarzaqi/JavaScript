import {link} from 'fs';
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





