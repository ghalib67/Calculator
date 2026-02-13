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

numberBtns.forEach(button =>{
    button.addEventListener("click", () =>{
        if (button.dataset.value === "equals"){
            let operator = display.textContent.match(/[+\-*\/]/)[0];
            let parts = display.textContent.split(/\+|\-|\*|\//)
            display.textContent = operate(operator,Number(parts[0]),Number(parts[1]))
            return
        }
        else if(button.dataset.value === "clear"){
            display.textContent = ""
        }
        else{

            display.textContent += button.dataset.value
        }
    })
})