import { debounce, isNumeric } from '../common/common.js'

const inputNumber = document.querySelector("#inputNumber");
const outputNumber = document.querySelector("#outputNumber");
const loadingItem = document.querySelector(".loading")
const hiddenClass = "hidden"

function fibonacciArr(num){
    const fiboArr = Array(num).fill(0)
    fiboArr.forEach(
        (_, pos) => {
            if(pos === 0) fiboArr[pos] = 0;
            else if(pos === 1) fiboArr[pos] = 1;
            else fiboArr[pos] = fiboArr[pos - 1] + fiboArr[pos - 2];
        }
    )
    return fiboArr;
}


inputNumber.addEventListener(
    "keyup", 
    debounce(
        (e) => {
            loadingItem.classList.add(hiddenClass)
            const value = e.target.value;
            const parseValue = parseInt(value);
            const fiboArray = fibonacciArr(parseValue)
            outputNumber.textContent = fiboArray.join(", ")
        },
        (e) => {
            loadingItem.classList.remove(hiddenClass)
            if(!isNumeric(e.target.value)){
                loadingItem.classList.add(hiddenClass)
                outputNumber.textContent = "Numero invalido"
                throw new Error("Error")
            }
        }
    )
)