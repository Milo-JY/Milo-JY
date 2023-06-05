'use strict';

let ar1 = [1, 2, 3, 4, 5]

for (let i = 0; i < ar1.length; i++) {
    console.log(ar1[i]);
}
console.log('-----------------------');

// for (요소값변수 of 배열참조) {

// }

for (let e of ar1) {
    e = 5;
}

for (const e of ar1) {
    console.log(e);
}