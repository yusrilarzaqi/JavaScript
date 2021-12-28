const {tulisPertanyaan, simpanContact} = require('./contacts');

const main = async () => {
  const nama = await tulisPertanyaan("Masukan Nama Anda : ");
  const email = await tulisPertanyaan("Masukan Email Anda : ");
  const noHp = await tulisPertanyaan("Masukan NoHp Anda : ");
  simpanContact(nama, email, noHp);
};


main();



