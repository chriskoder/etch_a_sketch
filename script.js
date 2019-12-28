const container = document.querySelector('.container');
const mainContainer = document.querySelector('.main-container');
const boxWidth = 400;
mainContainer.style.display = 'grid';
mainContainer.style.gridTemplateColumns = '1fr 1fr 1fr';
container.style.gridColumnStart = '2';
container.style.display = 'grid';
container.style.gridTemplateRows = 'auto';
container.style.width = '350px';
container.style.border = '1px solid black';
container.style.justifySelf = 'center';
draw(16);

function draw(n) {
    let size = n;
    container.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
    container.style.gridAutoColumns = boxWidth/size + 'px';
    container.style.gridAutoRows = boxWidth/size + 'px';
    for(let i = 0; i < size*size; i++) {
        let element = document.createElement('div');
        element.textContent = '';
        element.onmouseenter = function() {
            console.log('over');
            element.style.background = 'black';
        };
    
        container.appendChild(element);
    }
}