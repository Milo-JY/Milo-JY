'use strict';


// for (초기식; 조건식(반복); 증감식) {
//     초기식 > 조건식 > 반복실행블럭 > 증감식
//     반복 실행 블럭; > 조건식 > 반복실행블럭 > 증감식
// }

// 반복(회전수) 결정 조건 : 1) 처음 2) 끝 3) 일정한 규칙


// 65 ~ 78
for (let i = 64; i < 78;) {
    i++;
    console.log(i); // 구하는식(현재)
}

// 13 ~ 49
for (let i = 13; i < 50;) {
    console.log(i); // 구하는식(현재)
    i++;
}

// 119 ~ 77
for (let i = 120; i > 77;) {
    i--;
    console.log(i); // 구하는식(현재)
}

// 29 ~ 48
for (let i = 28;;) {
    i++;
    if (i >= 49) break;
    console.log(i); // 구하는식(현재)
}

// ===========연습==========

// 20 ~ 45
for (let i = 19; i < 45;) {
    i++;
    console.log(i)
}

// 47 ~ 10
for (let i = 47; i > 9;) {
    console.log(i);
    i--;
}


// -10 ~ -25
for (let i = -9; i <= -24;) {
    i--;
    console.log(i);
}

// -46 ~ -3
for (let i = 47; i > 9;) {
    i--;
    console.log(i);
}

// 5 ~ 45
for (let i = 47; i > 9;) {
    console.log(i);
    i++;
}

// -55 ~ -79
for (let i = 47; i > 9;) {
    console.log(i);
    i--;
}