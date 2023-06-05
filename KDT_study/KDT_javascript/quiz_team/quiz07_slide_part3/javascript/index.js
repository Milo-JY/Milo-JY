'use strict';

// 1.ul(slide_list)안에 이미지 개수에 맞춰 li생성
// 2.좌표 이동이 아닌, 이미지 교환방식?
// 3.자동 교체 - 무한반복

// const slide_list = document.querySelector('.slide_list');
// let slide_idx = 0;

// let imgAr = [
//     'bg1.jpg',
//     'bg2.jpg',
//     'bg3.jpg',
//     'bg4.jpg',
//     'bg5.jpg',
// ];

// for (let i = 0; i < imgAr.length; i++) {
//     slide_list.innerHTML += `<li></li>`
// }

// const li = slide_list.getElementsByTagName('li');

// for (let i = 0; i < imgAr.length; i++) {
//     li[i].style.background = `url(./image/${imgAr[i]}) center / cover`;
// }

// li[slide_idx].classList.add('leftMove');

// function actionSlide() {
//     li[slide_idx++].classList.remove('leftMove');
//     slide_idx %= imgAr.length;
//     li[slide_idx].classList.add('leftMove');
// }

// setInterval(actionSlide, 3000);


// ====appendChild 추가한 버전

'use strict';

const slide_list = document.querySelector('.slide_list');

const imgAr = [
    './image/bg1.jpg',
    './image/bg2.jpg',
    './image/bg3.jpg',
    './image/bg4.jpg',
    './image/bg5.jpg',
]

/* 
        < createElement >

    - 인수로 지정한 태그명에 해당하는 태그 요소를 생성하여 반환.
      단, 생성 시의 요소는 모두 독립적인 개별요소가 반환됨에 따라 재활용이 되지 않음에 주의.


        < appendChild >

    - 지정한 부모 요소에 인수로 전달한 요소를 부모 요소의 마지막 자식 요소로 추가후
      추가된 자식 요소의 참조를 반환.
    */
for (let i = 0; i < imgAr.length; i++) {
    slide_list.appendChild(document.createElement('li')).style.background = `url(${imgAr[i]}) center/100% 100%`;
}

// ====================================================================

const imgList = slide_list.getElementsByTagName('li');

imgList[0].classList.add('inImg');

// ====================================================================
let i = 0;

setInterval(() => {
    imgList[i++].classList.remove('inImg');

    i %= imgList.length;

    imgList[i].classList.add('inImg');
}, 2000);