'use strict';

// let ar = [1, 2, 3, 4, 5];

// console.log(ar);

// for (let i = 0; i < ar.length; i++) {
//     ar[i] += 1;
// }

// console.log(ar);

/* 
    점수를 5개만 입력받아 점수가 80 이상인 사람들 점수 출력.
*/

// let sc = new Array(5);  // 0, 90
// let ix = new Array(5);  // [2, 4, un]

// for (let i = 0, j = 0; i < sc.length; i++) {
//     sc[i] = +prompt(`${i + 1}번째 점수 : `)

//     if (sc[i] >= 80) {
//         ix[j++] = i;
//     }
// }

// for (let i = 0; ix[i] != undefined; i++) {
//     alert(sc[ix[i]]);
// }

// 복합 대입 연산자

let n = 5;

n = n + 1;      //      n += 1

console.log(n);


++n;        //  전위형

console.log(n);

n++;        //  후위형

console.log(n); // 8


console.log(++n);      //  전위형 : 먼저 연산하고 그 결과를 반환
console.log(n++);      //  후위형 : 먼저 그 결과를 반환하고 나중에 연산
console.log(n);














