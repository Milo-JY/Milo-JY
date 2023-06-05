'use strict';

/* 
    < 문제 >

- 국, 영, 수 3 과목의 평균이 90 점 이상이면 A 학점, 90 점 미만이면서 80 점 이상이면
  B 학점, 80 점 미만이면서 70 점 이상이면 C 학점, 그 외에는 F 학점으로 표시되도록
  설정.
*/

let kor, en, math;
let name1;
let avg; 
let grade;

name1 = prompt('이름 :');
kor   = +prompt('국어 점수 :');
en    = +prompt('영어 점수:');
math  = +prompt('수학 점수:');

avg = ( kor + en + math ) / 3;

if(avg >= 90) {
    grade = 'A';
} 
else if(avg >= 80) {
    grade = 'B';
}
else if(avg >= 70) {
    grade = 'C';
} 
else {
    grade = 'D';
}

alert(`< 성적 >\n학생명 : ${name1}, 학점 : ${grade}, 평균 : ${avg}`);