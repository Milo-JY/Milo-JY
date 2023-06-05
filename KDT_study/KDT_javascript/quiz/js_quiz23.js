// 'use strict';

// let digitAr;
// let score;

// alert("끝말잇기 Start");

// digitAr = new Array(100);


// out:
// for (;;) {
//     digitAr[0] = prompt('처음 한글 세 글자 단어를 입력하세요!!^^');
//     if (digitAr[0].length !== 3) {
//         alert('세 글자 단어만 입력하세요~~');
//         continue;
//     } else if (digitAr[0] = 1){
//         alert('Ok!! 게임시작~~');
//     } else if (digitAr[0] = 0) {
//         confirm('정말 종료하시겠습니까?');
//         if (confirm = 1) {
//             alert('게임 종료!!');
//         } else {
//             continue out;
//         }
//     }
    
//     if (digitAr[0].length !== 3) {
//         alert('세 글자 단어만 입력하세요~~');
//         continue;
//     } else {
//         alert('Ok!! Excellent!');
//         for (let i = 1;;i++) {
//             digitAr[i] = prompt(`한글 세 글자 단어를 입력하세요!! 종료하려면 "끝"이라고 입력하세요^^( 이전 단어 : ${digitAr[i-1]}`);
            
//         }
//     }
// }

// for (let i = 0; i < digitAr.length; i++) {
//     digitAr(i) = new Array(1);
// }




// // =====정답풀이1
// 플래그 활용 버전( 이중 루프 )


// 'use strict';

// let wordBefore,         // 이전 단어.
//     wordAfter,          // 현재 단어.
//     cnt = 0,            // 끝말잇기 성공 카운트.
//     endFlag = true;    // 프로그램 종료 플래그( false : 종료, true : 계속 )

// alert('끝말잇기 Start');

// for (; endFlag;) {
//     wordBefore = prompt('처음 한글 세 글자 단어를 입력하세요!!^^');

//     if (wordBefore === null) {                      // 취소 버튼을 눌렀을 때 null 에 대한 length 필드 조사시 에러가 발생되므로
//         //                                          // 반드시 null 조사를 먼저해야 함에 주의.
//         if (confirm('정말 종료하시겠습니까?')) {
//             break;
//         }
//     } else if (wordBefore.length === 3) {
//         alert('Ok!! 게임시작~~');

//         for (; ;) {
//             wordAfter = prompt(`한글 세 글자 단어를 입력하세요!! 종료하려면 \"끝\"이라고 입력하세요^^(  이전 단어 : ${wordBefore}  )`);

//             if (wordAfter === null) {
//                 if (confirm('정말 종료하시겠습니까?')) {
//                     endFlag = false;
//                     break;
//                 }
//             } else if (wordAfter === '끝') {
//                 if (confirm('정말 끝내시겠습니까??')) {
//                     alert(`${cnt}개의 끝말잇기를 성공하셨어요^^`);
//                     endFlag = false;
//                     break;
//                 }
//             } else if (wordAfter.length === 3) {
//                 if (wordBefore[wordBefore.length - 1] === wordAfter[0]) {
//                     alert('Ok!! Excellent!');
//                     cnt++;
//                     wordBefore = wordAfter;
//                 } else {
//                     alert('입력한 단어의 첫말이 이전 단어의 끝말과 달라요~~ㅠㅠ');
//                 }
//             } else {
//                 alert('세 글자 단어만 입력하세요~~');
//             }
//         }
//     } else {
//         alert('세 글자 단어만 입력하세요~~');
//     }
// }

// alert('게임 종료!!');



// =====정답풀이 2(label사용)
//레이블(Label) 활용 버전 ( 이중 루프 )


// 'use strict';

// let wordBefore,         // 이전 단어.
//     wordAfter,          // 현재 단어.
//     cnt = 0;            // 끝말잇기 성공 카운트.

// alert('끝말잇기 Start');

// end:                    // 레이블(Label)
// for (; ;) {
//     wordBefore = prompt('처음 한글 세 글자 단어를 입력하세요!!^^');

