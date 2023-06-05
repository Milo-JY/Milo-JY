/*
작은수 : 1
큰수 : 10

1부터 10까지 합 : 55
*/

'use strict';

let max, min;


for (let i = min; i < max; i++) {
    sum += min
}
alert(`${min}부터 ${max}의 합 : ${sum}}`)




// 두개의 입력 값의 비교 결과를 모를 때

let inputMax;
let inputMin;
let max, min;
let sum = 0;

inputMax = +prompt('정수1 :');
inputMin = +prompt('정수2 :');

if (inputMax > inputMin) {
    max = inputMax;
    min = inputMin;
} else {
    max = inputMin;
    min = inputMax;
}

for (let i = min; i < max + 1; i++) {
    sum += i;
}

alert(`${min}부터 ${max}의 합 : ${sum}`)


// === 민수꺼(삼항)

let int1, int2;
let small, big;
let plusAll= 0;

int1 = +prompt(`정수1 : `);
int2 = +prompt(`정수2 : `);


small = int1 > int2 ? int2 : int1;
big = int1 > int2 ? int1 : int2;

for (let i = small ; i < (big + 1); i++) {
    plusAll += i;
}

alert(`${small} 부터 ${big} 까지 합 : ${plusAll}`);



// 정답!!!!!!!!!!!

/* 

작은수 : 1
큰수 : 10

1 부터 10 까지 합 : 55

*/

// let min, max;
// let tot = 0;

// min = +prompt('작은수');
// max = +prompt('큰수');

// for (let i = min; i <= max; i++) {
//     tot += i;
// }

// alert(`${min} 부터 ${max} 까지 합 : ${tot}`);

/* 

정수1 : 1
정수2 : 10

1 부터 10 까지 합 : 55

정수1 : 10
정수2 : 1

1 부터 10 까지 합 : 55

*/

let n1, n2;
let min, max;
let tot = 0;

n1 = +prompt('정수1');
n2 = +prompt('정수2');

if (n1 > n2) {
    min = n2, max = n1;
} else {
    min = n1, max = n2;
}

for (let i = min; i <= max; i++) {
    tot += i;
}

alert(`${min} 부터 ${max} 까지 합 : ${tot}`);