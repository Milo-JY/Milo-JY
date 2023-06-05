'use strict';

let number;

out:                              // 자바와 같이 레이블 적용 가능.
for (; ;) {
    number = prompt('숫자만 입력');

    if (number) {          // prompt메서드에서 입력없이 확인('')을 누르거나 취소(null)버튼을
        //                 // 눌렀을 때의 방어 코드. 공백은 문자이므로 true 로 평가됨에 주의.

        for (let i = 0; i < number.length; i++) {    // number.length : 빈 문자열('')에 대한 length 는 0이므로 루프 진입이
            //                                         //                 안되고, null에 대한 length 는 error로 처리되므로 
            //                                         //                 9행과 같이 선 점검.
            if (number[i] < '0' || number[i] > '9') {
                alert('입력이 잘못되었습니다. 숫자만 입력하세요!!')
                continue out;
            }
        }

        alert('정상 입력^^');
        break;
    }

    alert('입력란에 데이터를 입력해주세요ㅠㅠ');
}


