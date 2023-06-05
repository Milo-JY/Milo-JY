// 

'use strict'

let num;
let sum = 0;

do {
    num = +prompt('숫자를 입력하세요(끝낼 때 0) : ');
    sum = sum + num;
} while (num != 0);
// 이 구조의 문제점은 마지막에 0이 아닌 값을 입력 시, 10줄의 실행문이 한번 더 실행되어 sum 결과가  정확한 합계 결과가 나오지 않는 것이다.(연산 추가로 인한 메모리 낭비까지...)

// 해결법 ---> 무한루프 구조로 변형해야한다.

alert(`총 합계 = ${sum}`);


// ===무한루프로 해결!

do {
    num = +prompt('숫자를 입력하세요(끝낼 때 0) : ');
    if (num === 0) break;
    sum = sum + num;
} while (1);
alert(`총 합계 = ${sum}`);