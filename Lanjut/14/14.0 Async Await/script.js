/*
const coba = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Selesai')
  }, 2000);
});

coba.then(() => console.log(coba));
*/

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 6000;
    if(waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("kelamaan");
    }
  });
}
/*
const coba = cobaPromise();
coba
  .then(coba => console.log(coba))
  .catch(result => console.log(result));
*/



async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch(e) {
    console.error(e);
  }
}

cobaAsync();


