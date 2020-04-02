const btn = document.querySelector('.button_hamburger');
const list = document.querySelectorAll('ul li');
btn.addEventListener('click', showMenu);
function showMenu() {
    btn.classList.toggle("change");
    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        item.classList.toggle('display')
    }
}