'use strict';

const main_container = document.querySelector('.main_container'),
    slide_lists = main_container.querySelectorAll('.slide_list li'),
    btn = main_container.querySelectorAll('.main_container>a'),
    pager = main_container.querySelector('.pager');

for (let i = 0; i < slide_lists.length; i++) {
    pager.innerHTML += `<a href = "#" data-direction = ${i}></a>`;
}

const pagers = pager.getElementsByTagName('a');
const DELAYTIME = 1000;

function executable() {
    let beforTime = -new Date();
    
    return function () {
        const currentTime = new Date();

        if (currentTime - beforTime > DELAYTIME + 100) {
            beforTime = currentTime;

            return true;
        }
    };
}

let currentIdx = 0,
    nextIdx,
    direction;

// =======================================================================
/* 함수 */

/* < 버튼 히든 설정 및 미설정 함수 > */
function checkBtnView() {
    btn[0].classList.remove('nonVisible');
    btn[1].classList.remove('nonVisible');

    if (nextIdx <= 0) {
        btn[0].classList.add('nonVisible');
    } else if (nextIdx >= slide_lists.length - 1) {
        btn[1].classList.add('nonVisible');
    }
}

/* < 페이저 하이라이트 함수 > */
function highlightPager() {
    pagers[currentIdx].style.backgroundColor = 'darkgray';
    pagers[nextIdx].style.backgroundColor = 'rgb(49, 47, 47)';
}

function preparationActive(){
    slide_lists[nextIdx].classList.remove('animated');
    slide_lists[nextIdx].style.left = `${direction * 100}%`;
}

function activeSlide(){
    setTimeout(()=>{
        slide_lists[currentIdx].classList.add('animated');
        slide_lists[nextIdx].classList.add('animated');

        slide_lists[currentIdx].style.left = `${-direction * 100}%`;
        slide_lists[nextIdx].style.left = 0

        highlightPager();
        checkBtnView();

        currentIdx = nextIdx;
    }, 10);
}

// =======================================================================
/* 이벤트 */

const slide_list = main_container.querySelector('.slide_list');
let autoslide;

main_container.addEventListener('click', function(e){
    const eventEle = e.target.closest('a');

    if( this.contains(eventEle) && executable()){
        e.preventDefault();

        const extractValue = +eventEle.dataset.direction;

        nextIdx = currentIdx + extractValue;

        if( eventEle.children[0] ){
            direction = extractValue;
        } else {
            nextIdx = extractValue;
            direction = extractValue > currentIdx ? 1:-1;
        }

        if( currentIdx != nextIdx ){
            preparationActive();
        } else {
            return;
        }

        activeSlide();
    }
});

slide_list.addEventListener('mouseenter', ()=>{
    autoslide = setInterval(() => {
        if(executable()){
            nextIdx = ( currentIdx + 1 ) % slide_lists.length
            direction = 1;

            preparationActive();
            activeSlide();
        }

    }, DELAYTIME);
});

slide_list.addEventListener('mouseleave', ()=>{
    clearInterval(autoslide);
});