const body = document.querySelector('body');
const hero = document.querySelector('.hero');
const topArea = document.querySelector('.top');
const header = document.querySelector('header');
const heroImg = hero.querySelector('.hero-image');
const heroImages = heroImg.querySelectorAll('img');
const logo = hero.querySelector('.hero-logo');
const logoBot = logo.getBoundingClientRect().bottom;
const wh = window.innerHeight;

const minMax = (int) => {
  return Math.round(Math.max(Math.min(int, 1), 0) * 100)/100;
};

const scrollListeners = () => {
  if (wh - window.scrollY > 0 && window.innerWidth >= 768) {
    const heroBot = hero.getBoundingClientRect().bottom;
    const scrollIn = (wh - heroBot) / (wh - logoBot);
    const scrollOut = (wh / 2 - heroBot) / (wh / 2);
    logo.style.opacity = minMax(1 - scrollIn);
    heroImg.style.transform = `translateY(${Math.min((wh - heroBot), (wh - logoBot)) * 0.25 - scrollIn}px)`;
    heroImg.style.opacity = minMax(1 - scrollOut * 1.5);
    body.classList.toggle('half-scroll', scrollIn > 0.5);
    body.classList.toggle('full-scroll', scrollOut > 0.25);
  } else {
    heroImg.style.opacity = 1;
  }
}

let activeImage = 0;
const slideshow = () => {
  const currentActive = heroImg.querySelector('.active');
  activeImage = activeImage < heroImages.length - 1 ? activeImage + 1 : 0;
  if (currentActive) { currentActive.classList.remove('active'); }
  heroImages[activeImage].classList.add('active');
}

const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('load', setVh);
window.addEventListener('resize', setVh);
window.addEventListener('scroll', scrollListeners);


document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0,0);
})

document.addEventListener('readystatechange', event => { 
  if (event.target.readyState === "complete") {
    body.classList.remove('loading');
    window.setInterval(slideshow, 2500);
  }
});

topArea.addEventListener('mouseenter', () => {
  if(!body.classList.contains('full-scroll')) {
    header.classList.add('visible');
  }
});

logo.addEventListener('mouseenter', () => {
  if(!body.classList.contains('full-scroll')) {
    header.classList.add('visible');
  }
});


header.addEventListener('mouseleave', () => {
  console.log('exit')
  if(!body.classList.contains('full-scroll')) {
    header.classList.remove('visible');
  }
});
