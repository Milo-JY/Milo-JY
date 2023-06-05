`use strict`;

let ar = [1, 2, 3, 4, 5];

console.log(ar);

for (let i = 0; i < ar.length; i++) {
    ar[i] += 1;
}

console.log(ar);


// ====================================================
// 점수를 5개만 입력받아 점수가 80 이상인 사람들 점수 출력.


let sc = new Array(5); // 빈 배열 생성시, 생성자 new 입력, 배열 크기 입력.
let ix = new Array(5);

console.log(sc.length); // 크기 확인

for (let i = 0, j = 0; i < sc.length; i++) {
    sc[i] = prompt(`${i+1}번째 점수 : `);

    if(sc[i] >= 80) {
        ix[j++] = i;
    }
}

document.write(ix);

for (let i = 0; ix[i] != undefined; i++) {
    alert(sc[ix[i]]);
}

// <순서도>
// sc 변수선언 -> 반복문1 설계(sc length만큼의 반복증감 실행블럭 생성)
// -> 반복문 1, 입력값 받는 prompt의 변수(sc[i]) 선언
