// < 교환(Swapping) 적용 방법>

/*

작은수 : 1
큰수 : 10

1 부터 10 까지 합 : 55

*/


let n1, n2;
let min, max;
let tot = 0;

n1 = +prompt('정수1');
n2 = +prompt('정수2');

if (n1 > n2) {
    let t = n1;

    n1 = n2, n2 = t;
}

for (let i = min; i <= max; i++) {
    tot += i;
}

alert(`${min} 부터 ${max} 까지 합 : ${tot}`);