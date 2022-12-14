
const canvas = document.querySelector('.canvas');
const sizeSlide = document.querySelector('#canvas');
const colorPick = document.querySelector('.color');
const rainbow = document.querySelector('.rainbow');
let color = colorPick.value;
//Set color to rand
rainbow.addEventListener('click', () => {
    color = 'rainbow';
})
//set color to what its changed to by the user
colorPick.addEventListener('change',() => {
    color = colorPick.value;
    console.log(color);
});

let size = sizeSlide.value;
let count = 0;

//function to claer and repopulate the canvas div with pixels to be drawn in
function populate(size){
    if(canvas.childNodes.length != 0 && count != 0){
        let grid = document.querySelectorAll('.pixel');
        grid.forEach(pixel => {
            pixel.remove();
        })
    }
    count++;
    canvas.style.setProperty('--size', size)
    for(let i = 0; i < size * size; i ++){
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);

    }
}
//making the sizeSlide work
sizeSlide.onchange = function() {
    size = this.value;
    populate(size);
    const canvasSize = document.querySelector('.data-2');
    canvasSize.textContent = size + "x" + size;
    const pixeles = document.querySelectorAll('.pixel');
    pixeles.forEach(pixel => pixel.addEventListener('mouseover', () => {
        if(color == 'rainbow'){
            let numb1 = Math.floor(Math.random() * 500);
            let numb2 = Math.floor(Math.random() * 500);
            let numb3 = Math.floor(Math.random() * 500);
            pixel.style.backgroundColor = `rgb(${numb1}, ${numb2}, ${numb3})`
        }

        else{
            console.log("ello")
            pixel.style.backgroundColor = `${color}`
        }

    }));
    //clear

    pixeles.forEach(pixel => pixel.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        pixel.style.backgroundColor = 'white';
        return false;
    }));
}

function clearGrid(){
    if(canvas.childNodes.length != 0){
        let grid = document.querySelectorAll('.pixel');
        grid.forEach(ting => {
            ting.style.backgroundColor = 'white';
        })
        return;
    }
    return;
}