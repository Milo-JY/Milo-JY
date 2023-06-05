// <불규칙 배열구조 만들기>

'use strict';

let ar2 = new Array(4);
// 변수 추가 : arSize -> 열 숫자 종료
let arSize = [2, 4, 3, 6];
for (let i = 0; i < ar2.length; i++) {      
    // 열 지정 부분에 arSize를 입력.
    ar2[i] = new Array(arSize[i]);
}

for (let i = 0, v = 1; i < ar2.length; i++) {
    for (let j = 0; j < ar2[i].length; j++) {
        ar2[i][j] = v++;
    }
}

for (let i = 0; i < ar2.length; i++) {
    for (let j = 0; j < ar2[i].length; j++) {
        document.write(`${ar2[i][j]} `);
    }
    document.write('<br/>');
}