`use strict`

const body = document.querySelector(`body`),
    main_container = body.querySelector(`.main_container`),
    slide_list = main_container.querySelector(`.slide_list`),
    li = main_container.getElementsByTagName(`li`),
    [back , foward ] = main_container.getElementsByTagName(`a`),
    pager = main_container.querySelector(`.pager`);

for (let i = 0; i < li.length; i++) {
    pager.appendChild(document.createElement('button')).dataset.index = `${i}`
}
const button = pager.getElementsByTagName(`button`);

let lastIdx = 0;
let beforeEventTime = -new Date();
let slideInter;

button[0].classList.add(`opacityOne`);

function executable() {
    if (new Date() - beforeEventTime > 1250) {
        beforeEventTime = new Date();
        return true;
    }
}

function hideBtn(num) {
    back.classList.remove(`nonVisible`);
    foward.classList.remove(`nonVisible`);
    if(num === 0) back.classList.add(`nonVisible`);
    if(num === li.length-1) foward.classList.add(`nonVisible`);
}

function moveSlide(pM, i) {
    let num = lastIdx + pM;
    
    // "if(i && i >= num || i < num) num = i;" 부분이 가독성이 떨어진다는 의견
    // 오토슬라이드에만 나머지 구하는 식 적용 따로 빼는게 필요
    // 셋타임아웃에 너무 낭비했다는 평가
    // 첫째꺼는 트랜지션을 제거할 필요가 없다(셋타임이 두번이 필요X)
    // 자원부분 아쉽고
    // 평가먼저하고 값을 호출
    if(i && i > num || i < num) num = i;
    num %= li.length;
    li[num].style.left =`${pM * 100}%`;
    
    setTimeout(()=> {
        li[num].classList.add(`transition`);
        li[lastIdx].classList.add(`transition`);
        li[num].style.left =`0%`;
        li[lastIdx].style.left = `${-pM * 100}%`;
        button[lastIdx].classList.remove(`opacityOne`);
        button[num].classList.add(`opacityOne`);
        hideBtn(num);
    }, 100);

    setTimeout(()=> {
        li[num].classList.remove(`transition`);
        li[lastIdx].classList.remove(`transition`);
        lastIdx = num;
    }, 1200);

}

main_container.addEventListener( 'click' , (e) => {

    const targetbtn = e.target;
    e.preventDefault();

    if(pager.contains(targetbtn.closest('button'))){
        if(executable()) {
            let datasetIndex = +targetbtn.dataset.index ;
            if (datasetIndex > lastIdx) moveSlide(1, datasetIndex);
            if (datasetIndex < lastIdx) moveSlide(-1, datasetIndex); 
        }
    }else if(targetbtn.closest('a')){  
        if(executable()) moveSlide(+targetbtn.closest('a').dataset.direction);
    }
    
});

slide_list.addEventListener(`mouseenter`, () => {
    slideInter = setInterval(()=> {
        if(executable()) moveSlide(1);
    }, 1300);
});

slide_list.addEventListener(`mouseleave`, () => {
    clearInterval(slideInter);
});
