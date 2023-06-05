'use strict';

const main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    slide_list_li = slide_list.getElementsByTagName('li'),
    img = slide_list.getElementsByTagName('img'),
    pager = document.querySelector('.pager');

const [btn_back, btn_foward] = main_container.getElementsByTagName('a');

// ==================== 초기변수 ======================
let before_idx = 0; // 이전 슬라이드 인덱스
let slide_idx = 0; // 현재 슬라이드 인덱스
let beforeEventTime = -new Date(); // 이전 클릭시간 변수
let autoSlideStop;      // 작동멈춤 id

/**pager 버튼 생성 */
for (let i = 0; i < img.length; i++) {
    pager.innerHTML += `<a href="#" class="${i}"></a>`;
}
const pager_a = pager.getElementsByTagName('a');

// ==================== 함수 ======================
/**클릭 딜레이 함수 */
function exectable(value) {
    let currentEventTime = new Date();
    if (currentEventTime - beforeEventTime > 1000) {
        beforeEventTime = currentEventTime;
        return true;
    }
}

slide_list_li[slide_idx].style.left = '0'; // 첫 슬라이드 초기 설정
pager_a[slide_idx].classList.add(`opacity`); // 첫 슬라이드 페이지버튼 투명도 클래스

/**슬라이드 작동 함수 (인덱스,가감,이동)*/
function activeSlide(idx, plus, move) {
    slide_list_li[idx].style.left = `${-move * 100}%`

    setTimeout(() => {
        plus; // 가감 매개변수
        slide_idx %= slide_list_li.length;
        before_idx %= slide_list_li.length;

        slide_list_li[before_idx].style.left = `${move * 100}%`;
        slide_list_li[slide_idx].style.left = `0%`

        pager_a[before_idx].classList.remove(`opacity`);
        pager_a[slide_idx].classList.add(`opacity`);

        slide_list_li[before_idx].style.transition = `0.8s`; // setTimeout으로 
        slide_list_li[slide_idx].style.transition = `0.8s`; // 슬라이드 이동 이후 트랜지션O

        btn_back.classList.remove('nonVisible');
        btn_foward.classList.remove('nonVisible');
        if (slide_idx <= 0) {
            btn_back.classList.add('nonVisible');
        } else if (slide_idx >= slide_list_li.length - 1) {
            btn_foward.classList.add('nonVisible');
        }

        before_idx = slide_idx;
    }, 80);
    slide_list_li[before_idx].style.transition = `none`; // 슬라이드 이동 이전 트랜지션x
    slide_list_li[slide_idx].style.transition = `none`;
}


// ==================== 이벤트 ======================
/**btn(back,forward) pager버튼 클릭시, 슬라이드 작동 이벤트 */
main_container.addEventListener('click', function (event) {
    let targetEG = event.target.closest('a');

    if (exectable(800)) {
        if (targetEG.className == 'btn_forward' || targetEG.className == 'btn_back') {
            let moveData = +targetEG.dataset.direction;

            activeSlide(slide_idx + moveData, slide_idx += moveData,  -moveData);
        } else if (pager.contains(targetEG)) {
            let num = targetEG.className;

            if (num == slide_idx) return;

            if (num > slide_idx) {
                activeSlide(num, slide_idx=num, -1);
            } else {
                activeSlide(num, slide_idx=num, 1);
            }
        }
    }
});

/**mouseEnter,leave 오토슬라이드 작동 이벤트  */
slide_list.addEventListener('mouseenter', function () {
    autoSlideStop = setInterval(() => {
        let after_aidx = (slide_idx + 1);

        activeSlide(after_aidx %= slide_list_li.length, slide_idx = after_aidx, -1)
    }, 2000);
});

slide_list.addEventListener('mouseleave', () => {
    clearInterval(autoSlideStop);
});