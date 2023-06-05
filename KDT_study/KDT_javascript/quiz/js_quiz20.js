'use strict';

// full-box에 회전수 적용 버전

// let scale = 5;
// let ar = new Array(scale)
// let rotation = +prompt('회전수를 입력하시오.');

// for (let i = 0; i < ar.length; i++) {
//     ar[i] = new Array(scale);
// }

// if (rotation = 1) {

// }
// let ro2 = ;
// let ro3 = ;


// for (let i = 0, v = 1; i < ar.length; i++) {
//     for (let j = 0; j < ar[i].length; j++) {
//         ar[i][j] = v++;
//     }
// }



// else if (rotation % 4 === 1) {
//     // ==1회전
//     for (let i = 4, v = 1; i >= 0; i--) {
//         for (let j = 0; j < ar[i].length; j++) {
//             ar[j][i] = v++;
//         }
//     }
// } else if (rotation % 4 === 2) {
//     // ==2회전
//     for (let i = 0, v = 1; i < ar.length; i++) {
//         for (let j = 4; j >= 0; j--) {
//             ar[j][i] = v++;
//         }
//     }
// } else if (rotation % 4 === 3) {
//     // ==3회전
//     for (let i = 4, v = 1; i >= 0; i--) {
//         for (let j = 4; j >= 0; j--) {
//             ar[i][j] = v++;
//         }
//     }
// }


// for (let i = 0; i < ar.length; i++) {
//     for (let j = 0; j < ar[i].length; j++) {
//         let result = ar[i][j];

//         document.write(`${result/10>=1?'':'&nbsp;'}${result} `);
//     }
//     document.write('<br/>');
// }


// =====정답풀이


let spin;
let dataAr, tempAr;

spin = +prompt('회전수 : ');

spin %= 4;

dataAr = new Array(5);
tempAr = new Array(5);

for (let i = 0; i < 5; i++) {
    dataAr[i] = new Array(5);
    tempAr[i] = new Array(5);
}

for (let i = 0, v = 1; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        dataAr[i][j] = v++;
    }
}

for (let s = 0; s < spin; s++) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            tempAr[j][4 - i] = dataAr[i][j];
        }
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            dataAr[i][j] = tempAr[i][j];
        }
    }
}


// out:
//     for (let i = 0, v = 1; i < 5; i++) {
//         for (let j = 0; j < 5; j++) {
//             switch (spin) {
//                 case 1:
//                     tempAr[j][4 - i] = dataAr[i][j];
//                     break;
//                 case 2:
//                     tempAr[4 - i][4 - j] = dataAr[i][j];
//                     break;
//                 case 3:
//                     tempAr[4 - j][i] = dataAr[i][j];
//                     break;
//                 case 0:
//                     break out;
//                     // 0일 경우에는 swith에 남을 이유가 없으므로, 바깥으로 탈출.
//             }
//         }
//     }

// if (spin) {
//     for (let i = 0, v = 1; i < 5; i++) {
//         for (let j = 0; j < 5; j++) {
//             dataAr[i][j] = tempAr[i][j];
//         }
//     }
// }

for (let i = 0, v = 1; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        let result = dataAr[i][j];
        document.write(`${result/10>=1?'':'&nbsp;'}${result} `);
    }
    document.write('<br/>');
}