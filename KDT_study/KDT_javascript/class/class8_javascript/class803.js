'use strict';

// 행 열 순서대로 정렬하기


// =====<일반>

// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         document.write(`${v/10>=1?'':'&nbsp;'}${v++} `);
//     }
//     document.write('<br/>');
// }


// ====<좌삼각>
// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(`${v/10>=1?'':'&nbsp;'}${v++} `);
//     }
//     document.write('<br/>');
// }

// =====<좌역삼각>

// for (let i=1, v=1; i<=5; i++) {
//     for (let j=1; j<=5; j++) {
//         if (j>6-i) {
//             document.write('&nbsp;&nbsp;&nbsp;');
//         } else {
//         document.write(`${v/10>=1?'':'&nbsp;'}${v++} `);
//         }
//     }
//     document.write('<br/>');
// }

// =====<우역삼각>

// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (j<i) {
//             document.write('&nbsp;&nbsp;&nbsp;');
//         } else {
//             document.write(`${v/10>=1?'':'&nbsp;'}${v++} `);
//         }
//     }
//     document.write('<br/>');
// }

// =====<우삼각>

// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (j<6-i) {
//             document.write('&nbsp;&nbsp;&nbsp;');
//         } else {
//             document.write(`${v/10>=1?'':'&nbsp;'}${v++} `);
//         }
//     }
//         document.write('<br/>');
// }

// =====<피라미드>

// let n;

// n = +prompt('줄 수 : ');

// for (let i = 1, v = 1; i <= n; i++) {
//     for (let j = 1; j <= i + n - 1; j++) {
//         if (j < n + 1 - i) {
//             document.write('&nbsp;&nbsp;&nbsp;');
//         } else {
//             document.write(`${v/10>=1?'':'&nbsp;'}${v++} `);
//         }
//     }
//     document.write('<br/>');
// }


// =====<역피라미드>

// let n;

// n = +prompt('줄 수 : ');

// for (let i = 1, v = 1; i <= n; i++) {
//     for (let j = 1; j <= n*2-i; j++) {
//         if (j < i) {
//             document.write('&nbsp;&nbsp;&nbsp;');
//         } else {
//             document.write(`${v/10>=1?'':'&nbsp;'}${v++} `);
//         }
//     }
//     document.write('<br/>');
// }

// =====<마름모>

// let n;

// n = +prompt('줄 수 : ');

// let mid = (n + 1) / 2;


// for (let i = 1, v = 1, st, ed; i <= n; i++) {
//     if (i <= mid) {
//         st = mid + 1 - i;
//         ed = i + n - mid;
//     } else {
//         st = i - (n - mid);
//          ed = n + mid - i;
//     }

//     for (let j = 1; j <= ed; j++) {
//         if (j < st) {
//             document.write('&nbsp;&nbsp;&nbsp;');
//         } else {
//             document.write(`${v/10>=1?'':'&nbsp;'}${v++} `);
//         }
//     }
//     document.write('<br/>');
// }
// document.write('<br/>');


// =====<모레시계>

// let n;

// n = +prompt('줄 수 : ');

// let mid = (n + 1) / 2;


// for (let i = 1, v = 1, st, ed; i <= n; i++) {
//     if (i <= mid) {
//         st = i;
//         ed = mid * 2 - i;
//     } else {
//         st = mid * 2 - i;
//         ed = i;
//     }

//     for (let j = 1; j <= ed; j++) {
//         if (j < st) {
//             document.write('&nbsp;&nbsp;&nbsp;');
//         } else {
//             document.write(`${v/10>=1?'':'&nbsp;'}${v++} `);
//         }
//     }
//     document.write('<br/>');
// }
// document.write('<br/>');

// =====민우꺼
'use strict';

let n;
let center;

n= +prompt(`줄 수 :`);
center = (n + 1) / 2;

for (let i=1,v=1,st,ed; i<=n; i++) {
      if(i <= center ) {
            st = i, ed = 2*center-i;
      } else {
            st = 2*center-i, ed = i;
      }


      for (let j=1; j<=ed; j++) {
          if(j<st){
            document.write('&nbsp;&nbsp;&nbsp;');
            } else {
                  document.write(`${v/10>=1?'':'&nbsp;'}${v++} `);
            }
      }
      document.write(`<br/>`);
  }
