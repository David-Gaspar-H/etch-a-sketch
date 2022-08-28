// simple idea to make 16 by 16 grid just make a for loop with a nested for loop
//for each first iteration we make one row div and append 16 child divs into that through the other loop
// then we put flex display flex direction column in order for the css to stack the row divs on top of eachother
//then we have our grid I THINK

function runIt(){
    //selecting color
    //add a way to pick color by just choosing from like a spectrum type thing
    let color = 'red';
    const red = document.querySelector('.red');
    const blue = document.querySelector('.blue');
    const green = document.querySelector('.green');
    const black = document.querySelector('.black');
    const rainbow = document.querySelector('.rainbow');
    red.addEventListener('click', () =>{
        color = 'red';
    });
    green.addEventListener('click', () =>{
        color = 'green';
    });
    blue.addEventListener('click', () =>{
        color = 'blue';
    });
    black.addEventListener('click', () =>{
        color = 'black';
    });
    rainbow.addEventListener('click', () =>{
        color = 'rainbow';
    });

    //Prompting user for grid size
    do {
        userChoice = prompt('Please choose the dimension of your square ie: entering 16 would make a 16 by 16 square');
    } while (userChoice > 100);
    //setting up to make grid
    let dimension = 500/(userChoice);
    let container = document.querySelector('.container');
    //clearing last grid if there is one
    if(container.childNodes.length != 0){
        let grid = document.querySelectorAll('.grid');
        grid.forEach(ting => {
            ting.remove();
        })
    }
    for(let i = 0; i < userChoice; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let j = 0; j < userChoice; j++){
            let div = document.createElement('div');
            div.classList.add('grid');
            div.style.cssText = `width: ${dimension}px; height: ${dimension}px; border: 0.5px solid black;`; 
            row.appendChild(div);
        }
    }
    //interacting between user and canvas
    const boxes = Array.from(document.querySelectorAll('.grid'));
    //boxes.forEach(box => box.setAttribute('style', `width: ${dimension}; height: white;`));
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        if(color == 'rainbow'){
            let numb1 = Math.floor(Math.random() * 500);
            let numb2 = Math.floor(Math.random() * 500);
            let numb3 = Math.floor(Math.random() * 500);
            box.style.backgroundColor = `rgb(${numb1}, ${numb2}, ${numb3})`
            
        }

        else{
            box.style.backgroundColor = `${color}`
        }

    }));
    boxes.forEach(box => box.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        box.style.backgroundColor = 'white';
        return false;
    }));
}
function clearGrid(){
    let container = document.querySelector('.container');
    if(container.childNodes.length != 0){
        let grid = document.querySelectorAll('.grid');
        grid.forEach(ting => {
            ting.style.backgroundColor = 'white';
        })
        return;
    }
    return;
}