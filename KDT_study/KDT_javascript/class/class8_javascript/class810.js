// <역방향 순서표 만들기>

'use strict';

let ar2 = new Array(5);
for (let i = 0; i < ar2.length; i++) {      
    ar2[i] = new Array(5);
}

for (let i = 4, v = 1; i >= 0; i--) {
    for (let j = 4; j >= 0 ; j--) {
        ar2[j][i] = v++;
    }
}

for (let i = 0; i < ar2.length; i++) {
    for (let j = 0; j < ar2[i].length; j++) {
        let result = ar2[i][j];
        document.write(`${result/10>=1?'':'&nbsp;'}${result} `);
    }
    document.write('<br/>');
}