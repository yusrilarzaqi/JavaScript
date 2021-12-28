const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');

/* Membuat folder data */
const dirPath = 'data/';
if(!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
/* Membuat file contacts.json jika belum ada */
const dataPath = 'data/contacts.json';
if(!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const loadContact = () => {
  const file= fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(file);
  return contacts;
}

const simpanContact = (nama, email, noHp) =>  {
  const contact ={nama, email, noHp};
  const contacts = loadContact();
  // Cek duplikat
  const duplikat = contacts.find(contact => contact.nama === nama);
  if(duplikat) {
    console.log(
   chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama yang lain!")
  );
    return false;
  }

  // Cek Email
  if(email) {
    if(!validator.isEmail(email)){
      console.log(
        chalk.red.inverse.bold("Email Anda Tidak Valid!")
      );
      return false;
    }
  }

  // Cek No Hp
  if(!validator.isMobilePhone(noHp, 'id-ID')){
    console.log(
      chalk.red.inverse.bold("No Hp Tidak Valid!")
    );
    return false;
  }


  contacts.push(contact);

  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
  console.log(
    chalk.bgGreen.black.inverse('Ok!')
  );
}

module.exports = {simpanContact};

