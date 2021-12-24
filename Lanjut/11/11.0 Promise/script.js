//$.ajax({
  //url : "http://www.omdbapi.com/?apikey=f4d69482&s=avenger",
  //success: movies => console.log(movies)
//});

/*
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.status === 200) {
    if(xhr.readyState === 4) {
      console.log(JSON.parse(xhr.response));
    }
  }else {
    console.log(xhr.responseText);
  }
}

xhr.open('get', "http://www.omdbapi.com/?apikey=f4d69482&s=avenger");
xhr.send();
*/

//fetch("http://www.omdbapi.com/?apikey=f4d69482&s=avenger")
  //.then( response => response.json())
  //.then(response => console.log(response));
 

//Promise
// Object yang mempresentasikan keberhasilan / kegagalan sebuah event yang asynchromous di masa yang akan datang
// janji (terpenuhi / ingkar)
// States (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1 
/*
let ditepati = false;
const janji1 = new Promise((resovle, reject) => {
  if (ditepati) {
    resovle("janji telah ditepati");
  } else {
    reject("ingkar janji");
  }
});

janji1
  .then(response => console.log(`OK! ${response}`))
  .catch(response => console.log(`NOT OK! ${response}`));
  */


// COntoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve('Ditepati setelah beberapa waktu!');
//     }, 2000);
//   }else {
//     setTimeout(() => {
//       reject('Tidak ditepati setelah beberapa waktu!');
//     }, 2000);
//   }
// });

// console.log('Mulai');
// //console.log(janj2.then(() => console.log(janj2)));
// janji2
//   .finally(() => console.log("Selesai Menunggu!"))
//   .then(response => console.log(`OK! ${response}`))
//   .catch(response => console.log(`NOT OK! ${response}`));
 
// console.log('Selesai');

// Promise.all

const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      judul : "AADC",
      sutradara : "Yusril A",
      pemeran : "Bimo, Adam"
    }]);
  }, 1000);
});

const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      kota : "semarang",
      temp : 25,
      kondisi : "hujan sedang"
    }]);
  }, 500);
});

//film.then(response => console.log(response));
//cuaca.then(response => console.log(response));


Promise.all([film, cuaca])
  .then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  })








