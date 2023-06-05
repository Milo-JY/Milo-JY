// if (조건식) {
//     참 실행 블럭;
// } else {
//     거짓 실행 블럭;
// }


// if (조건식) {
//     참 실행 블럭;
// }


// if (조건식) {
//     참 실행 블럭;
// } else if (조건식) {
//     거짓 실행 블럭;
// } else if (조건식) {
//     거짓 실행 블럭;
// } else {
// }


'use strict';

let age = 19;

if (age >= 20) {
    console.log("당신은 성인이다");
} else {
    console.log("당신은 미성년자다");
}

if (age >= 20) {
    console.log("당신은 성인이다");
}

let score = 99;

if (score >= 90) {
    console.log("A등급");
} else if (score >= 80) {
    console.log("B등급");
} else if (score >= 70) {
    console.log("C등급");
} else if (score >= 60) {
    console.log("D등급");
} else {
    console.log("F등급");
}

// console.log(if (score > 90) { "이바보야" });

/* 
    < 삼항 조건 연산자 >

    형식    :       조건식  ?   참실행 : 거짓실행
*/

console.log(score > 90 ? "이바보야" : "개안어");

console.log(score > 90 ? score = 80 : score = 70);

console.log(score);