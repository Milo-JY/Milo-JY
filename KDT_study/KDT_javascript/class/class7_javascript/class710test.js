'use strict'

const str1 = '   Removes Whitespace   from\n';
const str2 = 'both ends of a String';

// 1. string.trim() : string

// 기능 :  문자열 양쪽 끝의 공백 제거 후 반환
// 대상 : space, tab, NBSP, 개행문자(\n)

// 연습 : 
    // console.log(str1);
    // console.log(str1.trim());
    // console.log(str1.trim() + str2.trim());


// 2. string.trimStart(): string

// 기능 :  문자열 양쪽 끝의 공백 제거 후 반환
// 대상 : space, tab, NBSP, 개행문자(\n)

// 연습 : 


// console.log(str1.trimStart() + str2);
// console.log(str1.trimEnd() + str2);


// console.log(str1.toLowerCase());
// console.log(str1.toUpperCase());
// console.log(str1.repeat(2));


const str4 = 'Uses a regular expression';

console.log(str4.split());

console.log(str4.split(''));

console.log(str4.split('', 4));
console.log();

console.log(str4.split(' '));
console.log(str4.split(' ', 2));

console.log(str4.split(' ')[2]);

console.log(str4.length);

console.log(str4.split(' ')[]);

