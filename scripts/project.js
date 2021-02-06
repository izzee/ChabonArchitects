const info = document.querySelector('.project-info');
const hero = document.querySelector('.project-hero img');
const caption = document.querySelector('.img-caption');
const description = document.querySelector('.project-description');


window.addEventListener('scroll', () => {
  if(window.innerWidth > 768){
    const scrollRemaining = (Math.round(info.getBoundingClientRect().y)/ (window.innerHeight - 145) * 100) / 100;
    info.classList.toggle('top', scrollRemaining <= 0);
    hero.style.opacity = scrollRemaining;
  }
})