'use strict';

/* 
    < js 에서의 메서드 정의 >

- js 에서는 자바에서의 필드와 메서드를 모두 통칭하여 프로퍼티로 정의.
  따라서 프로퍼티 key 에 데이터 값(value)을 할당한 형태가 필드 프로퍼티로 평가되며,
  프로퍼티 key 에 함수를 할당한 형태를 메서드로 정의.
*/

const option = {
   hiPass: true,
   sunRoof: false
}

const car = {
   carName: 'poter',          // 리터럴 객체 정의 후에도 외부에서 객체의 프로퍼티를 추가할 수 있듯이
   color: 'blue',             // 객체내 별도의 필드 정의 없이도 객체에 포함된 메서드 내에서도 this키워드를
   typeOfFuel: 'diesel',      // 이용해 필드 추가 정의 가능.                
   'car type': 'truck',
   performance: {             // 값(value)에는 리터럴 객체를 직접 지정 가능.
      speed: 100,
      breakCapability: 10       // 제동력.
   },
   carOption: option,          // 값(value)에는 외부 객체나 외부 함수의 참조도 포함 가능.

   inforCar: function () {     // 객체 메서드.

      console.log(`차명 : ${this.carName}, 색상 : ${this.color}, 종류 : ${this["car type"]}`)
      // 메서드 내에서 객체 속성(필드, 메서드) 접근시에는 반드시 this키워드를 통해서 접근 가능.
      // VSCODE에서는 속성명만 입력해도 this키워드 자동 로딩.
   },

   run() {                     // 객체 메서드 축약.
      console.log("부릉 부릉");
   }
};


console.log(car.performance.speed);
console.log(car.performance.breakCapability);
console.log("하이패스 " + ((car.carOption.hiPass) ? "" : "미") + "장착");
console.log("선루프 " + ((car.carOption.sunRoof) ? "" : "미") + "설치");
console.log(car);
console.log('------------------------');


car.inforCar();
car.run();
console.log('------------------------');


function convey() {
   console.log('짐을 실어 나르기.');

}

car.stop = function () {        // 함수 표현식을 활용한 객체 메서드 추가.
   console.log('끼이익');
};

car.convey = convey;            // 외부 함수의 참조 전달을 통한 메서드 추가.

car.stop();
car.convey();
car['convey']();     // 계산된 프로퍼티를 활용한 메서드 호출도 가능.
console.log('------------------------');


// car.attack();    // 존재하지 않는 필드에 대한 접근은 undefined 를 반환하지만,
//                  // 존재하지 않는 메서드에 대한 접근은 컴파일 에러가 발생됨에 주의.