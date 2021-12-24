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
}).demandCommand();

// Meampilkan daftar semua nama contacts
yargs.command({
  command: "show",
  describe: "Menampilkan semua nama & No HP contacts",
  handler() {
    contacts.listContact();
  }
});

// Menampilkan detail sebuah kontak
yargs.command({
  command: "detail",
  describe: "Menampilkan detail contacts berdasarkan nama",
  builder: {
      nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  }
});

// Menghapus contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghapus contacts berdasarkan nama",
  builder: {
      nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.nama);
  }
});




yargs.parse();












