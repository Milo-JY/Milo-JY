/*
  < 문제 >

- 학생명과 국어, 영어, 수학 점수를 순서대로 입력받아 평균을 구하여 출력하는 프로그램 구현.

  단, 순서대로 정보를 입력받는 과정에서 어느 하나라도 값이 입력되지 않는 경우에는 다음 입력

  과정으로의 진행을 멈추고 
  
  "학생 정보가 순서대로 정확히 입력되지 않았습니다." 문구를 대화상자 형태로 표시하고 프로그
  램이 종료되도록 구현.
*/

// ====두개 만들기 1) if로만 만든 버전1 2) if 다 뺀 버젼2




// ===== if(1)



'ues strict';


let stdName;
let kor, eng, math;


// _________________________________________________________
// 평균 계산 수식에 직접 +를 붙인 이유 : 변수선언 시 +를 안붙이는 이유는 만약, 점수가 0점이면 문자 그대로 인식을 해줘야 하기 때문.
// stdName = prompt('학생명 :');
// kor = +prompt('국어 :');
// eng = +prompt('영어 :');
// math = +prompt('수학 :');
// -----------------------------

// === if 사용

if (stdName = prompt('학생명 :')) {
  if (kor = prompt('국어 :')){
    if (eng = prompt('영어 :')){
      if (math = prompt('수학 :')){
        alert(`${stdName} 학생의 국어, 영어, 수학 점수의 평균 : ${(+kor + +eng + +math) / 3}`)
      }
    }
  }
}

if (!math) {
  alert('학생 정보가 순서대로 정확히 입력되지 않았습니다.');
}


// ===== if 미사용(실제 사용 X, 사고력 증진을 위해 해본 예제임.)

// (stdName = prompt('학생명 :')) && 
//   (kor = prompt('국어 :')) && 
//   (eng = prompt('영어 :')) && 
//   (math = prompt('수학 :')) &&
//   alert(`${stdName} 학생의 국어, 영어, 수학 점수의 평균 : ${(+kor + +eng + +math) / 3}`)
      
// math || alert('학생 정보가 순서대로 정확히 입력되지 않았습니다.');


// ===





// ===내꺼 시작

// if ((stdName = prompt('학생명 :')) && (kor = +prompt('국어 :')) && (eng = +prompt('영어 :')) && (math = +prompt('수학 :'))) {
  
//   alert(`${stdName} 학생의 국어, 영어, 수학 점수의 평균 :${avg}`);
// } else {
//   alert('학생 정보가 순서대로 정확히 입력되지 않았습니다.');
// }

// let value;
// let defaultValue = 'Default data';  


// =====if 없는거

// 'ues strict';


// let stdName;
// let kor;
// let eng;
// let math;

// let value;
// let defaultValue = 'Default data';  

// avg = (kor + eng + math) / 3;

// if (stdName) {
//   value = stdName;
// } else if (kor) {
//   value = kor;
// } else if (eng) {
//   value = eng;
// } else if (math) {
//   value = math;
// } else {
//   value = defaultValue;
// }

// if (defaultValue == 'Default data') {

//   alert('학생 정보가 순서대로 정확히 입력되지 않았습니다.')
// } else {
//   alert(`${stdName} 학생의 국어, 영어, 수학 점수의 평균 :${avg}`)
// }

// alert(value === false, '학생 정보가 순서대로 정확히 입력되지 않았습니다.')

// alert(value === true, `${stdName} 학생의 국어, 영어, 수학 점수의 평균 :${avg}`);
