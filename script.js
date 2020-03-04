"use strict";

window.addEventListener("DOMContentLoaded", init);
const HTML ={};
let newfill;
let colorfromWheel;

function init(){
    HTML.colorBoxes = document.querySelectorAll(".color1, .color2, .color3, .color4, .color5, .color6, .color7, .color8");
    HTML.chosenColor = document.querySelector("#colorwheel");

    loadSVG();
}

async function loadSVG(){
    console.log("Donut loaded");
    const response = await fetch("donut-transparent.svg");
    const mySVG = await response.text();
    document.querySelector("#lineart").innerHTML= mySVG;
    
    //choose a color
    HTML.colorBoxes.forEach((element) => {
        element.addEventListener("click", function(evt){
            newfill = evt.target.getAttribute("fill");
            getColorsFromBoxes();
            });
        });
        
    //choose a color from the color wheel
    HTML.chosenColor.addEventListener("change", function(evt){
        colorfromWheel = evt.target.value;
        console.log("colorfromWheel");
        getColorFromTheWheel();
    });
}

function getColorsFromBoxes(){
    console.log("getColorsFromBoxes");
    //show the current color
    document.querySelector(".currentcolor .colorbox").style.backgroundColor = newfill;

    //click a path on svg
    document.querySelectorAll("#donut_fill .cls-2").forEach((elm) => {
        //all fills belong to the dough
        elm.addEventListener("click", clickTheDough);
});
    document.querySelector("#glasur").addEventListener("click", clickGlasur);
    document.querySelectorAll("#sprinkles_fill .cls-3").forEach((elm) => {
        elm.addEventListener("click", function(){
        console.log("clickKrymmel");
        elm.style.fill = newfill;
    })
});
}

function getColorFromTheWheel(){
    console.log("getColorFromTheWheel");
    //show the current color
    document.querySelector(".currentcolor .colorbox").style.backgroundColor = colorfromWheel;

    //click a path on svg
    document.querySelectorAll("#donut_fill .cls-2").forEach((elm) => {
        //all fills belong to the dough
        elm.addEventListener("click", clickTheDough2);
    });
    document.querySelector("#glasur").addEventListener("click", clickGlasur2);
    document.querySelectorAll("#sprinkles_fill .cls-3").forEach((elm) => {
        elm.addEventListener("click", function(){
        console.log("clickKrymmel");
        elm.style.fill = colorfromWheel;
    })
});
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

function clickTheDough2(){
    console.log("clickTheDough2");
    document.querySelectorAll("#donut_fill .cls-2").forEach((elm) => {
        elm.style.fill = colorfromWheel;
    });
}

function clickGlasur2(evt){
    console.log("clickGlasur2");
    evt.target.style.fill= colorfromWheel;
}