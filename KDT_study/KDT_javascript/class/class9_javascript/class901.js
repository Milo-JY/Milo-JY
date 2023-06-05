'use strict';

/* 
    함수 : 복잡하거나 반복되는 작업을 하나의 명령어로 통합하여 실행을 단순화.

    함수의 동작 기능 : 출력(return)(웹에서 데이터 입력 받아 출력 가능) - 처리 - 입력(매개변수)

        function 함수명(매개변수) {
            함수 실행 블럭 ;
        }

        ** 함수 실행시 마지막에는 반드시 호출부로 시점이 되돌아옴.
*/

// 아래 매개변수는 새로운 지역변수이고, 전역 변수인 n1,n2를 입력 받은 매개변수이다.
function fromToSum(n1, n2) {
    
    let tot = 0;
    
    for (let i = n1; i <= n2; i++) {
        tot += i;
    }
    
    console.log(`${n1} 부터 ${n2} 까지 누적합 : ${tot}`);
}

let n1 = 1, n2 = 10;

fromToSum(n1, n2);   // 실인수 (변수를 전달 받으면 주소값(변수)가 아닌 값부가 읽힘)

// ==========================함수 기초^

function fromToSum(n3, n4) {
    
    let tot = 0;
    
    for (let i = n3; i <= n4; i++) {
        tot += i;
    }

    // returtn 변수 를 이용해 외부 출력으로 반환해주는 기능
    return tot;
}

let n3 = 1, n4 = 11;

console.log(`${n3} 부터 ${n4} 까지 누적합 : ${fromToSum(n3, n4)}`);


/* 
    
*/

