"use strict";

window.addEventListener("DOMContentLoaded", init);
const HTML ={};
let newfill;

function init(){
    HTML.colorBoxes = document.querySelectorAll(".color1, .color2, .color3, .color4, .color5, .color6, .color7, .color8");

    loadSVG();
    //choose a color
    HTML.colorBoxes.forEach((element) => {
        element.addEventListener("click", clickABox);
    });
}

async function loadSVG(){
    console.log("Donut loaded");
    const response = await fetch("donut-transparent.svg");
    const mySVG = await response.text();
    document.querySelector("#lineart").innerHTML= mySVG;

    //click a path on svg
    document.querySelectorAll("#donut_fill .cls-2").forEach((elm) => {
        elm.addEventListener("click", clickTheDough);
    });
    document.querySelector("#glasur").addEventListener("click", clickGlasur);
    document.querySelectorAll("#sprinkles_fill .cls-3").forEach((elm) => 
    {
        elm.addEventListener("click", function(){
            console.log("clickKrymmel");
            elm.style.fill = newfill;
        });
    });
}

function clickABox(evt){
    console.log("clickABox");
    newfill = evt.target.getAttribute("fill");
}

function clickTheDough(){
    console.log("clickTheDough");
    document.querySelectorAll("#donut_fill .cls-2").forEach((elm) => {
        elm.style.fill = newfill;
    });
}

function clickGlasur(evt){
    console.log("clickGlasur");
    evt.target.style.fill= newfill;
}

