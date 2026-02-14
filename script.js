function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function division(a,b){
    return a / b
}

function operate(operator, a, b){
    switch(operator){
        case "+":
            return add(a,b)
        
        case "-":
            return subtract(a,b)

        case "*":
            return multiply(a,b)
        
        case "/":
            return division(a,b)
    }
}

const display = document.querySelector(".display")
const numberBtns = document.querySelectorAll("button")
let operator = ""

numberBtns.forEach(button =>{
    button.addEventListener("click", () =>{
        if (display.textContent === "Cannot divide by 0"){
            display.textContent = ""
            operator = ""
        } 

        if (button.dataset.value === "equals" && !button.classList.contains("operator")){
            let op = display.textContent.match(/[+\-*\/]/)[0];
            let parts = display.textContent.split(/\+|\-|\*|\//)
            if (op === "/" && Number(parts[1]) === 0) {
                display.textContent = "Cannot divide by 0";
                return;
            }
            display.textContent = Math.round(operate(op,Number(parts[0]),Number(parts[1])))
            return
        }

        else if(button.dataset.value === "clear"){
            display.textContent = ""
        }

        else if (button.classList.contains("operator")){

            if (operator === ""){

                operator = button.dataset.value
                display.textContent += button.dataset.value
            } 

            else{

            let op = display.textContent.match(/[+\-*\/]/)[0];
            let parts = display.textContent.split(/\+|\-|\*|\//)
            if (op === "/" && Number(parts[1]) === 0) {
                display.textContent = "Cannot divide by 0";
                return;
            }
            display.textContent = Math.round(operate(op,Number(parts[0]),Number(parts[1])))
            operator = button.dataset.value
            display.textContent += button.dataset.value
            return

            }
            
        }
            
        else{

            display.textContent += button.dataset.value
        }
    })
})