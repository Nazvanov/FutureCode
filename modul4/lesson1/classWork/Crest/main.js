const block0 = document.querySelector(".block0");
const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block2");
const block3 = document.querySelector(".block3");
const block4 = document.querySelector(".block4");
const block5 = document.querySelector(".block5");
const block6 = document.querySelector(".block6");
const block7 = document.querySelector(".block7");
const block8 = document.querySelector(".block8");

let img;

let blocks = [block0, block1, block2, block3, block4, block5, block6, block7, block8];

block0.addEventListener("click", function() {
    img = document.createElement("img");
    block0.appendChild(img);
    img.src = "./img/X.png";
});

document.querySelector(".X_winner").textContent = "Вы победили!"