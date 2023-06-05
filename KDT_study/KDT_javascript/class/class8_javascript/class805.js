'use strict';

let number;


for (;;) {
    number = prompt('숫자만 입력');

    if (number && number.trim()) { // number.trim() : 공백만 입력되는 경우에 대한 방어 코드. 공백은 true 로 평가됨에 주의.
        //                          // 취소 버튼을 눌렀을 때 반환되는 null 에 대한 즉각적인 trim 함수 호출은 에러처리되므로
        //                          // 먼저 number 변수의 값을 그대로 평가하여 참인 경우는 null 이 아니므로 비로소 number 에
        //                          // 대한 안전한 trim 함수 호출 가능.

        if (!isNaN(number)) { // isNaN 함수는 ''과 null 또는 false의 경우에도 내부적으로 0 으로 변환하여 평가하므로
            alert('정상 입력^^'); // "확인", "취소" 버튼을 눌렀을 때의 방어 코드는 반드시 필요.
            break;
        }
    }

    alert('입력란에는 숫자만 입력 가능합니다 ㅠㅠ');
}