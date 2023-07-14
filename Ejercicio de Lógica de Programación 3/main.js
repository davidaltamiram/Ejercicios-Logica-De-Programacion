import { debounce, isNumeric } from "../common/common.js"
const inputNumber = document.querySelector("#inputNumber")
const outputNumber = document.querySelector("#outputNumber")
const loadingItem = document.querySelector(".loading")

// Recursion de cola para funcion factorial 
function factorial(num, rest){
    // Si el valor no es mayor a 1, devolver siempre -1 
    if(num < 1) return -1;
    // Si el numero es 1, devolver 1 multiplicado por el resto de numeros 
    if(num == 1){
        // Si no existe rest, devolver 1
        if(!rest) return 1;
        // Multiplicar por rest 
        return 1 * rest;
    };
    // Si no existe rest, devolver solo el numero base 
    if(!rest) return factorial(num - 1, num)
    // Recursion de cola 
    return factorial(num - 1, num * rest)
}

inputNumber.addEventListener("keyup",
    debounce(
        (e) => {
            loadingItem.classList.add("hidden")
            const value = e.target.value;
            const factorialValue = factorial(value);
            outputNumber.textContent = `${factorialValue}`
        },
        (e) => {
            loadingItem.classList.remove("hidden")
            if(!isNumeric(e.target.value)) {
                loadingItem.classList.add("hidden")
                outputNumber.textContent = "No es un numero valido";
                throw new Error("Error");
            }
        }
    )
)