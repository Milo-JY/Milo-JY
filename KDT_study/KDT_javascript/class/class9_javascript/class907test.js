'use strict';


// =====기본형

let productName, productPrice, productCnt;

function addProduct() {
    document.write('<tr>');

    document.write(`<td>${productName}</td>`)
    document.write(`<td>${productPrice} 원</td>`)
    document.write(`<td>${productCnt} 개</td>`)

    document.write('</tr>');
}

document.write('<table border=1>');
document.write('<caption>< 재고품목 ></caption>');

document.write('<tr>');

document.write('<th>품목</th>');
document.write('<th>가격</th>');
document.write('<th>수량</th>');

document.write('</tr>');


outer:
    while (1) {
        productName = prompt('품목 :')
        if (productName === null) {
            break;
        } else if (productName === '') {
            alert('입력된 값이 없습니다.');
            continue;
        }

        while (1) {
            productPrice = +prompt('가격 :')
            if (productPrice === null) {
                break outer;
            } else if (productPrice === '') {
                alert('입력된 값이 없습니다.');
                continue;
            }
            break;
        }

        while (1) {
            productCnt = +prompt('수량 :')
            if (productCnt === null) {
                break outer;
            } else if (productCnt === '') {
                alert('입력된 값이 없습니다.');
                continue;
            }
            break;
        }
        addProduct();
    }

document.write('</table>')


// =====확장형

let productName, productPrice, productCnt;

function addProduct() {
    document.write('<tr>');

    document.write(`<td>${productName}</td>`)
    document.write(`<td>${productPrice} 원</td>`)
    document.write(`<td>${productCnt} 개</td>`)

    document.write('</tr>');
}

document.write('<table border=1>');
document.write('<caption>< 재고품목 ></caption>');

document.write('<tr>');

document.write('<th>품목</th>');
document.write('<th>가격</th>');
document.write('<th>수량</th>');

document.write('</tr>');


outer:
    while (1) {
        productName = prompt('품목 :')
        if (productName === null) {
            break;
        } else if (productName === '') {
            alert('입력된 값이 없습니다.');
            continue;
        }

        while (1) {
            productPrice = +prompt('가격 :')
            if (productPrice === null) {
                break outer;
            } else if (productPrice === '') {
                alert('입력된 값이 없습니다.');
                continue;
            }
            break;
        }

        while (1) {
            productCnt = +prompt('수량 :')
            if (productCnt === null) {
                break outer;
            } else if (productCnt === '') {
                alert('입력된 값이 없습니다.');
                continue;
            }
            break;
        }
        addProduct();
    }

document.write('</table>')