// mengambil container
const container = document.querySelector(".container");
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', e => {
  if (e.target.className == 'thumb'){

    //const gambar = e.target.getAttribute('src');
    //e.target.parentElement.previousElementSibling.setAttribute('src', gambar);

    jumbo.src = e.target.src;
    jumbo.classList.add('fade');
    setTimeout(() => {
      jumbo.classList.remove('fade');
    }, 500);

    thumbs.forEach(thumb => {
      // if(thumb.classList.contains('active')){
      //   thumb.classList.remove('active');
      // }
      thumb.className  = 'thumb';
    });

    e.target.classList.add('active');
  }
});
