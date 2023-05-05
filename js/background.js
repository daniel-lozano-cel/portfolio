const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const container4 = document.getElementById("container4");

const background = document.getElementById("backgrounder");
let degrees = 0;

function onChange(event){
    const percentX = event.offsetX / 796;
    const percentY = event.offsetY / 796;
    const red = percentX * 255;
    const blue = percentY * 255;
    background.style.background = `rgb(${red}, 0 ,${blue}, 1)`;
}

background.addEventListener('mousemove', onChange);