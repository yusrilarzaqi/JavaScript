// ambil semua elemen video
const video = Array.from(document.querySelectorAll('[data-duration]'))

// pilih hanya yang 'JavaSctipt Lanjutan'
let jsLanjut = video.filter(video => video.textContent.includes('JavaScript Lanjutan'))

// ambil durasi masing masing video
  .map(item => item.dataset.duration)


// ubah dorasi menjadi float, ubang menit menjadi detik
  .map(waktu => {
    // durasi 10:30 -> [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
  })

// Jumlahkan semua detik
  .reduce((total, detik) => total+detik);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// Simpan di DOM

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam ,${menit} menit ,${detik} detik`;

const jmlVideo = video.filter(video => video.textContent.includes('JavaScript Lanjutan')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} video`; 