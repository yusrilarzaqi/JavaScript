#!/snap/bin/node

// const fs = require('fs'); // Core Module
// const cetakNama = require('./coba'); // local module
// const moment = require('moment'); // third party module / npm module / node_modules

// const cetakNama = require('./coba');
// const PI = require('./coba');

const coba = require('./coba');

coba.cetakNama("Yusril");

console.log(coba.PI);

console.log(coba.mahasiswa.cetakMhs());

console.log(new coba.Orang);


