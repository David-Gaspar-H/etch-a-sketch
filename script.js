// simple idea to make 16 by 16 grid just make a for loop with a nested for loop
//for each first iteration we make one row div and append 16 child divs into that through the other loop
// then we put flex display flex direction column in order for the css to stack the row divs on top of eachother
//then we have our grid I THINK

function runIt(){
    let color = 'red';
    const red = document.querySelector('.red');
    const blue = document.querySelector('.blue');
    const green = document.querySelector('.green');
    red.addEventListener('click', () =>{
        color = 'red';
    });
    green.addEventListener('click', () =>{
        color = 'green';
    });
    blue.addEventListener('click', () =>{
        color = 'blue';
    });

    do {
        userChoice = prompt("Please choose the dimension of your square ie: entering 16 would make a 16 by 16 square");
    } while (userChoice > 100);
    let dimension = 500/(userChoice);
    let container = document.querySelector(".container");
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
    const boxes = Array.from(document.querySelectorAll('.grid'));
    //boxes.forEach(box => box.setAttribute('style', `width: ${dimension}; height: white;`));
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        box.style.backgroundColor = `${color}`
    }));
    boxes.forEach(box => box.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        box.style.backgroundColor = 'white';
        return false;
    }));
}
