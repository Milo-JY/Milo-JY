'use strict';

let age = 20

if (age >= 20) {
    console.log("당신은 성인이다")
}

let score = 70

console.log(score >= 90 ? "잘했어" : "더 열심히해");

// console.log(score > 90 ? score = 80 : score = 70);

function aaa () {
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
}

console.log (aaa());
