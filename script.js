let calculer = document.getElementById("calculer");
let result = "";
calculer.addEventListener("click", function(){
    const firstValue = parseInt(document.getElementById("firstValue").value);       
    const secondValue = parseInt(document.getElementById("secondValue").value); 
    const operator = document.getElementById("operator").value;  
    switch(operator) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '/':
            result = firstValue / secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        default:
            result = console.log("default");
    }
    resultContainer = document.getElementById("result");
    resultContainer.innerHTML = result;
});
