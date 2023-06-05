'use strict';

let itemName = ['품목', '가격', '수량'];
let itemData = [
    ['', '', ''],
    ['', '원', '개'],
];

function addProduct() {
    document.write('<tr>');
    
    for (let i = 0; i < itemName.length; i++) {
        document.write(`<td>${itemData[0][i]}${itemData[1][i]}</td>`);
    }

    document.write('</tr>');
}

document.write('<table>')
document.write('<caption>재고상품</caption>')

document.write('<tr>')

for (let i = 0; i < itemName.length; i++) {
    document.write(`<th>${itemName[i]}</th>`)
}

document.write('</tr>')

outer:
while (1) {
    for (let i = 0; i < itemData[0].length; i++) {
        itemData[0][i] = prompt(`${itemName[i]} :`);
        if (itemData[0][i] === null) {
            break outer;
        } else if (itemData[0][i] === '') {
            alert('입력된 값이 없습니다.')
            i--;
        }
    }
    addProduct();
}

document.write('</table>')

