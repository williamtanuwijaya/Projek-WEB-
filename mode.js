function detectColorScheme() {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return isDarkMode ? 'dark' : 'light';
}

function applyTheme(theme) {
  const body = document.getElementsByTagName('body')[0];
  body.classList.remove('dark', 'light');
  body.classList.add(theme);
}

function applyCardTheme(theme) {
  const cards = document.getElementsByClassName('card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('card-dark', 'card-light');
    cards[i].classList.add(`card-${theme}`);
  }
}

function handleModeClick() {
  const darkModeCheckbox = document.getElementById('darkModeCheckbox');
  const theme = darkModeCheckbox.checked ? 'dark' : 'light';
  applyTheme(theme);
  applyCardTheme(theme);
  localStorage.setItem('theme', theme);
}

window.addEventListener('DOMContentLoaded', function () {
  const storedTheme = localStorage.getItem('theme');
  const colorScheme = storedTheme || detectColorScheme();
  applyTheme(colorScheme);
  applyCardTheme(colorScheme);

  const darkModeCheckbox = document.getElementById('darkModeCheckbox');
  darkModeCheckbox.addEventListener('change', handleModeClick);

  if (colorScheme === 'light') {
    darkModeCheckbox.checked = false;
  }
});
