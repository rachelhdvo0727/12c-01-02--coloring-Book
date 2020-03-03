"use strict";

window.addEventListener("DOMContentLoaded", init);

function init(){
    loadSVG();
}

async function loadSVG(){
    const response = await fetch("donut-lines-fills.svg");
    const mySVG = await response.text();
    document.querySelector("#lineart").innerHTML= mySVG;
}