const container = document.querySelector('#container');
const gridsDiv = document.createElement('div');
gridsDiv.classList.add('gridsDivClass');

const popupDiv = document.createElement('div');
container.appendChild(popupDiv);
const popUpBtn = document.createElement('button');
popUpBtn.textContent = 'Start';
popupDiv.appendChild(popUpBtn);


popUpBtn.addEventListener('click', () => {
    let pxHeight = prompt('What is the height of the grid.(Only values 0-100 allowed)');
    let pxWidth = prompt('What is the width of the grid.(Only values 0-100 allowed)');
    if (pxHeight <= 100 && pxWidth <= 100) {

        createGrid(pxHeight, pxWidth);
    }
    
})


function createGrid(height, width) {
    gridsDiv.replaceChildren();

    for (let i = 0; i < height; i++) {

        const grids = document.createElement('div');

        grids.classList.add('gridsClass');

        gridsDiv.appendChild(grids);

        for (let j = 0; j < width; j++) {

            const gridItem = document.createElement('div');

            gridItem.classList.add('gridsItemClass');
            function hoverClassfn() {
                gridItem.classList.toggle('hoverClass');
            }
            gridItem.addEventListener('mouseenter', () => {
                hoverClassfn();
                
            });
            gridItem.addEventListener('mouseleave', () => {
                
                setTimeout(hoverClassfn, 350);
            });


            grids.appendChild(gridItem);
        }
    }
    container.appendChild(gridsDiv);
};




