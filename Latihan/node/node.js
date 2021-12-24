const {log} = require('console');
const net = require('net');
const connection = net.connect('Smacqueen');

connection.on('error', err => {
  log(err);
});

connection.pipe(process.stdout);
