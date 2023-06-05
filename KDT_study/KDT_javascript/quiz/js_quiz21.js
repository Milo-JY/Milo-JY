'use strict';

let ar;

ar = new Array(5);
for (let i = 0; i < 5; i++) {
    ar[i] = new Array(5);
}

//==배열구문
for (let r = 0, c = -1, v = 1, p = 1, s = 5;;) {
    // =행고정구조
    for (let i = 1; i <= s; i++) {
        c += p;
        ar[r][c] = v++;
    }

    if (s <= 1) break;      // break
    s--;                    // 회전수 감소 증감식

    // =열고정구조
    for (let i = 1; i <= s; i++) {
        r += p;
        ar[r][c] = v++;
    }

    p=-p;                   // P생성식
}

// ==출력구문
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        let result = ar[i][j];
        document.write(`${result / 10 >= 1 ? '' : '&nbsp;'}${result} `);
    }
    document.write('<br/>');
}




// =====정답풀이

// let dataAr;

// dataAr = new Array(5);
// for (let i = 0; i < 5; i++) {
//     dataAr[i] = new Array(5);
// }

// // ==축소 가능
// for (let s = 5, r = 0, c = -1, v = 1, p = 1;;) {
//     for (let i = 1; i <= s; i++) dataAr[r][c += p] = v++;
//     if (s-- <= 1) break;

//     for (let i = 1; i <= s; i++) dataAr[r += p][c] = v++;
//     p = -p
// }

// ==설계 그대로 구현한 방법(아래)
// for (let s = 5, r = 0, c = -1, v = 1, p = 1; ;){
//     for (let i = 1; i <= s; i++) {
//         c += p;
//         dataAr[r][c] = v++;
//     }
//     if (s <= 1) break;
//     s--;

//     for (let i = 1; i <= s; i++) {
//         r += p;
//         dataAr[r][c] = v++;
//     }

//     p=-p
// }


// for (let i = 0, v = 1; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         let result = dataAr[i][j];
//         document.write(`${result / 10 >= 1 ? '' : '&nbsp;'}${result} `);
//     }
//     document.write('<br/>');
// }






// =====민종이꺼

/* ============= 달팽이만들기 ============== */

// let ar;         // 배열
// let r;          // 행
// let c;          // 열
// let s;          // 회전수 종료
// let p;          // 증감
// let v;          // 벨류

// r = 0;          // 최초행
// c = -1;         // 과거열
// v = 1;          // 현재 값
// p = 1;          // 현재 증감식
// s = 5;

// ar = new Array(5);
// for (let i = 0; i < 5; i++) {
//     ar[i] = new Array(5);
// }

// // 배열 만들기 구문
// // for (;;) => s는 어차피 전역변수 필요가없음 무한루프여도됨
// for (let i = s; i >= 1; i--) {
//     for (let k = 1; k <= s; k++) {
//         c = c + p;
//         ar[r][c] = v;
//         v = v + 1;
//     }

//     if (s <= 1) break;
//     s--;

//     for (let k = 1; k <= s; k++) {
//         r = r + p;
//         ar[r][c] = v;
//         v = v + 1;
//     }

//     p = -p;
// }

// // 출력 확인 구문
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         let result = ar[i][j];
//         document.write(`${result / 10 >= 1 ? '' : '&nbsp;'}${ar[i][j]} `);
//     }
//     document.write('<br/>');
// }

/* 노가다 */
// for (let i = 0; i < 5; i++) {
//     ar[i] = new Array(5);
// }

// // if (len-- == 0) break;

// for (let i = 0; i < 5; i++) {
//     ar[0][i] = v++;
// }
// for (let i = 1; i < 5; i++) {
//     ar[i][4] = v++;
// }

// for (let i = 3; i >= 0; i--) {
//     ar[4][i] = v++;
// }
// for (let i = 3; i >= 1; i--) {
//     ar[i][0] = v++;
// }

// for (let i = 1; i <= 3; i++) {
//     ar[1][i] = v++;
// }
// for (let i = 2; i <= 3; i++) {
//     ar[i][3] = v++;
// }
// for (let i = 1; i <= 2; i++) {
//     ar[3][i] = v++;
// }
// for (let i = 1; i <= 2; i++) {
//     ar[2][i] = v++;
// }