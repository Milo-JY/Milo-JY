'use strict';

let n1, n2;

n1 = +prompt('정수1');
n2 = +prompt('정수1');

alert(`${n1}과(와) ${n2}의 차는 ${n2 > n1 ? n2 - n1 : n1 - n2} 입니다.`);

if (confirm('창을 닫을까요?')) {
    close();
}
