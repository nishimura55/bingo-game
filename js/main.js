'use strict';

const num = 3;
let numbers = [];
for (let m = 0; m < num ** 2; m++) {
    numbers.push(m + 1);
};

let random = Math.floor(Math.random() * (num ** 2 ) + 1);
deletnumber();

function deletnumber() {
    let index = numbers.indexOf(random);
    console.log(index);
    numbers.splice(index, 1);
}

const number = document.createElement('div');
number.textContent = `${random}`
document.body.appendChild(number);


function resetNumber() {
    if (numbers.length === 0) {
        number.textContent = `終了！`
    } else {
        random = numbers[Math.floor(Math.random() * numbers.length)];
        deletnumber();
        console.log(numbers);
        number.textContent = `${random}`;
    }
}

const numberReset = document.createElement('div');
numberReset.classList.add('reset')
numberReset.textContent = `リセット`;
document.body.appendChild(numberReset);
numberReset.addEventListener('click', () => {
    resetNumber();
});


for (let n = 0; n < num; n++) {
    const line = document.createElement('div');
    line.classList.add('line');
    document.body.appendChild(line);
    for (let i = n * num; i < n * num + num; i++) {
        const square = document.createElement('div');
        square.classList.add('box');
        square.textContent = `${i + 1}`
        line.appendChild(square);
        square.addEventListener('click', () => {
            square.classList.add('selected');
        });
    };
}

