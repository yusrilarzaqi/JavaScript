/* Cara Module */

/* File system */

// menuliskan string ke file (synchrounous)
// try{
//   fs.writeFileSync('data/text.txt', 'Hello World secara synchronous!');
// } catch (e) {
//   console.log(e);
// }

// Asyncrounous
// fs.writeFile('data/text.txt', "Hello world secara Asyncrounous!", (e) => {
//   console.log(e);
// });

// Membaca file secara sync
// const f = fs.readFileSync('data/text.txt', 'utf-8');
// console.log(f);

// Membaca file secara Async
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// console.log(r1);
rl.question("Masukan Nama Anda : ", nama => {
  // TODO : Log the Answer in a data base
  rl.question('Masukan no HP anda : ', noHp => {
    const contact ={nama, noHp};

    const file= fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Ok!');



    rl.close();
  });
});

