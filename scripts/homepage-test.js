const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const header = document.querySelector('header');
const fadeItems = document.querySelectorAll('.fade');

function cycleImage() {
  resetCycle();
  if (document.querySelector('body.slideshow')) {
    const currentActive = hero.querySelector('.active');
    const prevOutbound = hero.querySelector('.outbound');
    const nextActive = currentActive.nextElementSibling || hero.firstElementChild;
    currentActive.classList.add('outbound');
    nextActive.classList.add('active');
    currentActive.classList.remove('active');
    if (prevOutbound) prevOutbound.classList.remove('outbound');
  }
}

function resetCycle() {
  hero.querySelectorAll('img').forEach(img => {
    img.style.transform = ""
  });
}

function parallax() {
  hero.querySelector('img.active').style.transform = `translateY(-${Math.floor(window.scrollY * .2)}px)`
}

function createObserver() {
  let observer;
  observer = new IntersectionObserver(handleIntersect);
  observer.observe(main);
  fadeItems.forEach(element => {
    observer.observe(element);
  })
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.target.tagName === 'MAIN') {
      document.body.classList.toggle('slideshow', !entry.isIntersecting)
      window.addEventListener('scroll', parallax);
      if (!!entry.isIntersecting) {
        window.clearInterval(window.slideshow);
      } else {
        window.slideshow = window.setInterval(cycleImage, 5000);
      }
    } else {
      entry.target.classList.toggle('hidden', !entry.isIntersecting);
    }
  });
}

function setWidth() {
  const width = document.body.getBoundingClientRect().width
  document.body.style.setProperty('--vw', width/(width-64))
}

document.addEventListener('DOMContentLoaded', () => {
  setWidth()
  createObserver();
})


window.addEventListener('resize', () => {
  setWidth();
})