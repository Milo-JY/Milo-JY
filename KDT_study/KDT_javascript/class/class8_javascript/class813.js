'use strict'


// =======================2차원배열 + 스위치
let ar1 = [1, 2, 3, 4, 5];
let ar2 = [2, 2, 3, 4, 5];
let ar3 = [3, 2, 3, 4, 5];
let ar4 = [4, 2, 3, 4, 5];
let ar5 = [5, 2, 3, 4, 5];

// ar1 ~ 5까지 반복
for (let j = 0, ref; j < 5; j++) {
    // 변수 초기화부분
    let joinEl = ''


    console.log(`< ar${j + 1} 배열 >`);
    switch (j) {
        case 0:
            ref = ar1;
            break;
        case 1:
            ref = ar2;
            break;
        case 2:
            ref = ar3;
            break;
        case 3:
            ref = ar4;
            break;
        case 4:
            ref = ar5;
            break;
    }

    for (const i of ref) {
        joinEl += i + ', ';
    }
    console.log(joinEl);
}

// ===========================4차원배열

let ar1 = [1, 2, 3, 4, 5];
let ar2 = [2, 2, 3, 4, 5];
let ar3 = [3, 2, 3, 4, 5];
let ar4 = [4, 2, 3, 4, 5];
let ar5 = [5, 2, 3, 4, 5];
// ar1~5까지의 배열 변수들을 또 하나의 4차원 배열 변수로 지정.
let ar = [ar1, ar2, ar3, ar4, ar5];

// ar1 ~ 5까지 반복
for (let j = 0, ref; j < 5; j++) {
    // 변수 초기화부분
    let joinEl = ''


    console.log(`< ar${j + 1} 배열 >`);

    // ar을 j만큼 반복
    for (const i of ar[j]) {
        joinEl += i + ', ';
    }
    console.log(joinEl);
}