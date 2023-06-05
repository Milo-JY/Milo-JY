'use strict';

function setValue1(inputValue) {
    let value = inputValue || 'default Value';
    console.log(value);
}
setValue1('data');
setValue1(0);               // null과  undefined가 아닌  falsy값들도 초기화 값으로 사용하고자
setValue1('');              // 하는 경우 or는 0, '', NaN값들도 falsy값으로 인정함으로써 의도치
setValue1(NaN);             // 않는 초기화 결과를 얻을 수 있는 가능성.
setValue1(null);
setValue1(undefined);
console.log('---------------');


// =======
// default value 값으로 초기화 하는게 아닌 데이터 검출하는 기능임.

function setValue2(inputValue) {
    let value = inputValue ?? 'default Value';
    console.log(value);
}
setValue2('data');
setValue2(0);
setValue2('');
setValue2(NaN);
setValue2(null);
setValue2(undefined);