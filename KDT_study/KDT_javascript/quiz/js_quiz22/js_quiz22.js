'use strict';

/*
    < 문제 >

- 학생명, 국어점수, 영어점수, 수학점수를 입력받아 테이블 형태로
  입력받은 정보와 성적 합계, 평균이 출력되도록 프로그램 구현.


    < 조건 >

1> 외부 스타일 시트와 외부 스크립트 적용.
2> 국어점수, 영어점수, 수학점수는 0 ~ 100점 사이의 범위로 입력 받는다 가정.
   단, 과목은 국, 영, 수 외에 더 확장이 될 수 있다는 가정하에 구현.
3> 평균은 정수부만 표현되도록 Math.trunc() 함수 활용.
4> 테이블의 제목은 caption 속성을 적용하고 테이블의 구성은 tr, th, td 로만 구성.
5> 테이블 제목과 모든 행의 높이는 30px 적용.
6> 테입블의 개별 열 너비는 각각 100px 적용.
7> 그 외 사항은 출력 예시 참조.
8> 모든 html 태그 구성은 js 를 이용하여 구성.

*/


// stN = prompt('학생명 :');
// kor = +prompt('국어점수 :');
// eng = +prompt('영어점수 :');
// math = +prompt('수학점수 :');

let stInfo = [
    ['학생명', '국어점수', '영어점수', '수학점수', '합계', '평균']
];

stInfo[1] = new Array(stInfo[0].length);

stInfo[1][stInfo[0].length - 2] = 0; // 과거누적합 초기화.

// ==========================================
// < 입력과 누적합 >

// 입력을 받아서 저장(배열) -> 배열에 접근 (첫주소, 인덱스, 인덱스종료값) 
// 
// 열인덱스 구조안에서 아래를 처리 {
//         (1행, 0~배열크기 - 3열) 배열 = 입력(0행, 0~배열크기 - 3 열)

//         1행, 배열크기 - 2 요기다가 누적합 <- (1행, 0~배열크기 - 3열) 배열 (반드시 부호 붙이기)
//         단, 인덱스 1부터만 누적합 구하기(이름빼고)
// }

// ===================
// < 평균 >
// 1행, 배열크기 - 1 = 1행, 배열크기 - 2 요기다가 누적합 / (배열크기 - 3)

// ===================
// < 출력 >





stInfo[1][stInfo[0].length - 2] = 0;

for (let i = 0; i < stInfo[0].length - 2; i++) {
    stInfo[1][i] = prompt(stInfo[0][i]);

    if (i > 0) {
        stInfo[1][stInfo[0].length - 2] += +stInfo[1][i];
    }
}

stInfo[1][stInfo[0].length - 1] = Math.trunc(stInfo[1][stInfo[0].length - 2] / (stInfo[0].length - 3));


document.write('<div>');

document.write('<table>');
document.write(`<caption>${stInfo[1][0]} 학생의 성적</caption>`);

for (let i = 1; i < stInfo[0].length; i++) {
    document.write('<tr>');

    document.write(`<th>${stInfo[0][i]}</th>`);
    document.write(`<td>${stInfo[1][i]}</td>`);

    document.write('</tr>')
}

document.write('</table>');

document.write('</div>');


// =====정답풀이

'use strict';

let stInfo = [
    ['학생명', '국어점수', '영어점수', '수학점수', '합계', '평균'],
];
stInfo[1] = new Array(stInfo[0].length);
stInfo[1][stInfo[1].length - 2] = 0;

for (let i = 0; i < stInfo[0].length - 2; i++) {
    stInfo[1][i] = prompt(`${stInfo[0][i]} : `);

    if (i >= 1) {
        stInfo[1][stInfo[1].length - 2] += +stInfo[1][i];
    }
}

stInfo[1][stInfo[1].length - 1] = stInfo[1][stInfo[1].length - 2] / (stInfo[1].length - 3);

document.write(`
<table>
<caption>${stInfo[1][0]} 학생의 성적</caption>`);

for (let i = 1; i < stInfo[0].length; i++) {
    document.write(
        `<tr>
    <th>${stInfo[0][i]}</th>
    <td>${Math.trunc(stInfo[1][i])} 점</td>
    </tr>`
    );
}

document.write('</table>');