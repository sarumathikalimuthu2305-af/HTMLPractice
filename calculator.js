let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearAll() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let expression = display.value;

    try {
        let result = evaluateExpression(expression);
        display.value = result;
    } catch (e) {
        display.value = "Error";
    }
}

function evaluateExpression(exp) {
    let numbers = exp.split(/[\+\-\*\/]/).map(Number);
    let operators = exp.replace(/[0-9\.]/g, "").split("");

    // handle * and /
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "*" || operators[i] === "/") {
            let res =
                operators[i] === "*"
                    ? numbers[i] * numbers[i + 1]
                    : numbers[i] / numbers[i + 1];

            numbers.splice(i, 2, res);
            operators.splice(i, 1);
            i--;
        }
    }

    // handle + and -
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        result =
            operators[i] === "+"
                ? result + numbers[i + 1]
                : result - numbers[i + 1];
    }

    return result;
}
