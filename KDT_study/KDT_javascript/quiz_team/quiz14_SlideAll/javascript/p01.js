'use strict';

// 마우스 엔터 -> 자동 슬라이딩
// 다음 순번은 먼저 와있으면 된다.

// 논리 정리
// 1. 왼쪽으로 넘어간 사진도 앞번호 클릭 후 다시 누르면 오른쪽에서 리턴됨.

const main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    li = slide_list.getElementsByTagName('li'),
    pager = main_container.querySelector('.pager');

const images = slide_list.getElementsByTagName('img');

// 앞,뒤 버튼 클릭은 순서대로 가능,하지만 버튼은 순서 상관 없음. 

let slide_idx = 0;

let beforeEventTime = -new Date();

/* ================================================== */

function executable() {
    let currentEventTime = new Date();

    if (currentEventTime - beforeEventTime > 1000) {
        beforeEventTime = currentEventTime;

        return true;
    }
}

/* ================================================== */
// ==========================슬라이드 함수

function actionSlide() {
    li[0].style.left = '-100%'
    li[1].style.left = '0%'

    // backBtn.classList.remove('nonVisible');
    // fowardBtn.classList.remove('nonVisible');
    // if (slide_idx <= 0) {
    //     backBtn.classList.add('nonVisible');
    // } else if (slide_idx >= li.length - 1) {
    //     fowardBtn.classList.add('nonVisible');
    // }
}

// =================================================================================

main_container.addEventListener('click', ()=> {
    // const target = e.target.closest('a');

    actionSlide();
});

/* ================================================== */
// ==============================

for (let i = 0; i < li.length; i++) {
    pager.innerHTML += `<a class="pagerBtn bg${i+1}" href="#" type="button"></a>`
}