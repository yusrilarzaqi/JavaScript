// Menabil argumen dari command line 

const contacts = require('./contacts');
const yargs = require("yargs");

yargs.command({
  command: 'add',
  describe: "Menambahkan Contact baru",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: 'string',
    },
    email: {
      describe: "Email",
      demandOption: false,
      type: "string",
    },
    noHP: {
      describe: "Nomor handphone",
      demandOption: true,
      type: "string",
    }
  },
  handler(argv) {
    contacts.simpanContact(argv.nama, argv.email, argv.noHP);
  }
});


yargs.parse();












