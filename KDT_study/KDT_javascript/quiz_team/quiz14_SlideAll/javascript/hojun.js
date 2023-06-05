'use strict';

const main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    pager = main_container.querySelector('.pager'),
    img = slide_list.getElementsByTagName('li'),
    [back , foward ] = main_container.getElementsByTagName('a');

for(let i = 0; i<img.length ;i++){
    pager.appendChild(document.createElement('a')).dataset.direction = `${i}`;

};

const imgbtn = pager.getElementsByTagName('a');

let beforeEventTime = -new Date();

function exectable() {
    let currentEventTime = new Date();

    if (currentEventTime - beforeEventTime > 1600) {
        beforeEventTime = currentEventTime;

        return true;
    }
}

let id;
let moveindx = 0;
let lastAtag = 0;

imgbtn[lastAtag].style.opacity = `1`;
img[lastAtag].style.left = `0%`;

function movepage(){
    moveindx %= img.length;
    if(!(lastAtag === moveindx)){
        imgbtn[lastAtag].style.opacity = '.5';

        if(lastAtag < moveindx || lastAtag === img.length -1 ){
            img[lastAtag].style.left = `-100%`;
            img[lastAtag].classList.add('trand');

            moving();

        }else{
            img[moveindx].style.left = '-100%';
        
            setTimeout(() =>{
                img[lastAtag].style.left = `100%`;
                moving();
            }, 1)
            
        }
        setTimeout(() =>{
            
            img[lastAtag].style.left = `100%`;
            img[lastAtag].classList.remove('trand');
            lastAtag = moveindx;
        }, 800)
        btnCheck();
    }   
};

function moving(){
    imgbtn[moveindx].style.opacity = `1`;
    img[moveindx].style.left = `0`;
    img[moveindx].classList.add('trand');
};

function btnCheck(){
    back.classList.remove('nonVisible');
    foward.classList.remove('nonVisible');
    if (moveindx <= 0) {
        back.classList.add('nonVisible');
    } else if (moveindx >= img.length - 1) {
        foward.classList.add('nonVisible');
    }
};

main_container.addEventListener( 'click' , (e) => {
    if(exectable()){
        const targetbtn = e.target;
        if(pager.contains(targetbtn.closest('a'))){
            moveindx = +targetbtn.dataset.direction;
            movepage();
        }else if(targetbtn.parentNode.closest('a')){  
            moveindx += +targetbtn.parentNode.dataset.direction;
            movepage();
        }
    }
});

slide_list.addEventListener('mouseenter' , () => {
    
        id = setInterval(() =>{
            moveindx++;
            if(exectable()){
                movepage();
            }
        } , 1500);
    
});

slide_list.addEventListener('mouseleave' , () => {
    clearInterval(id);
});