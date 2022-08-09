import util from 'util';

console.info(util.format("Nama : %s", "Yusril"));


const person = {
  firstName: "Yusril",
  lastName : "Arzaqi"
};
console.info(util.format("Person : %j", person));
console.info(JSON.stringify(person));

