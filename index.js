// https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]',
);

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
};

toggleSwitch.addEventListener('change', switchTheme, false);
