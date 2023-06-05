'use strict';

const main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    li = slide_list.getElementsByTagName('li'),
    btn_back = main_container.querySelector('.btn_back'),
    btn_foward = main_container.querySelector('.btn_foward'),
    pager = main_container.querySelector('.pager');
// 페이져 기준 전부 미리 가져다 놓는다.(시간차, )


for (let i = 0; i < li.length; i++) {
    pager.appendChild(document.createElement('button'));
}

const pager_btn = pager.getElementsByTagName('button');

pager_btn[0].classList.add('opacityOff');

/* 딜레이함수================================================== */

let beforeEventTime = -new Date();

function executable() {
    let currentEventTime = new Date();

    if (currentEventTime - beforeEventTime > 1000) {
        beforeEventTime = currentEventTime;

        return true;
    }
}

// 슬라이드함수==============

let slide_idx = 0;

function sliding(pM, num) {
    li[num].style.left = `${pM*100}`
}

function nonVisible() {
    btn_back.classList.remove('nonVisible');
    btn_foward.classList.remove('nonVisible');
    if (slide_idx <= 0) {
        btn_back.classList.add('nonVisible');
    } else if (slide_idx >= li.length - 1) {
        btn_foward.classList.add('nonVisible');
    }
}

/* ================================================== */

btn_foward.addEventListener('click', () => {

    if (executable()) {

        slide_idx %= li.length;

        li[slide_idx].style.left = '-100%';
        slide_idx++;
        li[slide_idx].style.left = '0';

        setTimeout(() => {
            li[slide_idx-1].style.left = '100%';
        }, 300);

        nonVisible();
    }
});

btn_back.addEventListener('click', () => {
    if (executable()) {
        slide_idx %= li.length;

        li[slide_idx].style.left = '-100%';
        slide_idx--;
        li[slide_idx].style.left = '0';

        nonVisible();
    }
});


pager.addEventListener('click', (e) => {
    // btn_back.getAttribute.dataset
    if (executable()) {
        const targetBtn = e.target.closest('button');
        
        for (let i = 0; i < li.length; i++) {
            if (targetBtn === pager_btn[i]) {
                if(slide_idx < i) sliding(1, i);
                if(slide_idx > i) sliding(-1, i);
                
            }
        }
    }
});
