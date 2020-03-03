"use strict";

window.addEventListener("DOMContentLoaded", init);
const HTML ={};
let newfill;

function init(){
    HTML.colorBoxes = document.querySelectorAll(".color1, .color2, .color3, .color4, .color5, .color6, .color7, .color8");

    loadSVG();
}

async function loadSVG(){
    console.log("Donut loaded");
    const response = await fetch("donut-transparent.svg");
    const mySVG = await response.text();
    document.querySelector("#lineart").innerHTML= mySVG;

    //choose a color
    HTML.colorBoxes.forEach((elm) => {
        elm.addEventListener("click", clickABox);
    });

    document.querySelector("#glasur").addEventListener("click", clickGlasur);
    document.querySelectorAll("#donut_fill .cls-2").forEach((element) => {
        element.addEventListener("click", clickTheBun);
    });
}

function clickABox(evt){
    console.log("clickABox");
    newfill = evt.target.getAttribute("fill");
}

function clickGlasur(evt){
    console.log("clickGlasur");
    evt.target.style.fill= newfill;
}

function clickTheBun(){
    console.log("clickTheBun");
    document.querySelectorAll("#donut_fill .cls-2").forEach((element) => {
        element.style.fill = newfill;
    });
}