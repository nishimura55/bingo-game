'use strict';

const num = 3;

for (let n = 0; n < num; n++) {
    const line = document.createElement('div');
    line.classList.add('line');
    document.body.appendChild(line);
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        line.appendChild(div);
        div.addEventListener('click', () => {
            div.classList.add('selected');
        });
    };
}

