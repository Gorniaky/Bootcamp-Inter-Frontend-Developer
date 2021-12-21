const button = document.getElementById('mode-selector'),
  h1 = document.getElementById('page-title'),
  body = document.querySelector('body'),
  footer = document.querySelector('footer');

function changeMode() {
  changeClasses();
  changeTexts();
}

function changeClasses() {
  button.classList.toggle('dark-mode');
  h1.classList.toggle('dark-mode');
  body.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
}

function changeTexts() {
  if (body.classList.contains(darkModeClass)) {
    button.innerHTML = 'Light Mode';
    h1.innerHTML = 'Dark Mode ON';
  } else {
    button.innerHTML = 'Dark Mode';
    h1.innerHTML = 'Light Mode ON';
  }
}

button.addEventListener('click', changeMode);