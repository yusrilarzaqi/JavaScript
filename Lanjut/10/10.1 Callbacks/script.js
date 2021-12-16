// Callback 

// Synchrounous Callback
//function halo(nama) {
  //alert(`Hallo ${nama}`);
//}

//function tampilkanPesan(callback) {
  //const nama = prompt('Masukan Nama');
  //callback(nama);
//}

//tampilkanPesan(nama => alert(`Hallo ${nama}`));
 

// Asynchrounus Callback


// console.log('mulai');
// mhs.forEach(a => {
//   for(let i=1; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(a.nama);
// });
// console.log('Akhir');

function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if ( xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  }

  xhr.open('get', url);
  xhr.send();
}

getDataMahasiswa('data/mahasiswa.json', results => {
  //console.log(JSON.parse(results));
  const mhs = JSON.parse(results);
  mhs.forEach(m => {
    console.log(m.nama); 
  });
}, () => {

});









