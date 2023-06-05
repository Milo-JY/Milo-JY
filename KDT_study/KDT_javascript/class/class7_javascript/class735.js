'use strict';

// 학생수를 입력받고 그 학생수 만큼 점수들을 입력받아서
// 최대값, 최소값을 구할거야. ( 점수 0 ~ 100 )

// 비교 입력 시, 변하는 변수를 왼쪽 - 대체적으로 고정이 되는 변수를 오른쪽에 배치
// 예) i(변하는 변수) < stCnt(고정되는 변수),  sc > max,  sc < min


let stCnt;
let sc;
let max = 0, min = 100;

stCnt = +prompt('학생수 : ');

min = max = sc = +prompt(`1번째 학생 점수`)

for (let i = 1; i < stCnt; i++) {
    sc = +prompt(`${i + 1}번째 학생 점수`);

    max = Math.max(sc, max);
    min = Math.min(sc, min);

    if(sc > max) max = sc;
    if(sc < min) min = sc;
}

alert(`최대값 : ${max}, 최소값 : ${min}`);


console.log(Math.max(90, 60, 80, 70, 50))
console.log(Math.min(90, 60, 80, 70, 50))