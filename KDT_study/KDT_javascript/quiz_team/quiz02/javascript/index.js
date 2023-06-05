'use strict';

const main_container = document.getElementById('main_container'),
    img = main_container.querySelector('img'),
    nation_container = main_container.querySelector('.nation_container');

let imageAr = [
    `./image/bg1.jpg`,
    `./image/bg2.jpg`,
    `./image/bg3.jpg`,
    `./image/bg4.jpg`,
    `./image/bg5.jpg`,
];

for (let i = 0; i < imageAr.length; i++) {
    nation_container.innerHTML += `<a href="#" class="nationBox nation${i+1}">${i+1}</a>`;
}

const nationBox = nation_container.getElementsByClassName('nationBox');
let beforeNationBox = nationBox[0];

function changeNationBox() {

    img.setAttribute('src', `${imageAr[this.textContent - 1]}`);

    beforeNationBox.style.opacity = '.6';
    this.style.opacity = '1';
    beforeNationBox = this;
}

for (let i = 0; i < nationBox.length; i++) {
    nationBox[i].addEventListener('click', changeNationBox);
}


// for (let i = 0; i < nationBox.length; i++) {
//     nationBox[i].addEventListener('click', function () {
//         // img.src = `./image/bg${this.textContent}.jpg`;
//         img.setAttribute('src', `./image/bg${this.textContent}.jpg`);

//         beforeNationBox.style.opacity = '.5';
//         this.style.opacity = '1';
//         beforeNationBox = this;
//     });
// }

// for (const nation of nationBox) {
//     nation.addEventListener('click', function () {
//         // img.src = `./image/bg${this.textContent}.jpg`;
//         img.setAttribute('src', `./image/bg${this.textContent}.jpg`);

//         beforeNationBox.style.opacity = '.5';
//         this.style.opacity = '1';
//         beforeNationBox = this;
//     });
// }

// function changeNationBox() {
//     // img.src = `./image/bg${this.textContent}.jpg`;
//     img.setAttribute('src', `./image/bg${this.textContent}.jpg`);

//     beforeNationBox.style.opacity = '.5';
//     this.style.opacity = '1';
//     beforeNationBox = this;
// }

// for (let i = 0; i < nationBox.length; i++) {
//     nationBox[i].addEventListener('click', changeNationBox);
// }


// =====민종이꺼 정리본

// 'use strict';

// const main_container = document.getElementById('main_container'),
//     img = main_container.querySelector('img'),
//     nation_container = main_container.querySelector('.nation_container'); // div안에 a태그 넣기위해 추가. 주소참조용, 직관적이고 []대괄호를 죽임으로 오타나 헷갈림등을 줄일 수 있음.
//     // nation_container = main_container.getElementsByClassName(`nation_container`); // 배열형태로 반환.

// const Bg_imgArray = [
//     './image/bg1.jpg',
//     './image/bg2.jpg',
//     './image/bg3.jpg',
//     './image/bg4.jpg',
//     './image/bg5.jpg',
// ];

// /* === 문자열저장방식 === */
// // let html = '';                                  
// // for (let i = 0; i < Bg_imgArray.length; i++) {
// //     html += `<a href="#" class="nationBox nation${i+1}">${i+1}</a>`;
// // }

// // nation_container.innerHTML = html;

// /* === 문자열저장방식 2 === */
// for (let i = 0; i < Bg_imgArray.length; i++) {
//     nation_container.innerHTML += `<a href="#" class="nationBox nation${i+1}">${i+1}</a>`;
// }

// /* === 반환된 배열 참조 === */
// // for(let i = 0 ; i < Bg_imgArray.length; i++){
// //     nation_container[0].innerHTML += `<a href="#" class="nationBox nation${i+1}">${i+1}</a>`;
// // }


// let nationBox = nation_container.getElementsByClassName('nationBox'); // html 작성 된 이후 주소 참조하여 변수선언. nation_container 변수선언 이후니 맞춰서 

// let beforeNationBox = nationBox[0];

// function changeNationBox() {
//     img.setAttribute('src', Bg_imgArray[this.textContent - 1]);

//     beforeNationBox.style.opacity = '.5';
//     this.style.opacity = '1';
//     beforeNationBox = this;
// }

// for (let i = 0; i < nationBox.length; i++) {
//     nationBox[i].addEventListener('click', changeNationBox);
// }