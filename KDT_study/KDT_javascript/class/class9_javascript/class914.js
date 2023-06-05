'use strict';

function sum(n1, n2) {
    return n1 + n2;
}
function sub(n1, n2) {
    return n1 - n2;
}
function mul(n1, n2) {
    return n1 * n2;
}
function div(n1, n2) {
    return n1 / n2;
}

function calculator(n1, n2, op) {
    console.log(`연산결과 : ${op(n1, n2)}`);
}

calculator(10, 5, sum);
calculator(10, 5, sub);
calculator(10, 5, mul);
calculator(10, 5, div);

// =====람다식 적용버전

function calculator(n1, n2, op) {
    console.log(`연산결과 : ${op(n1, n2)}`);
}

calculator(10, 5, (n1, n2) => n1 + n2);
calculator(10, 5, (n1, n2) => n1 - n2);
calculator(10, 5, (n1, n2) => n1 * n2);
calculator(10, 5, (n1, n2) => n1 / n2);

// =====번잡하다!!!!!!!!!!

// function calculator(n1, n2, op) {
//     let result;

//     switch (op) {
//         case '+':
//             result = n1 + n2;
//             break;
//         case '-':
//             result = n1 - n2;
//             break;
//         case '*':
//             result = n1 * n2;
//             break;
//         case '/':
//             result = n1 / n2;
//             break;
//     }
//     console.log(`연산결과 : ${result}`);
// }

// calculator(10, 5, '+');
// calculator(10, 5, '-');
// calculator(10, 5, '*');
// calculator(10, 5, '/');