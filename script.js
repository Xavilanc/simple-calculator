const firstValue = parseInt(prompt("Entrez une valeur comprise entre 1 et 100"));
        const secondValue = parseInt(prompt("Entrez une valeur comprise entre 1 et 100"));
        const operator = "*";
        switch(operator) {
            case "+":
                console.log(firstValue + secondValue);
                break;
            case "-":
                console.log(firstValue - secondValue);
                break;
            case "/":
                console.log(firstValue / secondValue);
                break;
            case "*":
                console.log(firstValue * secondValue);
                break;
            default:
                console.log("Invalid Operator");
        }