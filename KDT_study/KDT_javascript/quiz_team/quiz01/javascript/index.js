'use strict';

const main_container = document.getElementById('main_container'),
    img = main_container.querySelector('img'),
    nationBox = main_container.getElementsByClassName('nationBox');

let beforeNationBox = nationBox[0];

let imageName = [
    `bg1.jpg`,
    `bg2.jpg`,
    `bg3.jpg`,
    `bg4.jpg`,
    `bg5.jpg`,
];

function changeNationBox() {

    img.setAttribute('src', `./Images/${imageName[this.textContent - 1]}`);
    
    beforeNationBox.style.opacity = '.6';
    this.style.opacity = '1';
    beforeNationBox = this;
}

for (let i = 0; i < nationBox.length; i++) {
    nationBox[i].addEventListener('click', changeNationBox);
}



// for (let i = 0; i < nationBox.length; i++) {
//     nationBox[i].addEventListener('click', function () {
//         // img.src = `./image/bg${this.textContent}.jpg`;
//         img.setAttribute('src', `./image/bg${this.textContent}.jpg`);

//         beforeNationBox.style.opacity = '.5';
//         this.style.opacity = '1';
//         beforeNationBox = this;
//     });
// }

// for (const nation of nationBox) {
//     nation.addEventListener('click', function () {
//         // img.src = `./image/bg${this.textContent}.jpg`;
//         img.setAttribute('src', `./image/bg${this.textContent}.jpg`);
    
//         beforeNationBox.style.opacity = '.5';
//         this.style.opacity = '1';
//         beforeNationBox = this;
//     });
// }

// function changeNationBox() {
//     // img.src = `./image/bg${this.textContent}.jpg`;
//     img.setAttribute('src', `./image/bg${this.textContent}.jpg`);
    
//     beforeNationBox.style.opacity = '.5';
//     this.style.opacity = '1';
//     beforeNationBox = this;
// }

// for (let i = 0; i < nationBox.length; i++) {
//     nationBox[i].addEventListener('click', changeNationBox);
// }