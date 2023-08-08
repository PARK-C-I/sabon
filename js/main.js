const nav = document.querySelector('#header #nav');
const close = document.querySelector('#header #nav .close');
const closei = document.querySelector('#header #nav .close i');
const bg = document.querySelector('.bg');

const search = document.querySelector('#header .search');
const searchform = document.querySelector('#header .search .search-form');

close.addEventListener('click', e => {
    isPlay = nav.classList.contains('on');
    if(isPlay) {
        nav.classList.remove('on');
        bg.classList.remove('on');
        closei.classList.replace('xi-angle-left', 'xi-angle-right');
    } else {
        nav.classList.add('on');
        bg.classList.add('on');
        closei.classList.replace ('xi-angle-right', 'xi-angle-left');
        isPlay = !isPlay;
    }
})

  let ttop = document.querySelector('.top');
  let ty = 0;
  
  ttop.addEventListener('click', e => {
      ty = 0;            
      window.scrollTo({ top: ty , behavior:'smooth'});
  })
