const radioBtns = document.querySelectorAll(".toggle__wrapper input");
const body = document.querySelector("body");
const dark = document.getElementById("dark");

const setDarkMode = () => {
  body.classList = "dark";
};

const setLightMode = () => {
  body.classList = "light";
};

const setColorMode = () => {
  if (localStorage.getItem("colormode") == "dark") {
    setDarkMode();
    dark.click()
  } else if (localStorage.getItem("colormode") == "light") {
    setLightMode();
    light.click();
  }
};

const checkMode = () => {
    if(window.matchMedia('(prefer-color-scheme: light)').matches) {
        light.click();
    } else if (window.matchMedia('(prefer-color-scheme: light)').matches) {
        dark.click();
    }
}

const checkModeChange = () => {
    window.matchMedia('(prefer-color-scheme: dark)').addEventListener('change', e => {
        if(e.matches) {
        checkMode();
        }
    })
}

for (let i = 0; i < radioBtns.length; i++) {
  radioBtns[i].addEventListener("click", (e) => {
    if (dark.checked) {
      localStorage.setItem("colorMode", "dark");
      setDarkMode();
    } else {
      localStorage.setItem("colorMode", "dark");
      setLightMode();
    }
  });
}

setColorMode();
checkMode();
checkModeChange();
