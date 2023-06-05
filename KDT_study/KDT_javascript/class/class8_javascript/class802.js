'use strict';

for (let i = 1; i <= 9; i++) {
    for (let j = 1, result; j <= 9; j++) {
        result = i * j;
        document.write(`${i} X ${j} = ${result/10 >= 1 ? '': '&nbsp;'}${result} `)
    }
    document.write('<br/>');
}

// =====<구구단 - 탈출스위치  버전>
// j가 5이상이 될 경우에 스위치를 1로 변경하여, 참으로 만들게 하고
// 1차 break 이후 sw가 참(1)이면 바깥 for문까지 탈출하도록 break를 설계.


let sw = 0;


for (let i = 1; i <= 9; i++) {

    for (let j = 1, result; j <= 9; j++) {

        result = i * j;
        document.write(`${i} X ${j} = ${result/10 >= 1 ? '': '&nbsp;'}${result} `)
        if (j >= 5) {
            sw = 1;
            break;
        }
    }
    document.write('<br/>');
    if (sw) break;
}


// =====<구구단 continue 버전>
// continue(예 : if (i >= 5) continue;)를 적용하면 5 이상일 때부터, 증감식 >> 조건식 으로 점핑되어 이동
// 출력문 아래에 배치하게 되면, 전체출력과 다를게 없어서 무의미한 바보코드가 된다.


for (let i = 1; i <= 9; i++) {
    if (i >= 5) continue;
    for (let j = 1, result; j <= 9; j++) {
        
        // if (j >= 5) continue;
        result = i * j;
        document.write(`${i} X ${j} = ${result/10 >= 1 ? '': '&nbsp;'}${result} `)
        if (j >= 5) {
            sw = 1;
            break;

            // if (j >= 5) continue;    // 바보코드
        }
    }
    document.write('<br/>');

    // if (i >= 5) continue;    // 바보코드
}


// =====<구구단 label 버전>
// label 출력 적용하려는 바깥쪽 for문 바로 위에 "outer:" 를 적는다.
// 조건문 if break 뒤에 outer까지 넣어줘야 끝!


outer:
for (let i = 1; i <= 9; i++) {
    for (let j = 1, result; j <= 9; j++) {
        // if (j >=5) break outer;
        result = i * j;
        document.write(`${i} X ${j} = ${result/10 >= 1 ? '': '&nbsp;'}${result} `)
        }
        document.write('<br/>');
    }