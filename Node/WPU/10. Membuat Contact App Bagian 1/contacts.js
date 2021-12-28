const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

const tulisPertanyaan = pertanyaan => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, nama =>{
      resolve(nama);
    });
  });
};

const simpanContact = (nama, email, noHp) =>  {
  const contact ={nama, email, noHp};
  const file= fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(file);

  contacts.push(contact);

  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
  console.log('Ok!');

  rl.close();
}

module.exports = {tulisPertanyaan,simpanContact};

