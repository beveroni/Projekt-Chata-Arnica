// https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]',
);

const switchTheme = (e) => {
  const theme = e.target.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
