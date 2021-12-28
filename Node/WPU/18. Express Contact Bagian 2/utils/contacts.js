const { constants } = require('buffer');
const fs = require('fs');
// const validator = require('validator');
// const chalk = require('chalk');

/* Membuat folder data */
const dirPath = 'data/';
if(!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
};

/* Membuat file contacts.json jika belum ada */
const dataPath = 'data/contacts.json';
if(!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
};

const loadContact = () => {
  const file= fs.readFileSync('data/contacts.json', 'utf-8');
  return JSON.parse(file);
};

const findContact = (nama) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
};

const saveContacts = contacts => {
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
};

const addContact = contact => {
  const contacts = loadContact();
  contacts.push(contact);
  saveContacts(contacts);
};

const cekDuplikat = nama => {
  const contacts = loadContact();
  return contacts.find(contact => contact.nama === nama);
}

module.exports = {loadContact, findContact, addContact, cekDuplikat};


// const simpanContact = (nama, email, noHp) =>  {
//   const contact ={nama, email, noHp};
//   const contacts = loadContact();
//   // Cek duplikat
//   const duplikat = contacts.find(contact => contact.nama === nama);
//   if(duplikat) {
//     console.log(
//    chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama yang lain!")
//   );
//     return false;
//   }

//   // Cek Email
//   if(email) {
//     if(!validator.isEmail(email)){
//       console.log(
//         chalk.red.inverse.bold("Email Anda Tidak Valid!")
//       );
//       return false;
//     }
//   }

//   // Cek No Hp
//   if(!validator.isMobilePhone(noHp, 'id-ID')){
//     console.log(
//       chalk.red.inverse.bold("No Hp Tidak Valid!")
//     );
//     return false;
//   }


//   contacts.push(contact);

//   fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
//   console.log(
//     chalk.bgGreen.black.inverse('Ok!')
//   );
// }

// const listContact = () => {
//   const contacts = loadContact();
//   console.log(
//     chalk.white.bgBlack.inverse.bold("Daftar Kontak\n")
//   );
//   contacts.forEach((contact, i) => {
//     console.log(`${i + 1}.${contact.nama} - ${contact.noHp}`);
//   });
// }

// const detailContact = nama => {
//   const contacts = loadContact();
//   const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

//   if(!contact) {
//     console.log(
//       chalk.red.inverse.bold(`Nama ${nama} Tidak Ditemukan !`)
//     );
//     return false
//   }
  
//   console.log(chalk.blue.inverse.bold(`Nama : ${contact.nama}`));
//   console.log(contact.noHp);
//   if(contact.email) {
//     console.log(contact.email);
//   }
// }

// const deleteContact = nama => {
//   const contacts = loadContact();
//   // ['Yusril', 'arzaqi', 'dimas']
//   // ['Yusril', 'dimas']
//   const newContact = contacts.filter(contact => contact.nama.toLowerCase() !== nama.toLowerCase());

//   if(contacts.length === newContact.length) {
//     console.log(chalk.red.inverse.bold(`Nama ${nama} Tidak Ditemukan !`));
//     return false
//   }

//   fs.writeFileSync('data/contacts.json', JSON.stringify(newContact));
//   console.log(
//     chalk.white.green.inverse(`Data contact ${nama} berhasil dihapus`)
//   );
// }


