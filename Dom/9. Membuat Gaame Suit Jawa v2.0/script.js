function getPilihanComputer() {
    const comp = Math.floor(Math.random() * 3) + 1;

    if (comp == 1) return 'gajah';
    if (comp == 2) return 'orang';
    if (comp == 3) return 'semut';
}

function getHasil(comp, player) {
    if (player == comp) return 'Seri';
    if (player == 'gajah') return (comp == 'orang') ? 'Menang' : 'Kalah';
    if (player == 'orang') return (comp == 'gajah') ? 'Kalah' : 'Menang';
    if (player == 'semut') return (comp == 'orang') ? 'Kalah' : 'Menang';
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuAwal = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuAwal > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100);
}


const pilihan = document.querySelectorAll('ul li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
       const pilihanComputer = getPilihanComputer();
       const pilihanPlayer = pil.className;
       const hasil = getHasil(pilihanComputer, pilihanPlayer);

       putar();

       setTimeout(function () {
           const imgComputer = document.querySelector('.img-komputer');
           imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

           const info = document.querySelector('.info');
           info.innerHTML = hasil;
       }, 1000);
    });
});

    
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });