'use strict';

// =====<설계와 할당을 합친 경우>

// let ar = new Array(3);

// for (let i = 0, v = 1; i < ar.length; i++) {
//     ar[i] = new Array(2);
//     for (let j = 0; j < ar[i].length; j++) {
//         ar[i][j] = v++;
//     }
// }


// for (let i = 0; i < ar.length; i++) {
//     for (let j = 0; j < ar[i].length; j++) {
//         document.write(`${ar[i][j]}`);
//     }
//     document.write('<br/>');
// }
// 결론 : 설계와 할당을 합치는 경우에는 열 만듬과 동시에 할당 작업이 이뤄져서
//       만약, 2열부터 값을 역으로 넣는 경우에 할당 되어있는 2열이 없어 불가능한 상황이 나온다. 


// =====<정상적인 구조>

let ar = new Array(3);

for (let i = 0, v = 1; i < ar.length; i++) {
    ar[i] = new Array(2);
}

for (let i = 0, v = 1; i < ar.length; i++) {
    for (let j = 0; j < ar[i].length; j++) {
        ar[i][j] = v++;
    }
}


for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar[i].length; j++) {
        document.write(`${ar[i][j]}`);
    }
    document.write('<br/>');
}