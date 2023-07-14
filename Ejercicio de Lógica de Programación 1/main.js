// Valores definidos
const numeroElementos = 3

// Containers
const [
    containerInput,
    containerOutput,
    containerReverse
] = [
    "#input",
    "#sort-output",
    "#reverse-output"
].map(selector => document.querySelector(selector))

// Resetar el array y pedirlo de nuevo
const resetBtn = document.querySelector("#reset")

// Funcion para verificar si un dato es un numero
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// Creacion de una carta con un valor y retornar el elemento
function crearCarta(num){
    const card = document.createElement("div")
    
    card.innerText = `${num}`
    card.classList.add("card")

    return card
}

// Funcion para obtener valores numericos y devolver un array 
function getNumberArray(){
    // El array 
    let miNumbers = [];
    // Salir del bucle hasta que el array tenga la longitud desseada 
    while(miNumbers.length < numeroElementos){
        // Prompt para obtener el numero 
        const value = prompt(`Ingrese un numero (faltan ${numeroElementos - miNumbers.length}):`)

        // Verificar si es no es un numero
        if(!isNumeric(value)){
            alert(`El numero ${value}, no es un numero valido`)
            continue;
        }
        // Ingresar el numero al array 
        miNumbers.push(parseInt(value))
    }
    // Al salir del bucle devolver el array 
    return miNumbers
}

function run(){
    
    // Obtener el array generados por prompt, ordenarlos y invertirlos 
    const arrayNumeros = getNumberArray()
    const sortNumeros = arrayNumeros.toSorted()
    const reverseNumeros = arrayNumeros.toSorted().toReversed()

    // Creando cartas
    const cardItems = arrayNumeros.map(num => crearCarta(num))
    const cardItemsSorted = sortNumeros.map(num => crearCarta(num))
    const cardItemsReversed = reverseNumeros.map(num => crearCarta(num))

    // Limpiando los container 
    containerInput.innerHTML = "";
    containerOutput.innerHTML = "";
    containerReverse.innerHTML = "";

    // Ingresar los elemmentos del array de elementos 
    cardItems.forEach(el => containerInput.append(el))
    cardItemsSorted.forEach(el => containerOutput.append(el))
    cardItemsReversed.forEach(el => containerReverse.append(el))

}

// Correr la funcion ejecutora
run()

// Volver a ejecutar el codigo con el boton reset 
resetBtn.addEventListener('click', run)