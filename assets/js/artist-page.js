// navbar che cambia colore

document.addEventListener("DOMContentLoaded", () => {
  let scroll = window.scrollY;

  const nav = document.getElementById("navBar");

  //diminuire il numero se si vuole che il cambio colore arrivi prima
  const scrollChange = 150;

  window.addEventListener("scroll", function () {
    scroll = window.scrollY;

    // bg-black è la classe di bootstrap, basta cambiarlo con qualsiasi classe che si voglia
    scroll >= scrollChange ? (nav.style.backgroundColor = "#00000075") : (nav.style.backgroundColor = "#00000000");

    //nel css c'è il tag nav con {transition: 2s} per non rendere il cambio colore netto
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let scroll = window.scrollY;

  const button = document.getElementById("btn-app");

  //diminuire il numero se si vuole che il cambio colore arrivi prima
  const scrollChange = 500;

  window.addEventListener("scroll", function () {
    scroll = window.scrollY;

    // bg-black è la classe di bootstrap, basta cambiarlo con qualsiasi classe che si voglia
    scroll >= scrollChange ? button.classList.remove('d-none') : button.classList.add('d-none')

    //nel css c'è il tag nav con {transition: 2s} per non rendere il cambio colore netto
  });
});
