const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(e) {
  if (e.type === 'touchstart') e.preventDefault();

  const nav = document.getElementById('nav');
  nav.classList.toggle('active'); //adiciona uma classe caso não tenha

  /*Acessibilidade*/
  const active = nav.classList.contains('active');
  e.currentTarget.setAttribute('aria-expanded', 'active');
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

console.log('teste');
