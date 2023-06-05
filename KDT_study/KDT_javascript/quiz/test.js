'use strict';

let wordBefore,
    wordAfter,
    cnt = 0,
    firstFlag = true;

alert('끝말잇기 Start');

for(; ;) {
    if (firstFlag) {
        wordBefore = prompt('처음 한글 세 글자 단어를 입력하세요!!^^');

        if (wordBefore === null) {
            if (confirm('정말 끝내시겠습니까?')) {
                break;
            } else {
                continue;
            }
        } else if (wordBefore.length === 3) {
            alert('Ok!! 게임 시작!');
            firstFlag = false;
            continue;
        }
    } else {
        wordAfter = prompt(`한글 세 글자 단어를 입력하세요!! 종료하려면 \"끝\"이라고 입력하세요^^(  이전 단어 : ${wordBefore}`)

        if (wordAfter === null) {
            if (confirm('정말 끝내시겠습니까?')) {
                break;
            } else {
                continue;
            }
        } else if (wordAfter.length === '끝') {
            if (confirm('정말 끝내시겠습니까?')) {
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
                alert('입력한 단어의 첫말이 이전 단어의 끝말과 달라요~~ㅠㅠ')
            }

            continue;
        }
    }
    alert('세 글자 단어만 입력하세요~~')
}
alert('게임 종료!!');