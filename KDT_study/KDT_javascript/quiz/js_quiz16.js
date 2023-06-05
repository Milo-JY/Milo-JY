'use strict';

let n1, n2;
let tot = 0;

do {
    n1 = +prompt('작은수 :')
    n2 = +prompt('큰수 :')
} while (n1>=n2)

for (let i = n1; i <= n2; i++) {
    tot += i;
}

alert(`${n1} 부터 ${n2} 까지 합 : ${tot}`);



