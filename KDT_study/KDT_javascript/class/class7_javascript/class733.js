'use strict';

let grade;

무한루프를 사용해야함.(회전수 없음.)



for (; ;) {
    grade = prompt('몇 학년입니까?(1 ~ 6) : ');
    if (grade >= 1 && grade <= 6) break;
    alert('다시 입력하시오.');
}
alert(`${grade} 학년입니다.`);


// ========
// do~ while문 (1)

do {
        grade = prompt('몇 학년입니까?(1 ~ 6) : ');
    } while (!(if (grade >= 1 && grade <= 6) break;));
    
    alert(`${grade} 학년입니다.`);
    
    

// ========
// do~ while문 (2)

do {
    grade = prompt('몇 학년입니까?(1 ~ 6) : ');
} while ( grade < 1 || grade > 6);

alert(`${grade} 학년입니다.`)


