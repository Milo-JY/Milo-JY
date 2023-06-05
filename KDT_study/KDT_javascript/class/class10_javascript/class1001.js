'use strict';

let name = '박성연';
let age = 22;

const teacher1 = {
  name: name,         // key부분의 name은 내부적으로 문자열로 변환된 'name'으로 변환되어 처리되므로
  age: age,           // 외부 전역 변수(name)에 영향을 받지 않지만,   value 부분의 name은 외부 전역
};                      // 변수 name에 저장된 값을 읽어들이고 age도 동일하게 적용.
//                      // ( js에서는 string도 참조형이 아닌 기본형임에 주의. )
console.log(teacher1);
console.log();


// <단축 프로퍼티>
// 프로퍼티 단축.
const teacher2 = {
  name,               // 위와 같이 key와 value가 동일한 경우 당행과 같이 단축 문법 제공.
  age,
};

console.log(teacher2);