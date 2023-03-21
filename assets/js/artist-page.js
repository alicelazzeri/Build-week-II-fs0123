// navbar che cambia colore

document.addEventListener('DOMContentLoaded', () => {
    let scroll = window.scrollY

    const nav = document.querySelector("nav")

    //diminuire il numero se si vuole che il cambio colore arrivi prima
    const scrollChange = 150

    window.addEventListener('scroll', function() { 
        scroll = window.scrollY;

        // bg-black è la classe di bootstrap, basta cambiarlo con qualsiasi classe che si voglia
        scroll >= scrollChange ? nav.classList.add("bg-black") : nav.classList.remove("bg-black")

        //nel css c'è il tag nav con {transition: 2s} per non rendere il cambio colore netto
    })
    })