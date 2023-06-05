// < 밑수와 지수 >

'use strict';


//1,1,2,3,5,8,13 ~…. 100번째 항까지의 합

// ===1번

// let n1, n2;

// let now;
// let tot = 2; //2항 까지의 합

// n1 = 1, n2 = 1;

// for (let i = 3; i <= 100; i++) { //3항부터 100항까지 반복
//     now = n1 + n2;
//     tot += now;
//     n1 = n2;
//     n2 = now;
// }

// console.log(tot);

// // =====2번


// // if ((n1 = +prompt('밑수 :')) >= 0) {
// //     if ((n2 = +prompt('지수 :')) >= 0) {
// //         for (let i = 0; i < n2; i++) {
// //             tot *= n1;
// //         }
// //     }
// // }


// // =====풀이

// //1,1,2,3,5,8,13 ~…. 100번째 항까지의 합
// let un, up;
// let p = 1;

// for (; ;){
//     un = +prompt('밑수 : ');

//     if (un>=0) {
//         up = +prompt('지수 : ');

//         if (up >= 0) {
//             break;
//         }
//     }

//     alert('음수가 입력되었습니다. 재입력 바랍니다.');
// }

// for (let i = 0; i < up; i++) {
//     p *= un;
// }

// alert(`${un}의 ${up}승은 ${p}입니다.`);


// 1, 1, 2, 3, 5, 8.... 100번째 항까지의 모든 합을 구하시오.
let tot = 2;
let current, first = 1, second = 1;

for (let i = 0; i < 98; i++) {
    current = first + second;
    tot += current;
    first = second;
    second = current;
}

console.log(tot);


