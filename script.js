const container = document.querySelector('.container');
const mainContainer = document.querySelector('.main-container');
const resizeButton = document.querySelector('.button1');
const randomButton = document.querySelector('.button2');
const clearButton = document.querySelector('.button3');
const boxWidth = 400; //the width of the drawing area is 400px
let randomBrush;
let size, nsize;
let init = (function() {
    randomBrush = false;
    const defSize = 16;
    nsize = defSize;
    mainContainer.style.display = 'grid';
    mainContainer.style.gridTemplateColumns = '1fr 1fr 1fr';
    container.style.gridColumnStart = '2';
    container.style.gridRowStart = '3';
    container.style.display = 'grid';
    container.style.gridTemplateRows = 'auto';
    container.style.width = '350px';
    container.style.border = '2px solid gray';
    container.style.justifySelf = 'center';
    randomButton.addEventListener('click', function() { 
        if (randomBrush === false) {
            randomBrush = true; 
        } else {
            randomBrush = false; 
        }
    });
    resizeButton.addEventListener('click', resize);
    clearButton.addEventListener('click', clear);
    draw(defSize);
})();
function draw(n) {
    size = n;
    container.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
    container.style.gridAutoColumns = boxWidth/size + 'px';
    container.style.gridAutoRows = boxWidth/size + 'px';
    for(let i = 0; i < size*size; i++) {
        let element = document.createElement('div');
        element.textContent = '';
        element.onmouseenter = function() {
            if (!element.classList.contains('colored')) {
                if (randomBrush) {
                    element.style.background = randomColor();
                } else {
                    element.style.background = 'white';
                }
                element.classList.add('colored');
            }
        };
        container.appendChild(element);
    }
}
function randomColor() {
    let r, g, b;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    str = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return str;
}
function resize() {
    container.innerHTML = '';
    nsize = prompt('What should be the new size of the drawing are? (E.g type "32" for 32x32)');
    if (nsize > 0 && nsize < 129) {
        draw(nsize);
    } else {
        alert('Please enter a num between 0 and 128');
        resize();
    }
}
function clear() {
    container.innerHTML = '';
    draw(nsize);
}