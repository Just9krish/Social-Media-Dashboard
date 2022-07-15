const radioBtns = document.querySelectorAll('.toggle__wrapper input');
const body = document.querySelector('body');
const dark = document.getElementById('dark');

for (let i = 0; i < radioBtns.length; i++) {
    radioBtns[i].addEventListener('click', e => {
        dark.checked ? body.classList = 'dark' : body.classList = 'light'
    })
}