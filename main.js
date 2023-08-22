const button = document.querySelector('.js-hamburger');

button.addEventListener('click', () => {
  const isOpened = button.getAttribute('aria-expanded');
  nav.classList.toggle('nav--visible');

  if(isOpened === 'false') {
    button.setAttribute('aria-expanded', 'true');
  } else {
    button.setAttribute('aria-expanded', 'false');
  }
  
});