//     if (wordBefore === null) {                      // 취소 버튼을 눌렀을 때 null 에 대한 length 필드 조사시 에러가 발생되므로
//         //                                          // 반드시 null 조사를 먼저해야 함에 주의.
//         if (confirm('정말 종료하시겠습니까?')) {
//             break;
//         }
//     } else if (wordBefore.length === 3) {
//         alert('Ok!! 게임시작~~');

//         for (; ;) {
//             wordAfter = prompt(`한글 세 글자 단어를 입력하세요!! 종료하려면 \"끝\"이라고 입력하세요^^(  이전 단어 : ${wordBefore}  )`);

//             if (wordAfter === null) {
//                 if (confirm('정말 종료하시겠습니까?')) {
//                     break end;
//                 }
//             } else if (wordAfter === '끝') {
//                 if (confirm('정말 끝내시겠습니까??')) {
//                     alert(`${cnt}개의 끝말잇기를 성공하셨어요^^`);
//                     break end;
//                 }
//             } else if (wordAfter.length === 3) {
//                 if (wordBefore[wordBefore.length - 1] === wordAfter[0]) {
//                     alert('Ok!! Excellent!');
//                     cnt++;
//                     wordBefore = wordAfter;
//                 } else {
//                     alert('입력한 단어의 첫말이 이전 단어의 끝말과 달라요~~ㅠㅠ');
//                 }
//             } else {
//                 alert('세 글자 단어만 입력하세요~~');
//             }
//         }
//     } else {
//         alert('세 글자 단어만 입력하세요~~');
//     }
// }

// alert('게임 종료!!');



// =====정답풀이3
// 플래그 활용 버전( 싱글 루프 )


'use strict';

let wordBefore,         // 이전 단어.
    wordAfter,          // 현재 단어.
    cnt = 0,            // 끝말잇기 성공 카운트.
    firstFlag = true;    // 프로그램 로직 평가 플래그( true : 최초로직, false : 2번째 로직 )

alert('끝말잇기 Start');

for (; ;) {
    if (firstFlag) {
        wordBefore = prompt('처음 한글 세 글자 단어를 입력하세요!!^^');

        if (wordBefore === null) {
            if (confirm('정말 종료하시겠습니까?')) {
                break;
            } else {
                continue;
            }
        } else if (wordBefore.length === 3) {
            alert('Ok!! 게임시작~~');
            firstFlag = false;
            continue;
        }
    } else {
        wordAfter = prompt(`한글 세 글자 단어를 입력하세요!! 종료하려면 \"끝\"이라고 입력하세요^^(  이전 단어 : ${wordBefore}  )`);

        if (wordAfter === null) {
            if (confirm('정말 종료하시겠습니까?')) {
                break;
            } else {
                continue;
            }
        } else if (wordAfter === '끝') {
            if (confirm('정말 끝내시겠습니까??')) {
                alert(`${cnt}개의 끝말잇기를 성공하셨어요^^`);
                break;
            } else {
                continue;
            }
        } else if (wordAfter.length === 3) {
            if (wordBefore[wordBefore.length - 1] === wordAfter[0]) {
                alert('Ok!! Excellent!');
                cnt++;
                wordBefore = wordAfter;
            } else {
                alert('입력한 단어의 첫말이 이전 단어의 끝말과 달라요~~ㅠㅠ');
            }

            continue;
        }
    }

    alert('세 글자 단어만 입력하세요~~');
}

alert('게임 종료!!');



// =====정답풀이4
// 배열과 플래그 활용 버전( 중복 최소화 )


// 'use strict';

// let wordChk = [
//     ['', ''],           // [ 이전단어, 현재단어 ]
//     [
//         '처음 한글 세 글자 단어를 입력하세요!!^^',
//         '',
//     ],
// ];

// let cnt = 0,          // 끝말잇기 성공 카운트.
//     firstFlag = 0;    // 프로그램 로직 평가 플래그( 0 : 최초로직/인덱스, 1 : 2번째 로직/인덱스 )

// alert('끝말잇기 Start');

