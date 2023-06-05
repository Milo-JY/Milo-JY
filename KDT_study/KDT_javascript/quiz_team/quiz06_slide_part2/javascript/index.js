'use strict';

// const main_container = document.querySelector('.main_container'),
//     slide_list = main_container.querySelector('.slide_list'),
//     li = slide_list.getElementsByTagName('li'),
//     btn = main_container.getElementsByTagName('a');

// let slide_idx = 0;
// let beforeEventTime = -new Date();
// let checkValue;
// let intervalHandler;

// // ===mouseenter 시작시간 계산
// function executable() {
//     let currentEventTime = new Date();

//     if (currentEventTime - beforeEventTime > 1000) {
//         beforeEventTime = currentEventTime;

//         return true;
//     }
// }

// // ===이미지 슬라이드 모듈
// function actionSlides() {
//     slide_idx += checkValue;
//     if (slide_idx >= li.length) {
//         slide_idx = 0;
//     }
//     slide_list.style.left = `${-slide_idx * 100}%`;

//     if (slide_idx <= 0) {
//         btn[0].classList.add('nonVisible')
//     } else {
//         btn[0].classList.remove('nonVisible')
//     }

//     if (slide_idx >= li.length -1 ) {
//         btn[1].classList.add('nonVisible')
//     } else {
//         btn[1].classList.remove('nonVisible')
//     }
// }

// main_container.addEventListener('click', (e) => {
//     // 람다식 매개변수 존재 이유는 내부 target 참조용
//     if (executable()) {
//         const target = e.target.closest('a');
//         checkValue = +target.dataset.moveValue;

//         actionSlides();
//     }
// });

// slide_list.addEventListener('mouseenter', () => {
//     checkValue = 1;
//     intervalHandler = setInterval(actionSlides, 2000)
// });

// slide_list.addEventListener('mouseleave', () => {
//     checkValue = 1;
//     clearInterval(intervalHandler);
// });


// 클릭 == 시간계산 모듈화
// 슬라이딩기능 함수 모듈화
// 클릭, 마우스엔터 분할?

// 파트분류 - 이미지 슬라이드, 버튼-back, 버튼-forward
// 파트별 기능 - 버튼 (이미지 전진, 후진 / 0이상 4이하에서 nonVisible)
//            이미지 슬라이드 자동동작 (점진적 전진, 빠른 후진)

// 기능 상세 
//  1) btn-forward : 다음 페이지 이동(ul 좌표 이동) / 마지막 페이지 사라짐
//  2) btn-back : 이전 페이지(ul 좌표 연동) 이동 / 첫 페이지 사라짐
//  3) 이미지 자동 : 마우스 enter, 순차적 좌표 이동(마지막까지)
//  4) 이미지 롤백 : 마우스 leave, 첫페이지로 좌표 이동(이동속도 없음)


// ========효율적 코드 적용

'use strict';

const main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    li = slide_list.getElementsByTagName('li'),
    [backBtn, fowardBtn] = main_container.getElementsByTagName('a');

    
    let beforeEventTime = -new Date();
    let slide_idx = 0;

function executable() {
    let currentEventTime = new Date();

    if (currentEventTime - beforeEventTime > 1000) {
        beforeEventTime = currentEventTime;

        return true;
    }
}

function actionSlides(e) {
    slide_idx %= li.length

    slide_list.style.left = `${-slide_idx * 100}%`;

    backBtn.classList.remove('nonVisible');
    fowardBtn.classList.remove('nonVisible');
    if (slide_idx <= 0) {
        backBtn.classList.add('nonVisible');
    } else if (slide_idx >= li.length - 1) {
        fowardBtn.classList.add('nonVisible');
    }
}

// =================================================================================
let slide_container = main_container.querySelector('.slide_container');
let autoSlideStop;

main_container.addEventListener('click', function (e) {
    if (executable()) {
        const targetBtn = e.target.closest('a');
    
        if (this.contains(targetBtn)) {
            slide_idx += +targetBtn.dataset.moveValue;
            actionSlides();
        }
    }
});

slide_container.addEventListener('mouseenter', () => {
    autoSlideStop = setInterval(() => {
        slide_idx++;
        actionSlides();
    }, 2000);
});

slide_container.addEventListener('mouseleave', () => {
    clearInterval(autoSlideStop);
})


// ========교육용

// const main_container = document.querySelector('.main_container'),
//     slide_list = main_container.querySelector('.slide_list'),
//     li = slide_list.getElementsByTagName('li'),
//     [backBtn, fowardBtn] = main_container.getElementsByTagName('a');
// // 호출한 시점에서의 인덱스 값을 결정하는 방법을 찾기***
// let slide_idx = 0;
// let beforeEventTime = -new Date();

// function executable() {
//     let currentEventTime = new Date();

//     if (currentEventTime - beforeEventTime > 1000) {
//         beforeEventTime = currentEventTime;

//         return true;
//     }
// }

// function actionSlides(e) {
//     if (executable()) {
//         if (this === window || e.target.closest('a') === backBtn || e.target.closest('a') === fowardBtn) {
//             let move = this === window ? 1 : +e.target.closest('a').dataset.moveValue;
    
//             slide_idx += move;
//             slide_idx %= li.length;
    
//             slide_list.style.left = `${-slide_idx * 100}%`;
    
//             backBtn.classList.remove('nonVisible');
//             fowardBtn.classList.remove('nonVisible');
//             if (slide_idx <= 0) {
//                 backBtn.classList.add('nonVisible');
//             } else if (slide_idx >= li.length - 1) {
//                 fowardBtn.classList.add('nonVisible');
//             }
//         }
//     }
// }

// // =================================================================================
// let slide_container = main_container.querySelector('.slide_container');
// let autoSlideStop;

// main_container.addEventListener('click', actionSlides);

// slide_container.addEventListener('mouseenter', () => {
//     autoSlideStop = setInterval(actionSlides, 2000);
// });

// slide_container.addEventListener('mouseleave', () => {
//     clearInterval(autoSlideStop);
// })

// ========^교육용