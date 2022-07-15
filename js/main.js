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
  } else {
    setLightMode();
    light.click();
  }
};

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
