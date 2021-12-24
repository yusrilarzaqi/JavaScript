#!/snap/bin/node

/* Syncrhonous
const getUserSync = id => {

  let nama = "";
  if (id == 1){
    nama = "Yusril";
  } else {
    nama = "Arzaqi";
  }
 

  const nama = id == 1 ? 'Yusril' : "arzaqi";
  return {id, nama};
}

const user1 = getUserSync(1);
console.log(user1);

const user2 = getUserSync(2);
console.log(user2);


const hello = 'Hello world';
console.log(hello);
*/

/* Asynchronous */ 

const getUser= (id, cb) => {
  const time = id === 1 ? 3000 : 2000;
  setTimeout(() => {
    const nama = id === 1 ? "Yusril" : "Arzaqi";
    cb({id, nama});
  }, time);
}
const user1 = getUser(1, hasil => console.log(hasil));

const user2 = getUser(2, hasil => console.log(hasil));

const hello = 'Hello world';
console.log(hello);



