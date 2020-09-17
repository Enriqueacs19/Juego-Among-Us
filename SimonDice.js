const btnEmpezar = document.querySelector('.btn-start');
const ULTIMO_NIVEL = 5;

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
        this.inicializar = this.inicializar.bind(this);
        this.siguienteNivel = this.siguienteNivel.bind(this);
        this.elegirBoton = this.elegirBoton.bind(this);
        this.toogleBtnEmpezar();
        this.nivel = 1;
        this.circleLeft();
        this.circleright();
        this.eliminarCircleR();
        this.eliminarCircleL();
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

        this.circulosDerecha = {
            firstright,
            secondright,
            thirdright,
            fourthright,
            fifthright
        }
    }

    toogleBtnEmpezar() {
        if (btnEmpezar.classList.contains('hide')) {
            btnEmpezar.classList.remove('hide')
        } else {
            btnEmpezar.classList.add('hide')
        }
    }

    generarSecuencia() {
        this.secuencia = new Array(10).fill(0).map(
            n => Math.floor(Math.random() * 9)
        );
    }

    siguienteNivel() {
        this.subnivel = 0;
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }

    transformarNumeroABoton(numero) {
        switch (numero) {
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

    transformarBotonANumero(boton) {
        switch (boton) {
            case 'ARight':
                return 0;
            case 'BRight':
                return 1;
            case 'CRight':
                return 2;
            case 'DRight':
                return 3;
            case 'ERight':
                return 4;
            case 'FRight':
                return 5;
            case 'GRight':
                return 6;
            case 'HRight':
                return 7;
            case 'IRight':
                return 8;
        }
    }

    iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i++) {
            const boton = this.transformarNumeroABoton(this.secuencia[i]);
            setTimeout(() => this.iluminarBotonL(boton), 1000 * i);
        }
    }

    iluminarBotonL(boton) {
        this.botonesIzquierda[boton].classList.add('light_left');
        setTimeout(() => this.apagarBotonL(boton), 350);
    }
    
    apagarBotonL(boton) {
        this.botonesIzquierda[boton].classList.remove('light_left');
    }

    iluminarBotonR(boton) {
        this.botonesDerecha[boton].classList.add('light_right');
        setTimeout(() => this.apagarBotonR(boton), 350);
    }
    
    apagarBotonR(boton) {
        this.botonesDerecha[boton].classList.remove('light_right');
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

    eliminarEventosClick() {
        this.botonesDerecha.ARight.removeEventListener('click', this.elegirBoton);
        this.botonesDerecha.BRight.removeEventListener('click', this.elegirBoton);
        this.botonesDerecha.CRight.removeEventListener('click', this.elegirBoton);
        this.botonesDerecha.DRight.removeEventListener('click', this.elegirBoton);
        this.botonesDerecha.ERight.removeEventListener('click', this.elegirBoton);
        this.botonesDerecha.FRight.removeEventListener('click', this.elegirBoton);
        this.botonesDerecha.GRight.removeEventListener('click', this.elegirBoton);
        this.botonesDerecha.HRight.removeEventListener('click', this.elegirBoton);
        this.botonesDerecha.IRight.removeEventListener('click', this.elegirBoton);
    }

    elegirBoton(ev) {
        const nombreBoton = ev.target.dataset.boton;
        const numeroBoton = this.transformarBotonANumero(nombreBoton);
        this.iluminarBotonR(nombreBoton);
        if (numeroBoton === this.secuencia[this.subnivel]) {
            this.subnivel++;
            console.log('subnivel',this.subnivel)
            this.circleright();
            if (this.subnivel === this.nivel) {
                this.nivel++;
                console.log(this.nivel)
                this.circleLeft();
                this.eliminarEventosClick();
                setTimeout(() => this.eliminarCircleR(), 500)
                if (this.nivel === (ULTIMO_NIVEL + 1)){
                    this.ganoElJuego();
                    setTimeout(() => this.eliminarCircleL(), 350)
                } else {
                    setTimeout(this.siguienteNivel, 500);
                }
            } 

        } else {
            this.perdioElJuego()
            setTimeout(() => this.eliminarCircleL(), 350)
        }
    }

    circleLeft() {
        if (this.nivel === 2){
            firstleft.classList.add('circle_green');
        }
        
        if (this.nivel === 3) {
            secondleft.classList.add('circle_green');
        }
                
        if (this.nivel === 4) {
            thirdleft.classList.add('circle_green');
        }

        if (this.nivel === 5) {
            fourthleft.classList.add('circle_green');
        }

        if (this.nivel === (ULTIMO_NIVEL+1)) {
            fifthleft.classList.add('circle_green');
        }       
    }

    circleright() {

        if(this.subnivel === 1) {
            firstright.classList.add('circle_green');
        }

        if(this.subnivel === 2) {
            secondright.classList.add('circle_green');
        }

        if(this.subnivel === 3) {
            thirdright.classList.add('circle_green');
        }

        if(this.subnivel === 4) {
            fourthright.classList.add('circle_green');
        }

        if(this.subnivel === 5) {
            fifthright.classList.add('circle_green');
        }
    }

    eliminarCircleR() {
        
        if (firstright.classList.contains('circle_green')) {
            firstright.classList.remove('circle_green');
        }

        if (secondright.classList.contains('circle_green')) {
            secondright.classList.remove('circle_green');
        }

        if (thirdright.classList.contains('circle_green')) {
            thirdright.classList.remove('circle_green');
        }
        
        if (fourthright.classList.contains('circle_green')) {
            fourthright.classList.remove('circle_green');
        }

        if (fifthright.classList.contains('circle_green')) {
            fifthright.classList.remove('circle_green');
        }

    }

    eliminarCircleL() {
        firstleft.classList.remove('circle_green')
        secondleft.classList.remove('circle_green')
        thirdleft.classList.remove('circle_green')
        fourthleft.classList.remove('circle_green')
        fifthleft.classList.remove('circle_green')
    }
    

    ganoElJuego() {
        swal('Felicitaciones','Ganaste!', 'success')
        .then(this.inicializar)
    }

    perdioElJuego() {
        swal('Lo Siento','Perdiste', 'error')
        .then(() => {
            this.eliminarEventosClick()
            this.inicializar()
        })
    }
}

function empezarJuego() {
    window.juego = new Juego();
}

btnEmpezar.addEventListener('click', empezarJuego);