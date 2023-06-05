// 선택문

switch (평가할값(변수, 상수)) {
    // 평가할 값이 선택값인지 검사
    case 선택값1: // 상수, 변수, 식
        실행문;
        break;
    case 선택값2:
        실행문;
        break;
    case 선택값3:
        실행문;
        break;
    default: // case들이 해상 안되는 경우에 default 적용(생략 가능)
        실행문;
        break;
}

// if : 넓은 연속적인 범위를 측정.
// switch : 좁거나 비연속적인 범위를 측정.(숫자 3개 정도까지 & 그리고 문자열 검색 시.)


'use strict';

let score = +prompt('등수 : ');
let rank;
let firstClass = 1;
let secondClass = 2;
let thirdClass = 3;

switch (score) {
    case firstClass:                 // 자바나 C언어와 달리 case문 뒤에 변수나 식의 지정이 가능.
        rank = "최우수상";             // 단, swicth문의 평가값과 case문의 선택값은 동치 비교(===)로
        break;                       // 처리되므로 타입에 대한 주의 필요.
    case secondClass:
        rank = "우수상";
        break;
    case thirdClass:
        rank = "장려상";
        break;
    default:
        rank = "수상자 아님!!";
        break;
}

alert(rank);