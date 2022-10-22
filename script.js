const canvas = document.querySelector('.canvas');
const slide = document.querySelector('#canvas');
const color = document.querySelector('.color');

let size = slide.value;
//function to claer and repopulate the canvas div with pixels to be drawn in
function populate(size){
    if(canvas.childNodes.length != 0){
        let grid = document.querySelectorAll('.pixel');
        grid.forEach(thing => {
            thing.remove();
        })
    }
    canvas.style.setProperty('--size', size)
    for(let i = 0; i < size * size; i ++){
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);

    }
}
//making the slide work
slide.onchange = function() {
    size = this.value;
    populate(size)
    const canvasSize = document.querySelector('.data-2')
    canvasSize.textContent = size + "x" + size
}

//making the color work
const boxes = Array.from(document.querySelectorAll('.grid'));
boxes.forEach(() => {

})