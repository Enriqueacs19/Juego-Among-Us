const btnEmpezar = document.querySelector('.btn-start');

const ALeft = document.querySelector('.A-L');
const BLeft = document.querySelector('.B-L');
const CLeft = document.querySelector('.C-L');
const DLeft = document.querySelector('.D-L');
const ELeft = document.querySelector('.E-L');
const FLeft = document.querySelector('.F-L');
const GLeft = document.querySelector('.G-L');
const HLeft = document.querySelector('.H-L');
const ILeft = document.querySelector('.I-L');
const firstleft = document.querySelector('.first-left');
const secondleft = document.querySelector('.second-left');
const thirdleft = document.querySelector('.third-left');
const fourthleft = document.querySelector('.fourth-left');
const fifthleft = document.querySelector('.fifth-left');

const ARight = document.querySelector('.A-R');
const BRight = document.querySelector('.B-R');
const CRight = document.querySelector('.C-R');
const DRight = document.querySelector('.D-R');
const ERight = document.querySelector('.E-R');
const FRight = document.querySelector('.F-R');
const GRight = document.querySelector('.G-R');
const HRight = document.querySelector('.H-R');
const IRight = document.querySelector('.I-R');
const firstright = document.querySelector('.first-right');
const secondright = document.querySelector('.second-right');
const thirdright = document.querySelector('.third-right');
const fourthright = document.querySelector('.fourth-right');
const fifthright = document.querySelector('.fifth-right');


class Juego {
    constructor() {
        this.inicializar();
        this.generarSecuencia();
        this.siguienteNivel();
    }

    inicializar() {
        this.elegirBoton = this.elegirBoton.bind(this)
        btnEmpezar.classList.add('hide');
        this.nivel = 1;
        this.botonesIzquierda = {
            ALeft,
            BLeft,
            CLeft,
            DLeft,
            ELeft,
            FLeft,
            GLeft,
            HLeft,
            ILeft
        }
        this.botonesDerecha = {
            ARight,
            BRight,
            CRight,
            DRight,
            ERight,
            FRight,
            GRight,
            HRight,
            IRight
        }
    }

    generarSecuencia() {
        this.secuencia = new Array(10).fill(0).map(
            n => Math.floor(Math.random() * 9)
        );
    }

    siguienteNivel() {
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }

    transformarBotonANumero(boton) {
        switch (boton) {
            case 0:
                return 'ALeft';
            case 1:
                return 'BLeft';
            case 2:
                return 'CLeft';
            case 3:
                return 'DLeft';
            case 4:
                return 'ELeft';
            case 5:
                return 'FLeft';
            case 6:
                return 'GLeft';
            case 7:
                return 'HLeft';
            case 8:
                return 'ILeft';
        }
    }

    iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i++) {
            const boton = this.transformarBotonANumero(this.secuencia[i]);
            setTimeout(() => this.iluminarBoton(boton), 1000 * i);
        }
    }

    iluminarBoton(boton) {
        this.botonesIzquierda[boton].classList.add('light_left');
        setTimeout(() => this.apagarBoton(boton), 350);
    }

    apagarBoton(boton) {
        this.botonesIzquierda[boton].classList.remove('light_left');
    }

    agregarEventosClick() {
        this.botonesDerecha.ARight.addEventListener('click', this.elegirBoton);
        this.botonesDerecha.BRight.addEventListener('click', this.elegirBoton);
        this.botonesDerecha.CRight.addEventListener('click', this.elegirBoton);
        this.botonesDerecha.DRight.addEventListener('click', this.elegirBoton);
        this.botonesDerecha.ERight.addEventListener('click', this.elegirBoton);
        this.botonesDerecha.FRight.addEventListener('click', this.elegirBoton);
        this.botonesDerecha.GRight.addEventListener('click', this.elegirBoton);
        this.botonesDerecha.HRight.addEventListener('click', this.elegirBoton);
        this.botonesDerecha.IRight.addEventListener('click', this.elegirBoton);
    }

    elegirBoton(ev) {
        console.log(this)
    }
}

function empezarJuego() {
    window.juego = new Juego();
}

btnEmpezar.addEventListener('click', empezarJuego);