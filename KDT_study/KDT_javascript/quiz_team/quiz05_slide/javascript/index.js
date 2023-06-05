`use strict`;

const main_container = document.querySelector(".main_container"),
    slide_list = main_container.querySelector(".slide_list"),
    btn = main_container.getElementsByTagName("a"),
    li = slide_list.getElementsByTagName("li");

let slide_idx = 0;
let lastClick = -2000;
let atClick;



// =====
// < 이벤트 위임 + 딜레이 >

main_container.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    let checkIdx, other;

    atClick = new Date();

    if (atClick - lastClick >= 2000) {

        lastClick = atClick;
        switch (target) {
            case btn[0]:
                slide_idx--;
                checkIdx = slide_idx <= 0;
                other = btn[1]
                break;

            case btn[1]:
                slide_idx++;
                checkIdx = slide_idx >= li.length - 1;
                other = btn[0]
                break;

            default:
                return;
        }
    }

    slide_list.style.left = `${slide_idx * -100}%`;

    other.classList.remove('nonVisible');
    if (checkIdx) {
        target.classList.add('nonVisible');
    }
});
// ===정답풀이
let beforeEventTime = -new Date();

function exectable() {
    let currentEventTime = new Date();

    if (currentEventTime - beforeEventTime > 1000) {
        beforeEventTime = currentEventTime;

        return true;
    }
}

main_container.addEventListener('click', (e) => {
    if (exectable()) {
        const target = e.target.closest('a');
        let checkIdx, other;
    
        switch (target) {
            case btn[0]:
                slide_idx--;
                checkIdx = slide_idx <= 0;
                other = btn[1];
                break;
            case btn[1]:
                slide_idx++;
                checkIdx = slide_idx >= li.length - 1;
                other = btn[0];
                break;
            default:
                return;
        }
    
        slide_list.style.left = `${-slide_idx * 100}%`;
    
        other.classList.remove('nonVisible');
        if (checkIdx) {
            target.classList.add('nonVisible');
        }
    }
});


// =========
// < 이벤트 위임 >

// 익명함수는 그 시점에서의 값을 평가함.

// 위임 : 이벤트 -> main_container에서 a링크 클래스가 back/foward를 포함하는지 if평가해서 실인수 적용하도록.



// =====민우꺼

// const main_container = document.querySelector(".main_container"),
//     slide_list = main_container.querySelector(".slide_list"),
//     btn = main_container.getElementsByTagName("a"),
//     li = slide_list.getElementsByTagName("li");

// let slide_idx = 0;

// function activeSlides(slide_move, checkIdx, other, self) {
//     slide_idx += slide_move;
//     slide_list.style.left = `${slide_idx * -100}%`;

//     other.classList.remove("nonVisible");
//     if (checkIdx()) {
//         self.classList.add("nonVisible");
//     }
// }   

// function handleClick(e) {
//     const eventOj = e.target.closest('a');

//         if(eventOj.className === 'btn_back') {    
//             activeSlides(-1, () => slide_idx <= 0, btn[1], btn[0]);
//         }
//         if (eventOj.className === 'btn_foward') {
//             activeSlides(1, () => slide_idx >= li.length - 1, btn[0], btn[1]);
//         }
// }

// main_container.addEventListener('click',handleClick);


// =====민수꺼

// const main_container = document.querySelector(`.main_container`),
//     slide_list = main_container.querySelector(`.slide_list`),
//     slide_list_li = slide_list.getElementsByTagName(`li`),
//     btn = main_container.getElementsByTagName(`a`);

// let imgNow = 0;
// let imgTotal = slide_list_li.length - 1;

// function activateSlides(pM, check, ano, self) {

//     imgNow += pM
//     slide_list.style.left = `${imgNow * -100}%`;

//     ano.classList.remove(`nonVisible`);

//     if (check()) {
//         self.classList.add(`nonVisible`);
//     }
// }


// main_container.addEventListener('click', function(e){

//     let clickObj = e.target;

//     while(clickObj.tagName !== 'A'){
//         clickObj = clickObj.parentNode;
//     }

