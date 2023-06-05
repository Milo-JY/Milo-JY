'use strict'

/* 
    js 에서는 모든 원시값은 기본형 변수의 구조를 가지고 그외 기본형이 아닌
    자료형은 모두 참조형 변수 구조.
*/
let str = 'string';
let a = [1, 2];

function callByValue(str) {
   str = 'new string';
}

function callByReference(a) {
   a[0] = 5;
}

callByValue(str);
console.log(str);


callByReference(a);
console.log(a);
