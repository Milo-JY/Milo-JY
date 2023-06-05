'use strict';

// const student1 = {
//     stName: 'LES',
//     stAge: 25,
// };

/*
    < 객체 구조 분해 할당 >

- 좌변 중괄호('{}') 블럭 내에 참조할 객체의 원래 속성(key)명을 명시한 후
  할당 연산자의 우변에서 객체의 참조를 전달하면, 우변 참조 객체의 멤버
  속성들의 값(value)을 좌변에 명시한 속성(key)에 맞추어 구조 분해를 통한
  할당 실행.
  이 때 좌변 블럭 내에 명시한 속성명(변수명)은 우변 참조 객체의 멤버
  속성명과 동일해야 함에 주의.
  좌변은 객체의 참조명이 없고 단축 속성명(Shorthand property names)이
  적용된 객체 리터럴 형태로 보이지만 그렇지 않고, 실제 이는 우변 참조
  객체의 속성(key)명과 동일한 이름을 가진 새로운 변수를 선언하여 값만
  대입 복사하는 것과 같음.
  즉, 객체 내 속성(key)들의 값(value)을 분리하여 새로운 변수에 다시
  할당하는 개념. 단, 그 값이 원시값이 아닌 참조값이라면 좀 더 유연한
  접급을 가능하게 설계 가능.
*/
// const { stName, stAge } = student1;
// console.log(stName);
// console.log(stAge);
// student1.stName = "Les";
// student1.stAge = 23;
// console.log(stName);
// console.log(stAge);
// console.log();


/*
    객체의 속성명이 외부의 전역변수와 중복되는 경우에는 객체의 구조
    분해 할당시 좌변의 변수명(key명)이 중복 선언이 되므로 아래와 같이
    구분자 콜론(:)의 우변에 새로운 변수명을 지정 가능.
*/
// let stName = '',
//     stAge = 0;

// const student2 = {
//     stName: 'KIM',
//     stAge: 19,
// };
// // const { stName, stAge } = student2;
// const { stName: stName1, stAge: stAge1 } = student2;

// console.log(stName1);
// console.log(stAge1);
// console.log();


// const { proName, proAge } = {       // 객체 리터럴에 대한 즉각적인 구조 분해 할당도 가능.
//     proName: 'PMS',
//     proAge: 45,
// };

// console.log(proName);
// console.log(proAge);
// console.log();


// const professor = {
//     proName1: 'SYG',
//     proAge1: 55,
// };
// let proName1, proAge1;
// // { proName1, proAge1 } = professor;
// ({ proName1, proAge1 } = professor);    /* 이와같이 구조 분해 할당을 받을 변수를 먼저 선언한 이후에
//                                            구조 분해 할당을 적용시에는 이와 같이 전체 구문을 소괄호('()')로
//                                            묶어야 함에 주의.                                              */
// console.log(proName1);
// console.log(proAge1);
// console.log();


const parent1 = {
    parentName: 'PIH',
    parentAge: 65,
};
const parent2 = {
    job: 'engineer',
};

/*
   구조 분해 할당을 받을 변수에 대한 디폴트 값 설정이 가능하여 구조 분해 대상
   객체에 정의된 속성 값은 그대로 대입 할당을 하되, 정의되지 않은(undefined)
   변수에 대해서는 디폴트 값을 지정.
*/

// let { parentName: parentName1 = 'anonymous', parentAge: parentAge1 = 60, job: job1 = 'doctor' } = parent1;
// let { parentName: parentName2 = 'anonymous', parentAge: parentAge2 = 60, job: job2 = 'doctor' } = parent2;

// console.log(parentName1);
// console.log(parentAge1);
// console.log(job1);
// console.log();
// console.log(parentName2);
// console.log(parentAge2);
// console.log(job2);