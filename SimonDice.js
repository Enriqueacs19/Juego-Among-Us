const firstleft = document.querySelector('.first-left');
const secondleft = document.querySelector('.second-left');
const thirdleft = document.querySelector('.third-left');
const fourthleft = document.querySelector('.fourth-left');
const fifthleft = document.querySelector('.fifth-left');
const btnEmpezar = document.querySelector('.btn-start');

class Juego {
    constructor() {
        this.inicializar();
    }

    inicializar() {
        btnEmpezar.classList.add('hide')
    }
}

function empezarJuego() {
    var juego = new Juego();
}