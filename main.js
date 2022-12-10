const btn = document.querySelector('.header__btn');

btn.addEventListener('click', function(){
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');

  const cover = document.querySelector('.menu__cover');
  cover.classList.toggle('active');

  const bar = document.querySelectorAll('.header__btn-bar');
  for(let i = 0; i < bar.length; i++) {
    bar[i].classList.toggle('active');
  }
});

document.querySelectorAll('.menu a').forEach(function(link){
  link.addEventListener('click',function(){
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');

    const cover = document.querySelector('.menu__cover');
    cover.classList.toggle('active');

    const bar = document.querySelectorAll('.header__btn-bar');
    for(let i = 0; i < bar.length; i++) {
      bar[i].classList.toggle('active');
    }
  })
});

let inviewLeft = document.querySelectorAll('.inview-slide-left');

inviewLeft.forEach(function(fadeIn) {
  let windowHeight = window.innerHeight;
  
  window.addEventListener('scroll', function() {
    let offset = fadeIn.getBoundingClientRect().top;
    let scroll = window.scrollY;
    
    if(scroll > offset - windowHeight + 250){
      fadeIn.classList.add('is-scrollIn');
    }
  })
})

let inviewRight = document.querySelectorAll('.inview-slide-right');

inviewRight.forEach(function(fadeIn) {
  let windowHeight = window.innerHeight;
  
  window.addEventListener('scroll', function() {
    let offset = fadeIn.getBoundingClientRect().top;
    let scroll = window.scrollY;
    
    if(scroll > offset - windowHeight + 500){
      fadeIn.classList.add('is-scrollIn');
    }
  })
})

let float = document.querySelectorAll('.inview-balloon');

float.forEach(function(fadeUp) {
  let windowHeight = window.innerHeight;
  
  window.addEventListener('scroll', function() {
    let offset = fadeUp.getBoundingClientRect().top;
    let scroll = window.scrollY;
    
    if(scroll > offset - windowHeight + 1000){
      fadeUp.classList.add('balloon');
    }
  })
})
