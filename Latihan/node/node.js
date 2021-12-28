const fs = require('fs');

const dirPath = './data/';
const dataPath = './data/contact.json';
if (!fs.existsSync(dirPath)){
  fs.mkdirSync(dirPath);
}

const loadContact = () => {
  const file = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(file);
}

console.log(loadContact());

const simpanContact = (nama, email, noHp) => {
  const contact = {nama, email, noHp}
  const contacts = loadContact()

  // cek duplikat
  const duplikat = contacts.find(contact => contact.nama === nama)
  if(!duplikat){
    console.log( )
  }



}

