function detectColorScheme() {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return isDarkMode ? 'dark' : 'light';
}

function applyTheme(theme) {
  const body = document.getElementsByTagName('body')[0];
  body.classList.remove('dark', 'light');
  body.classList.add(theme);
}

function handleDarkModeClick() {
  applyTheme('dark');
  localStorage.setItem('theme', 'dark');
}

function handleLightModeClick() {
  applyTheme('light');
  localStorage.setItem('theme', 'light');
}

window.addEventListener('DOMContentLoaded', function () {
  const storedTheme = localStorage.getItem('theme');
  const colorScheme = storedTheme || detectColorScheme();
  applyTheme(colorScheme);
});
function applyCardTheme(theme) {
  const cards = document.getElementsByClassName('card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('card-dark', 'card-light');
    cards[i].classList.add(`card-${theme}`);
  }
}

window.addEventListener('DOMContentLoaded', function () {
  const storedTheme = localStorage.getItem('theme');
  const colorScheme = storedTheme || detectColorScheme();
  applyTheme(colorScheme);
  applyCardTheme(colorScheme);
});

const darkModeButton = document.getElementById('darkModeButton');
darkModeButton.addEventListener('click', handleDarkModeClick);

const lightModeButton = document.getElementById('lightModeButton');
lightModeButton.addEventListener('click', handleLightModeClick);
