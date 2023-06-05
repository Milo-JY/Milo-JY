'use strict';

const option = {
  hiPass: true,
  highBeam: true,
}

const car = {
  carName: 'damas',
  color: 'gold',
  typeOfFuel: 'disel',
  performance: {
    maxSpeed: 70,
    hp: '출력: 200',
  },
  carOptions: option,

  inforCar: function () {
    console.log(`모델명 : ${this.carName}, 색상 : ${this.color}, 연료타입 : ${this.typeOfFuel}`);
  },
};

console.log(car.performance.maxSpeed);
console.log(car.performance.hp);