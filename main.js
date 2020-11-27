"use strict";

const operation = (operand1, operator, operand2) => {

    let operations = {
        '+' : operand1 + operand2,
        '-' : operand1 - operand2,
        '*' : operand1 * operand2,
        '/' : operand1 / operand2,
    }

    return operations[operator]
}