// /* 
//     wordChk[1][1] 은 문자열 상수 형태로 할당된 값이므로 템플릿 리터럴 내 표현식은 최초 할당된 값으로
//     고정되어 할당되므로 표현식 내의 값이 변하다 하더라도 원본 문자열 상수가 변하지 않음에 주의.
//     따라서 아래 증감식 부분의 식과 같이 전체 문자열을 재할당.
// */
// for (; ; wordChk[1][1] = `한글 세 글자 단어를 입력하세요!! 종료하려면 \"끝\"이라고 입력하세요^^(  이전 단어 : ${wordChk[0][0]}  )`) {
//     wordChk[0][firstFlag] = prompt(wordChk[1][firstFlag]);

//     if (wordChk[0][0] === null || wordChk[0][1] === null) {
//         if (confirm('정말 종료하시겠습니까?')) {
//             break;
//         } else {
//             continue;
//         }
//     }

//     if (firstFlag) {                                                    // 2번째 로직
//         if (wordChk[0][1] === '끝') {
//             if (confirm('정말 끝내시겠습니까??')) {
//                 alert(`${cnt}개의 끝말잇기를 성공하셨어요^^`);
//                 break;
//             } else {
//                 continue;
//             }
//         } else if (wordChk[0][1].length === 3) {
//             if (wordChk[0][0][wordChk[0][0].length - 1] === wordChk[0][1][0]) {
//                 alert('Ok!! Excellent!');
//                 cnt++;

//                 wordChk[0][0] = wordChk[0][1];
//             } else {
//                 alert('입력한 단어의 첫말이 이전 단어의 끝말과 달라요~~ㅠㅠ');
//             }

//             continue;
//         }
//     } else {                                                            // 최초 로직
//         if (wordChk[0][0].length === 3) {
//             alert('Ok!! 게임시작~~');
//             firstFlag = 1;
//             continue;
//         }
//     }

//     alert('세 글자 단어만 입력하세요~~');
// }

// alert('게임 종료!!');



// =====정답풀이5

// 배열과 플래그 활용 버전( 중복 최소화 ) - 플래그를 삭제하고 카운트를 플래그로 활용

'use strict';

let wordChk = [
    ['', ''],           // [ 이전단어, 현재단어 ]
    [
        '처음 한글 세 글자 단어를 입력하세요!!^^',
        '',
    ],
];

let cnt = 0;          // 1) 끝말잇기 성공 카운트.
                      // 2) 프로그램 로직 평가 플래그( 0 : 최초로직/인덱스, 0 이 아닌값 : 2번째 로직/인덱스 )

alert('끝말잇기 Start');

/* 
    wordChk[1][1] 은 문자열 상수 형태로 할당된 값이므로 템플릿 리터럴 내 표현식은 최초 할당된 값으로
    고정되어 할당되므로 표현식 내의 값이 변하다 하더라도 원본 문자열 상수가 변하지 않음에 주의.
    따라서 아래 증감식 부분의 식과 같이 전체 문자열을 재할당.
*/
for (; ; wordChk[1][1] = `한글 세 글자 단어를 입력하세요!! 종료하려면 \"끝\"이라고 입력하세요^^(  이전 단어 : ${wordChk[0][0]}  )`) {
    wordChk[0][1] = prompt(wordChk[1][cnt ? 1 : 0]);

    if (wordChk[0][0] === null || wordChk[0][1] === null) {
        if (confirm('정말 종료하시겠습니까?')) {
            break;
        } else {
            continue;
        }
    }

    if (cnt) {                                                    // 2번째 로직
        if (wordChk[0][1] === '끝') {
            if (confirm('정말 끝내시겠습니까??')) {
                alert(`${cnt - 1}개의 끝말잇기를 성공하셨어요^^`);
                break;
            } else {
                continue;
            }
        } else if (wordChk[0][1].length === 3) {
            if (wordChk[0][0][wordChk[0][0].length - 1] === wordChk[0][1][0]) {
                alert('Ok!! Excellent!');
                cnt++;

                wordChk[0][0] = wordChk[0][1];
            } else {
                alert('입력한 단어의 첫말이 이전 단어의 끝말과 달라요~~ㅠㅠ');
            }

            continue;
        }
    } else {                                                            // 최초 로직
        if (wordChk[0][1].length === 3) {
            alert('Ok!! 게임시작~~');
            cnt++;
            wordChk[0][0] = wordChk[0][1];
            continue;
        }
    }

    alert('세 글자 단어만 입력하세요~~');
}

alert('게임 종료!!');