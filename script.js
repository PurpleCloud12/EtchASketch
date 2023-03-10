const grid = document.querySelector('.grid');
const sizing = document.querySelector('.sizer');
const coloring = document.querySelector('.colorMode');
let mode = false;
let size = 16;

renderGrid();

grid.addEventListener('mouseover', function(e){
    if(e.target.matches('.element')){
        if(mode == false){
            console.log("inside");
            e.target.classList.add('colored')
        }else{
            rainbowColor(e);
        }
    }
})

sizing.addEventListener('mousedown', function(){
    sizePrompt();
});
coloring.addEventListener('mousedown',function(){
    modeSwitch();
})


function sizePrompt(){
    size = parseInt(prompt("Please choose your size","16"));
    renderGrid();
    clearGrid();
}

function renderGrid(){
    grid.style.gridTemplateColumns = (`repeat(${size},1fr`);
    grid.style.gridTemplateRows = (`repeat(${size}, 1fr)`);
    for(i = 0; i<size * size; i++){
        let square = document.createElement('div');
        square.classList.add('element');
        grid.appendChild(square);
    }
}

function clearGrid(){
    document.querySelectorAll('.element').forEach((e) => e.classList.remove('colored'));
    document.querySelectorAll('.element').forEach((e) => e.style.backgroundColor = '');

}

function rainbowColor(e){
    const rainbowPalatte = ['#ff0000','#ffa500','#ffff00','#008000','#0000ff','#4b0082','#ee82ee'];
    const randomColor = Math.floor(Math.random()*rainbowPalatte.length);
    e.target.style.backgroundColor = rainbowPalatte[randomColor];
}

function modeSwitch(){
    console.log('Switching modes')
    if(mode === false){
        mode = true;
        coloring.textContent = 'Classic mode';
    }else{
        mode = false;
        coloring.textContent = 'Rainbow mode';
    }
}