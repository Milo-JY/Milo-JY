'use strict';

const main = document.querySelector('.main_container'),
    slideList = main.querySelector('.slide_list'),
    slideImg = slideList.getElementsByTagName('li'),
    [back, foward] = main.querySelectorAll('.main_container a'),
    pager = main.querySelector('.pager');

let idx = 0, beforeIdx = 0;
let autoslide;

let beforeTime = -new Date();
let delayTime = 500;


// 페이지 태그
for (let i = 0; i < slideList.children.length; i++) {
    pager.appendChild(document.createElement('a')).dataset.idx = `${i}`;
}

const btn = pager.getElementsByTagName('a');
slideImg[beforeIdx].style.left = '0';
btn[beforeIdx].classList.add('nowPage');


// 함수
function slide(rev1) {
    if (idx !== beforeIdx) {
        slideImg[beforeIdx].classList.remove('anime');
        slideImg[idx].classList.remove('anime');

        slideImg[idx].style.left = '100%';
        wait('-100%');

        if (rev1) { // 역방향
            if (idx < beforeIdx) {
                slideImg[idx].style.left = '-100%';
                wait('100%');
            }
        }

        btn[beforeIdx].classList.remove('nowPage');
        btn[idx].classList.add('nowPage');

        back.classList.remove('nonVisible');
        foward.classList.remove('nonVisible');
        if (idx === 0) {
            back.classList.add('nonVisible');
        } else if (idx === btn.length - 1) {
            foward.classList.add('nonVisible');
        }
    }
}

function wait(rev2) {
    setTimeout(() => {
        slideImg[beforeIdx].classList.add('anime');
        slideImg[idx].classList.add('anime');

        slideImg[idx].style.left = '0';
        slideImg[beforeIdx].style.left = rev2;
    }, 100)
}

function delay() {
    if (new Date() - beforeTime > delayTime + 100) {
        beforeTime = new Date();
        return true;
    }
}


// 각자 idx값 지정 후 슬라이드 구조 통일

// 클릭 시
main.addEventListener('click', (click) => {
    if (delay()) {
        const target = click.target.closest('a');
        if (target === null) return;

        beforeIdx = idx;

        // 화살표 클릭 시
        if (target.parentNode === main) {
            idx += +target.dataset.direction;
        }

        // 페이지 클릭 시
        if (target.parentNode === pager) {
            idx = +target.dataset.idx;
        }

        slide(true);
    }
})

// hover 시 자동 스크롤
slideList.addEventListener('mouseenter', () => {
    autoslide = setInterval(() => {
        beforeIdx = idx;
        idx += 1;
        idx %= slideImg.length;

        slide(false);
    }, 1000);
})

slideList.addEventListener('mouseleave', () => {
    clearInterval(autoslide);
})