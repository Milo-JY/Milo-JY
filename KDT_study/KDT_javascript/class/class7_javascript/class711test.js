'use strict';

const idx = '012345678901234567890';
const str = 'both ends of a String';

// console.log(str.startsWith('both'));
// console.log(str.startsWith('ends'));
// console.log(str.startsWith('ends', 5));
// console.log(str.endsWith('String'));
// console.log(str.includes('of'));

// console.log(str.indexOf('t'));
// console.log(str.indexOf('t', 5));
// console.log(str.lastIndexOf('t'));
// console.log(str.substring(3));


// for (let ix = 0, findIx; ;) {
//     findIx = str.indexOf('t', ix);
//     if (findIx == -1) break;

//     console.log(findIx);
//     ix = findIx + 1;
// }


// for (let ix = 0, findIx; ;) {
//     findIx = str.indexOf('S', ix)
//     if ( findIx == -1) break;

//     console.log(findIx);
//     ix = findIx + 1
// }


// console.log('A'.codePointAt());
// console.log('ABC'.codePointAt(1));

// console.log(String.fromCharCode(67));
// console.log(String.fromCharCode(98, 99));
// console.log();


// 소문자 a가 유니코드가 대문자 A보다 높기 때문에, 소문자에서 대문자를 뺀 거리를 다른 알파벳에 대입해도 거리가 같다. 아래는 그 거리를 dis라는 변수에 그 거리만큼의 값을 넣어주는 작업이다.
const dis = 'a'.codePointAt() - 'A'.codePointAt();


let input = 't';
// t를 input에 할당해주고,
let lowerCode = input.codePointAt();
// t에 대한 유니코드를 lowerCode에 다시 할당.

console.log(String.fromCharCode(lowerCode - dis))




// 
// codePointAt, fromCodePoint 메서드를 이용한 대소문자 변환.
// 

