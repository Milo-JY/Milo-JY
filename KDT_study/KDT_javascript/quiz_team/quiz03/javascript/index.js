'use strict'

const main_container = document.getElementById('main_container'),
    img = main_container.querySelector('img'),
    nation_container = main_container.querySelector('.nation_container');

const imgAr = [
    './image/bg1.jpg',
    './image/bg2.jpg',
    './image/bg3.jpg',
    './image/bg4.jpg',
    './image/bg5.jpg',
];

/* 
    동적 요소 생성.
*/
for (let i = 0; i < imgAr.length; i++) {
    nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

/* ========================================================================================== */

const nationBox = nation_container.getElementsByClassName('nationBox');
let beforeNation = nationBox[0];

function changeImg_nation() {                               
    let idx = beforeNation.textContent % imgAr.length

    img.src = imgAr[idx];

    beforeNation.style.opacity = '.5';          // 이전요소 네이션 
    nationBox[idx].style.opacity = '1';                   // 현재요소 네이션
    beforeNation = nationBox[idx];
}

/* ========================================================================================== */

let flag;
let stop;

function activeImg() {          // 이미지 동작 실행
    stop = setInterval(changeImg_nation, 2000);
}

function stopImg() {            // 이미지 동작 멈춤
    clearInterval(stop);
}

activeImg();

main_container.addEventListener('click', () => {
    if (flag) {
        activeImg();
    } else {
        stopImg();
    }

    flag = !flag;
});