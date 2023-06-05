'use strict';

let scale = 5;
let ar = new Array(scale);

for (let i = 0; i < ar.length; i++) {      
    ar[i] = new Array(scale);
}

for (let i = 0, v = 1; i<scale; i++) {
    for (let j = scale-1; j>=0 ; j--) {
        if(scale-1<=i+j) {
            ar[j][i] = v++;
        } 
    }
}

for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar[i].length; j++) {
        if (ar[i][j]) {
            let result = ar[i][j];
            document.write(`${result/10>=1?'':'&nbsp;'}${result} `);
        } else {
            document.write(`&nbsp;&nbsp;&nbsp;`);
        }
    }
    document.write('<br/>');
}

// =====풀이

'use strict';

let n = +prompt('줄수 : ');

let ar2 = new Array(n);
for (let i = 0; i < ar2.length; i++) {      
    ar2[i] = new Array(n);
}

for (let i = 0, v = 1; i < n; i++) {
    for (let j = n-1; j >= n-1-i; j--) {
        ar2[j][i] = v++;
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let result = ar2[i][j];

        if (j < n-1 - i) {
            document.write('&nbsp;&nbsp;&nbsp;');
        } else {
            document.write(`${result/10>=1?'':'&nbsp;'}${result} `);
        }
    }
    document.write('<br/>');
}

















