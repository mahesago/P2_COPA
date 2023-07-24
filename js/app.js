

//Evento en menú
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function (item) {
  item.addEventListener('click', function (e) {
    const currentItem = document.querySelector('.active');
    currentItem.classList.remove('active');
    e.target.classList.add('active')
  });
});

//Menú hamburguesa

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  abrir.classList.add("no-visible");
})

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
  abrir.classList.remove("no-visible");
})

