const btn = document.getElementsByClassName("dropdown__value")[0];
let newClass = document.querySelectorAll(".dropdown__list")[0];
let list = document.querySelectorAll('.dropdown__link');

function onClick() {
    newClass.classList.toggle('dropdown__list_active')
}

btn.onclick = onClick

list.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        btn.textContent = element.textContent;
        onClick();
    })
})