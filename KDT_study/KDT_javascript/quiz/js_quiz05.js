/*
    < 문제 >

- 영문자 숫자 조합으로만 구성된 아이디를 입력받아 입력받은 아이디를
  웹페이지 화면에 대화상자 형태로 표시되도록 프로그램 구현.
  단, 입력받은 문자열의 처음과 끝에 포함된 공백은 제거하고 모두 대문자로
  변환하여 출력.
  
*/

'use strict';

let Id;

Id = prompt('아이디 입력 :', '영문자 숫자 조합으로만 입력');


alert(Id.trimStart().toUpperCase());