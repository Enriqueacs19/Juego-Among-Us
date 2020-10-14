const btnEmpezar = document.querySelector('.btn-start');
const ULTIMO_NIVEL = 5;

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
        this.alternarBtnEmpezar();
        this.nivel = 1;
        this.circulosIzquierda = [
            ...document.querySelectorAll('.circles.left .circle')
        ];
        this.circulosDerecha = [
            ...document.querySelectorAll('.circles.right .circle')
        ];
        this.botonesIzquierda = [
            ...document.querySelectorAll('.box_left')
        ];
        this.botonesDerecha = [
            ...document.querySelectorAll('.box_right')
        ];
    }


    alternarBtnEmpezar() {
        if (btnEmpezar.classList.contains('hide')) {
            btnEmpezar.classList.remove('hide')
            return;
        }
        btnEmpezar.classList.add('hide');
    }


    generarSecuencia() {
        this.secuencia = new Array(5).fill(0).map(
            () => Math.floor(Math.random() * 8)
        );
    }


    siguienteNivel() {
        this.subnivel = 0;
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }

    iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i++) {
            setTimeout(
                () => this.iluminarBotonIzquierda(this.secuencia[i]),
                500 * i
            );
        }
    }

    iluminarBotonIzquierda(indice) {
        this.botonesIzquierda[indice].classList.add('light_left');
        setTimeout(
            () => this.botonesIzquierda[indice].classList.remove('light_left'),
            350
        );
    }

    iluminarBotonDerecha(indice) {
        this.botonesDerecha[indice].classList.add('light_right');
        setTimeout(
            () => {
                this.botonesDerecha[indice].classList.remove('light_right');
            },
            350
        );
    }

    apagarBotonR(boton) {
        this.botonesDerecha[boton].classList.remove('light_right');
    }

    agregarEventosClick() {
        this.botonesDerecha.forEach((btn) => {
            btn.addEventListener('click', this.elegirBoton);
        });
    }

    eliminarEventosClick() {
        this.botonesDerecha.forEach((btn) => {
            btn.removeEventListener('click', this.elegirBoton);
        });
    }

    elegirBoton(ev) {
        const indice = parseInt(ev.target.dataset.boton);
        this.iluminarBotonDerecha(indice);
        if (indice === this.secuencia[this.subnivel]) {
            this.subnivel++;
            this.pintarCirculosDerecha();
            if (this.subnivel === this.nivel) {
                this.nivel++;
                this.pintarCirculosIzquierda();
                this.eliminarEventosClick();
                setTimeout(
                    () => this.despintarCirculosDerecha(),
                    500
                );
                if (this.nivel === (ULTIMO_NIVEL + 1)){
                    this.ganoElJuego();
                    setTimeout(
                        () => this.despintarCirculosIzquierda(),
                        350
                    );
                } else {
                    setTimeout(this.siguienteNivel, 500);
                }
            }

        } else {
            this.perdioElJuego()
            this.despintarCirculosDerecha();
            setTimeout(
                () => this.despintarCirculosIzquierda(),
                350
            );
        }
    }

    pintarCirculosIzquierda() {
        for (let i = 0; i < this.nivel - 1; i++) {
            this.circulosIzquierda[i].classList.add('circle_green');
        }
    }


    pintarCirculosDerecha() {
        for (let i = 0; i < this.subnivel; i++) {
            this.circulosDerecha[i].classList.add('circle_green');
        }
    }

    despintarCirculosDerecha() {
        this.circulosDerecha.forEach((circulo) => {
            circulo.classList.remove('circle_green');
        });
    }

    despintarCirculosIzquierda() {
        this.circulosIzquierda.forEach((circulo) => {
            circulo.classList.remove('circle_green');
        });
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

btnEmpezar.addEventListener('click', () => {
    new Juego();
});