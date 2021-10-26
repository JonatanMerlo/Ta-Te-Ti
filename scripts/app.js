window.onload = () => {

    // const cuadrantes = document.querySelectorAll('table')
    // const synaptic = require('synaptic')
    
    // var Neuron = synaptic.Neuron
    const boton = document.querySelector('button')
    const textoResultado = document.querySelector('h2')
    function empezarAJugar() {
        
        const cuadrante11 = document.getElementById('{1,1}')
        const cuadrante12 = document.getElementById('{1,2}')
        const cuadrante13 = document.getElementById('{1,3}')
        const cuadrante21 = document.getElementById('{2,1}')
        const cuadrante22 = document.getElementById('{2,2}')
        const cuadrante23 = document.getElementById('{2,3}')
        const cuadrante31 = document.getElementById('{3,1}')
        const cuadrante32 = document.getElementById('{3,2}')
        const cuadrante33 = document.getElementById('{3,3}')
        let posicionesJugador = [];
        let posicionesMaquina = [];
        let jugadasRealizadas = [];
        const posiblesLugaresAElegir = ['{1,1}','{1,2}','{1,3}','{2,1}','{2,2}','{2,3}','{3,1}','{3,2}','{3,3}'];
        const jugadasGanadoras = [['{1,1}','{1,2}','{1,3}'],['{2,1}','{2,2}','{2,3}'],['{3,1}','{3,2}','{3,3}'],['{1,1}','{2,1}','{3,1}'],['{1,2}','{2,2}','{3,2}'],['{1,3}','{2,3}','{3,3}'],['{1,1}','{2,2}','{3,3}'],['{1,3}','{2,2}','{3,1}']]
        let contador = 0;
        let contador2 = 0;
    
        // cuadrantes.forEach( cuadrante => {
        //     cuadrante.addEventListener('click', () => {
        //         console.log(cuadrante.rows.item(cuadrante.id));
        //     })
        // })
        
        
        
        cuadrante11.onclick = function(e) {
            console.log(cuadrante11.id);
            console.log(posicionesJugador);
            if (!posicionesJugador.includes(cuadrante11.id) && !jugadasRealizadas.includes(cuadrante11.id)) {
                posicionesJugador.push(cuadrante11.id)
                jugadasRealizadas.push(cuadrante11.id)
                renderizarX(cuadrante11);
            }        
            declararGanador()
            jugadaDeLaPc(jugadasRealizadas);
            // cuadrante11.innerText = 'x';
        }
        cuadrante12.onclick = function(e) {
            console.log(cuadrante12.id);
            console.log(posicionesJugador);
            if (!posicionesJugador.includes(cuadrante12.id) && !jugadasRealizadas.includes(cuadrante12.id)) {
                posicionesJugador.push(cuadrante12.id)
                jugadasRealizadas.push(cuadrante12.id)
                renderizarX(cuadrante12)
            }
            
            declararGanador()
            jugadaDeLaPc(jugadasRealizadas);
    
        }
        cuadrante13.onclick = function(e) {
            console.log(cuadrante13.id);
            console.log(posicionesJugador);
            if (!posicionesJugador.includes(cuadrante13.id) && !jugadasRealizadas.includes(cuadrante13.id)) {
                posicionesJugador.push(cuadrante13.id)
                jugadasRealizadas.push(cuadrante13.id)
                renderizarX(cuadrante13)
            }
        
            declararGanador()
            jugadaDeLaPc(jugadasRealizadas);
        }
        cuadrante21.onclick = function(e) {
            console.log(cuadrante21.id);
            console.log(posicionesJugador);
            if (!posicionesJugador.includes(cuadrante21.id) && !jugadasRealizadas.includes(cuadrante21.id)) {
                posicionesJugador.push(cuadrante21.id)
                jugadasRealizadas.push(cuadrante21.id)
                renderizarX(cuadrante21)
            }
        
            declararGanador()
            jugadaDeLaPc(jugadasRealizadas);
        }
        
        cuadrante22.onclick = function(e) {
            console.log(cuadrante22.id);
            console.log(posicionesJugador);
            if (!posicionesJugador.includes(cuadrante22.id) && !jugadasRealizadas.includes(cuadrante22.id)) {
                posicionesJugador.push(cuadrante22.id)
                jugadasRealizadas.push(cuadrante22.id)
                renderizarX(cuadrante22)
            }
            declararGanador()
            jugadaDeLaPc(jugadasRealizadas);    
        }
        
        cuadrante23.onclick = function(e) {
            console.log(cuadrante23.id);
            console.log(posicionesJugador);
            if (!posicionesJugador.includes(cuadrante23.id) && !jugadasRealizadas.includes(cuadrante23.id)) {
                posicionesJugador.push(cuadrante23.id)
                jugadasRealizadas.push(cuadrante23.id)
                renderizarX(cuadrante23)
            }
        
            declararGanador()
            jugadaDeLaPc(jugadasRealizadas);
        }
        cuadrante31.onclick = function(e) {
            console.log(cuadrante31.id);
            console.log(posicionesJugador);
            if (!posicionesJugador.includes(cuadrante31.id) && !jugadasRealizadas.includes(cuadrante31.id)) {
                posicionesJugador.push(cuadrante31.id)
                jugadasRealizadas.push(cuadrante31.id)
                renderizarX(cuadrante31)
            }
        
            declararGanador()
            jugadaDeLaPc(jugadasRealizadas);
        }
        cuadrante32.onclick = function(e) {
            console.log(cuadrante32.id);
            console.log(posicionesJugador);
            if (!posicionesJugador.includes(cuadrante32.id) && !jugadasRealizadas.includes(cuadrante32.id)) {
                posicionesJugador.push(cuadrante32.id)
                jugadasRealizadas.push(cuadrante32.id)
                renderizarX(cuadrante32)
            }
        
            declararGanador()
            jugadaDeLaPc(jugadasRealizadas);
        }
        cuadrante33.onclick = function(e) {
            console.log(cuadrante33.id);
            console.log(posicionesJugador);
            if (!posicionesJugador.includes(cuadrante33.id) && !jugadasRealizadas.includes(cuadrante33.id)) {
                posicionesJugador.push(cuadrante33.id)
                jugadasRealizadas.push(cuadrante33.id)
                renderizarX(cuadrante33)
            }
        
            declararGanador()
            jugadaDeLaPc(jugadasRealizadas);
        }
        
        
        // let contador = 0;
        function verificarSiGanoJugador(jugadasGanadoras,celdasJugador) {
            jugadasGanadoras.forEach(jugadaGanadora => {
                jugadaGanadora.forEach(jugada => {
                    celdasJugador.forEach(celda => {
                        if (jugadaGanadora.includes(celda) && contador < 3) {
                            contador++;
                        }
                    })
                    if (contador < 3) {
                        contador = 0;
                    }
                })
        
            })
            return contador
        }
        
        function verificarSiGanoLaPc(jugadasGanadoras,celdasMaquina) {
            jugadasGanadoras.forEach(jugadaGanadora => {
                jugadaGanadora.forEach(jugada => {
                    celdasMaquina.forEach(celda => {
                        if (jugadaGanadora.includes(celda) && contador2 < 3) {
                            contador2++;
                        }
                    })
                    if (contador2 < 3) {
                        contador2 = 0;
                    }
                })
        
            })
            return contador2
        }
    
        function declararGanador() {
            if (verificarSiGanoJugador(jugadasGanadoras,posicionesJugador) == 3) {
                textoResultado.innerText = 'Ganaste!!!'
                return 1;
            }
            if(verificarSiGanoLaPc(jugadasGanadoras,posicionesMaquina) == 3){
                textoResultado.innerText = 'Perdiste :('
                return 2;
            }
            if (jugadasRealizadas.length == 9) {
                textoResultado.innerText = 'Empataste :('
                return 0;
            }
        }
        
        
        function renderizarX(contenedor) {
            contenedor.innerHTML += '<i class="fas fa-times cross"></i>'
        }
        
        function renderizarO(contenedor) {
            contenedor.innerHTML += '<i class="far fa-circle circle"></i>'
        }
    
        function jugadaDeLaPc(jugadasRealizadas) {
            if (evitarQueLaPcSigaJugandoDemas() && posicionesMaquina.length < 4) {
                
                let jugadaElegida = Math.floor(Math.random() * 8) + 1
                existe = true;
                while (existe) {
                    if (!(jugadasRealizadas.includes(posiblesLugaresAElegir[jugadaElegida]))) {
                        console.log(posiblesLugaresAElegir[jugadaElegida]);
                        jugadasRealizadas.push(posiblesLugaresAElegir[jugadaElegida]);
                        posicionesMaquina.push(posiblesLugaresAElegir[jugadaElegida]);
                        existe = false
                    }
                    else{
                        jugadaElegida = Math.floor(Math.random() * 8) + 1
                    }
                }
                
                setTimeout(() => {
                    renderizaMaquina(posiblesLugaresAElegir[jugadaElegida])
                    declararGanador()
                }, 500);                
            }
        }
        
        
        function renderizaMaquina(id) {
            let contenedor = document.getElementById(id)
            renderizarO(contenedor)
        }

        

        function evitarQueLaPcSigaJugandoDemas() {
            if(verificarSiGanoJugador(jugadasGanadoras, posicionesJugador) == 3){
                return false;
            }else{
                return true;
            }
        }
    }
    empezarAJugar()

    boton.addEventListener('click', () => {
        
            reiniciarLosValores()
            empezarAJugar()
    })
    
    function reiniciarLosValores() {
        let iconos = document.querySelectorAll('i')
        console.log("La llamada funciona");
        iconos.forEach(icono => {
            icono.remove()
        })
        textoResultado.innerHTML = '';

    }

    
}



