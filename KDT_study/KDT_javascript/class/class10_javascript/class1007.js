/* 
    < for ~ in >

- 객체의 참조를 통해 객체에 할당된 키(key)들을 순회.

형식    :    for( let 또는 const 변수   in   객체의참조 )  {  실행블럭  }

- 변수 : 객체의 키(key)를 참조할 변수.

*/

'use strict';

let student = {
    name: '박성연',
    stNum: 1,
    classNum: 3,
    output: function () {
        console.log(this.name, this.stNum, this.classNum);
    },
    // output() {                                               // 단축 문법.
    //     console.log(this.name, this.stNum, this.classNum);
    // },
    output2() {
        for (const key in this) {
            console.log(`Key : ${key}, Value : ${this[key]}`);
        }
    }
};

for (const key in student) {
    console.log(`Key : ${key}, Value : ${student[key]}`);
}
console.log();

student.output();
console.log();

student.output2();

student = {};

for (const key in student) {    // 빈 객체를 for ~ in 문을 이용하여 순회하는 경우
    //                          // 루프 진입 자체가 불가.

    console.log(`Key : ${key}, Value : ${student[key]}`);
}