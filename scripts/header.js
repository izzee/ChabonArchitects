const headerLogo = document.querySelector('.header-logo');
const header = document.querySelector('header')

function handleIntersect(entries) {
  entries.forEach((entry) => {
    headerLogo.classList.toggle( 'hidden', !entry.isIntersecting)
    header.classList.toggle( 'smaller', !entry.isIntersecting)
  });
}

const logoObserver = new IntersectionObserver(handleIntersect, {rootMargin: '-40px'});
logoObserver.observe(headerLogo)
