const container = document.querySelector('.container');
container.style.cssText = "border: 1px solid black; margin: 0; width: 580px; height: 580px;";

const divArr = [];

app(16);

function app(pixel) {
    let width = (580 / pixel);
    container.style.cssText = `border: 1px solid black; display: grid; grid-template-columns: repeat(${pixel}, 1fr); grid-template-rows: repeat(${pixel}, 1fr); grid-gap: 0; width: 580px; height: 580px;`;
    for (let i = 0; i < pixel*pixel; i++) {
        divArr[i] = document.createElement('div');
        divArr[i].className = "item" + i;
        divArr[i].style.height = `${width}px`;
        divArr[i].style.width = `${width}px`;
        divArr[i].addEventListener('mouseover', () => {
            divArr[i].style.backgroundColor = 'red';
        });
        container.appendChild(divArr[i]);
    }
}

document.body.style.margin = 0;

let pixel = 101;
const btnPixel = document.querySelector('.pixel');
btnPixel.addEventListener('click', () => {
    pixel = 101;
    while (pixel < 1 || pixel > 100) {
        pixel = prompt("How much pixels do you want?");
    }
    container.innerHTML = '';
    app(pixel);
});