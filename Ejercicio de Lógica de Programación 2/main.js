// Input y output de temparatura 
const temparatureInput = document.querySelector("input#temparatureInput")
const temparatureOutput = document.querySelector("span#tempOutput")

// Span con el prefix de la temperatura 
const spanSignInput = document.querySelector("#signInput")
const spanSignOutput = document.querySelector("#signOutput")

// Store para almacenar los signos de entrada y salida 
let actualSignInput;
let actualSignOutput;

// Container con los span de salida 
const outpuContainer = document.querySelector("#outputContainer")

// Funcion para verificar que es un numero
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


const tempDictionary = {
    farenheit: {
        sign: "F°",
        toKelvin: val => ((val - 32) * (5/9)) + 273.15,
        fromKelvin: val => ((val - 273.15) * (9/5)) + 32
    },
    celsius: {
        sign: "C°",
        toKelvin: val => val + 273.15,
        fromKelvin: val => val - 273.15

    },
    kelvin: {
        sign: "K°",
        toKelvin: val => val, // ( ͡° ͜ʖ ͡°) ➜ No se burlen
        fromKelvin: val => val // ( ͡° ͜ʖ ͡°) ➜ No se burlen
    }
}

const changeInput = () => {

    // Verificamos que tenemos un valor en input, o nuestros signos no tienen valor aun
    if(!temparatureInput.value || !actualSignInput || !actualSignOutput){
        // Ocultar el container de salida 
        outpuContainer.classList.add("hidden");
        return;
    }

    // Retiramos la clase hidden de container de salida 
    outpuContainer.classList.remove("hidden");

    // Obtener el valod del input 
    const value = temparatureInput.value;

    // Verificamos que el valor es un numero valida 
    if(!isNumeric(value)){
        // Devolver en salida que el input no es valido 
        temparatureOutput.textContent = "Entrada no valida"
        // Ocultar el span de signo de temperatura 
        spanSignOutput.classList.add("hidden")
        return;
    }
     
    // Remover la clase hidden del span de signo de temperatura 
    spanSignOutput.classList.remove("hidden")

    if(actualSignInput === actualSignOutput){
        // Son lo mismo asi que no importa 
        temparatureOutput.textContent = `${value}`
        return;
    }

    // Convertir el el valor del input y convertirlo a numero 
    const temp = parseFloat(value)
    // Pasar el valor del inout a kelvin 
    const inputTemp = tempDictionary[actualSignInput].toKelvin(temp)
    // Pasar el valor de kelvin al valor de salida 
    const outputTemp = tempDictionary[actualSignOutput].fromKelvin(inputTemp)
    // Imprimir la temperatura en el output 
    temparatureOutput.textContent = `${outputTemp.toFixed(2)}`

}

// Ejecutar la funcion changeInput cada que se ingresa datos al input 
temparatureInput.addEventListener('input', changeInput)

function changePrefix(value, spanElement){
    // Obtenermos el signo de nuestro diccionario 
    const prefix = tempDictionary[value]?.sign
    // Lo incorporamos al sapn pasada por parametro
    spanElement.textContent = `${prefix}`
}

function validateSign (radioElement, spanElement, signStore){
    // Agregar el evento al cambiar el valor del radio element
    radioElement.addEventListener('change', () => {
        // Actualizar variable para almacenar el signo
        const currentValue = radioElement.value;
        signStore(currentValue);
        // Funcion para cambiar el signo 
        changePrefix(currentValue, spanElement)
        // actualizar los datos del input 
        changeInput()
    })
    // Si el input ya tiene check, colocar el signo del imput al span 
    if(radioElement.checked){
        // Actualizar variable para almacenar el signo
        const currentValue = radioElement.value;
        signStore(currentValue);
        // Funcion para cambiar el signo 
        changePrefix(radioElement.value, spanElement)
        changeInput()
    }
}

// Obtener todos los elementos input y radio y ejecutar la funcion validateSign 
document.querySelectorAll('[name="input"]')
    .forEach(el => validateSign(el, spanSignInput, value => actualSignInput = value ))

document.querySelectorAll('[name="output"]')
    .forEach(el => validateSign(el, spanSignOutput, value => actualSignOutput = value))
