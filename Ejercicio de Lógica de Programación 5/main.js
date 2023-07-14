

class Game {

    // Numeero de celdas 
    cells = 100;
    // selector para el tablero 
    selectorTable = "div.table"
    // selector para el span de intentos 
    selectorAttempts = "#attempts"
    // Variable para saber si el jugador gano 
    win;
    // variable para el numero secreto 
    secretNumber;
    // variable para el numero de intentos 
    attempts;

    // Funcion para renderizar las celdas del tablero 
    renderCells(){
        
        // Obtenermos el tablero y lo limpiamos 
        const table = document.querySelector(this.selectorTable);
        table.innerHTML = "";

        // Iteramos por el numero de celdas 
        for(let i = 1; i <= this.cells; i++){
            // Creamos un elemento celda 
            const numberComponent = document.createElement("span");
            // Agregamos la clase con estilos
            numberComponent.classList.add("number")
            // Agregamos un onclick para comprobar por cada numero 
            numberComponent.onclick = (e) => this.checkValue(e, i);
            // Le agregamos el numero 
            numberComponent.textContent = `${i}`;
            // Lo agregamos al tablero 
            table.append(numberComponent);
        }

    }

    // Cambiar el estado de los intento 
    changeAttempts(){
        const element = document.querySelector(this.selectorAttempts)
        element.textContent = `Intentos: ${this.attempts}`
    }

    // Verificar si el numero es correcto 
    checkValue(e, num){

        // Eliminamos el evento y si ya gano que no haga nada 
        e.target.onclick = null;        
        if(this.win) return;
        
        // Creamos un color dependiendo de que tan cerca esta del numero correcto 
        const color = this.getColor(num);

        // Le agregamos el color al fondo del elemento 
        e.target.style.backgroundColor = `${color}`
        
        // Agregamos un intento a la variavble
        this.attempts++;
        // Cambiamos el estado de los intentos
        this.changeAttempts()


        // Comprobamos si el numero es correcto 
        if(num === this.secretNumber){
            // Si lo es cambiamos el estado de win y lanzamos una alerta 
            this.win = true;
            alert("Lo lograste");
        }

    }

    // Funcion para crear un color
    getColor(num) {
        
        // Porcentaje de cercania con el numero correcto 
        const value = Math.round((Math.abs(this.secretNumber - num) / this.cells)* 100)
        const percentage = Math.sqrt(~~value) * 10;

        // Convertir el número a un valor entre 0 y 255 (rango válido para RGB)
        const valorRojo = Math.round(percentage * 255 / 100);
        const valorVerde = Math.round((100 - percentage) * 255 / 100);
        
        // Convertir los valores a formato hexadecimal
        const componenteRojo = valorRojo.toString(16).padStart(2, '0');
        const componenteVerde = valorVerde.toString(16).padStart(2, '0');
        
        // Combinar los componentes y devolver el color hexadecimal
        const colorHexadecimal = '#' + componenteRojo + componenteVerde + '00';
        return colorHexadecimal;
    }
      

    // Funcion para asignar un numero aleatorio a nuestro secret number 
    getRandomNumber(){

        this.secretNumber = Math.round(Math.random() * this.cells)

    }

    // Para correr nuestro juego 
    run(){

        this.resetGame();

    }

    // Para reseterar el juego
    resetGame(){
        this.win = false;
        this.attempts = 0;
        this.getRandomNumber();
        this.renderCells();
        this.changeAttempts()
        console.log(this.secretNumber)
    }

}

// Creamos una instancio de game 
const game = new Game();

// Asignamos al boton la funcion para arrancar el juego 
document.querySelector("#startBtn").addEventListener("click", () => game.run())
