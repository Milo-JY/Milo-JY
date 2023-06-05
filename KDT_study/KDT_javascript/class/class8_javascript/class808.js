'use strict';

// let ar1 = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
// ];

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 2; j++) {
//         document.write(`${ar1[i][j]} `);
//     }
//     document.write('<br/>');
// }

let ar2 = new Array(3);
for (let i = 0; i < ar2.length; i++) {      
    ar2[i] = new Array(2);
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

// let ar2 = new Array(3);
// for (let i = 0, v = 1; i < ar2.length; i++) {      
//     ar2[i] = new Array(2);
//     for (let j = 0; j < ar2[i].length; j++) {
//         ar2[i][j] = v++;
//     }
// }

// for (let i = 0; i < ar2.length; i++) {
//     for (let j = 0; j < ar2[i].length; j++) {
//         document.write(`${ar2[i][j]} `);
//     }
//     document.write('<br/>');
// }
















