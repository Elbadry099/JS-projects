const buttonEl = document.querySelector(".btn");
const divEl = document.querySelector(".mydiv");

const colors = ["red", "green", "blue"];
let i = 0;

buttonEl.onclick = function() {
    divEl.style.backgroundColor = colors[i];
    i++;

    if(i === 3) {
        i = 0;
    }
}