//     if (clickObj === btn[0]) {
//         activateSlides(-1, () => imgNow <= 0, btn[1], btn[0]);

//     } else if ( clickObj === btn[1]) {
//         activateSlides(1, () => imgNow >= imgTotal, btn[0], btn[1]);
//     }
// });


// =============================================================

// btn[1].addEventListener('click', function () {
//     slide_list.style.left = `${++slide_idx * -100}%`;

//     btn[0].classList.remove(`nonVisible`);
//     if (slide_idx >= li.length - 1) {
//         this.classList.add(`nonVisible`)
//     }
// })

// btn[0].addEventListener('click', function () {
//     slide_list.style.left = `${--slide_idx * -100}%`;

//     btn[1].classList.remove(`nonVisible`);
//     if (slide_idx >= 0) {
//         this.classList.add(`nonVisible`)
//     }
// })

// =============================================================

// function activeSlides(slide_move, checkIdx, other, self) {
//     slide_idx += slide_move;
//     slide_list.style.left = `${slide_idx * -100}%`;

//     other.classList.remove(`nonVisible`);
//     if (checkIdx) {
//         self.classList.add(`nonVisible`);
//     }
// }

// 익명함수는 그 시점에서의 값을 평가함.

// 위임 : 이벤트 -> main_container에서 a링크 클래스가 back/foward를 포함하는지 if평가해서 실인수 적용하도록.

// 버블링 => 

// btn[1].addEventListener('click', function () {
//     activeSlides(1, () => slide_idx >= li.length - 1, btn[0], this);
// });

// btn[0].addEventListener('click', function () {
//     activeSlides(-1, () => slide_idx <= 0, btn[1], this);
// });

// main_container.addEventListener('click', function(e){
//     const eventOj = e.target;

//     if( eventOj.tagName === 'LI' ){
//         eventOj.style.backgroundColor = 'yellow'
//     }
// });

// ==================================

// `use strict`;

// let main_container =document.querySelector('.main_container'),
//     slide_list = main_container.querySelector('.slide_list'),
//     btn = main_container.getElementsByTagName('a'),
//     li = slide_list.getElementsByTagName('li');

// let slide_idx = 0; 

// btn[1].addEventListener('click', function() {
//     slide_list.style.left = `${ ++slide_idx * -100}%`;

//     btn[0].classList.remove('nonVisible');
//     if(slide_idx >= li.length - 1){
//         this.classList.add('nonVisible');
//     }
// });

// btn[0].addEventListener('click', function() {
//     slide_list.style.left = `${--slide_idx * -100}%`;

//     btn[1].classList.remove('nonVisible');
//     if(slide_idx <= 0){
//         this.classList.add('nonVisible');
//     }
// });


// ==========================

// const slide_list_li = slide_list.getElementsByTagName('li');
// const btn_back = document.querySelector(`.btn_back`);
// const btn_foward = document.querySelector(`.btn_foward`);

// let imgNow = 0;
// let imgTotal = slide_list_li.length - 1;

// btn_foward.addEventListener('click', function () {
//     imgNow++;
//     slide_list.style.left = `${imgNow * -100}%`;

//     if (imgNow !== 0) {
//         btn_back.classList.remove(`nonVisible`);
//     }
//     if (imgNow === imgTotal) {
//         this.classList.add(`nonVisible`);
//     }
// })

// btn_back.addEventListener('click', function () {
//     imgNow--;
//     slide_list.style.left = `${imgNow * -100}%`;

//     if (imgNow !== imgTotal) {
//         btn_foward.classList.remove(`nonVisible`);
//     }
//     if (imgNow === 0) {
//         this.classList.add(`nonVisible`);
//     }
// })

// // ====hover

// btn_back.addEventListener('mouseenter', () => {
//     btn_back.classList.add('hover');
// })

// btn_back.addEventListener('mouseleave', () => {
//     btn_back.classList.remove('hover');
// })

// btn_foward.addEventListener('mouseenter', () => {
//     btn_foward.classList.add('hover');
// })

// btn_foward.addEventListener('mouseleave', () => {
//     btn_foward.classList.remove('hover');
// })