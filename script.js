"use strict";

window.addEventListener("DOMContentLoaded", init);
const HTML ={};
let newfill, freestyleColor;
let done = false;
let isFilledBoxes;
let isFilledWheel;

function init(){
    HTML.colorBoxes = document.querySelectorAll(".color1, .color2, .color3, .color4, .color5, .color6, .color7, .color8");
    HTML.chosenColor = document.querySelector("#colorwheel");
    HTML.allPaths = document.querySelectorAll("#donut_fill path, #donut_fill polygon, #glasur_fill path, sprinkles_fill polygon");

    loadSVG();

    //choose a color
     HTML.colorBoxes.forEach((element) => {
        element.addEventListener("click", function(evt){
            newfill = evt.target.getAttribute("fill");
            // isFilledBoxes = Boolean(newfill);
            getColorsFromBoxes();
            });
        });
        
    //choose a color from the color wheel
    HTML.chosenColor.addEventListener("change", function(evt){
        freestyleColor = evt.target.value;
        // isFilledWheel = Boolean(freestyleColor);
        getColorFromTheWheel();
    });
}

async function loadSVG(){
    console.log("Donut loaded");
    const response = await fetch("donut-transparent.svg");
    const mySVG = await response.text();
    document.querySelector("#lineart").innerHTML= mySVG;
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
    document.querySelector(".currentcolor .colorbox").style.backgroundColor = freestyleColor;
    
    //click a path on svg
    document.querySelectorAll("#donut_fill .cls-2").forEach((elm) => {
        //all fills belong to the dough
        elm.addEventListener("click", clickTheDough2);
    });
    document.querySelector("#glasur").addEventListener("click", clickGlasur2);
    document.querySelectorAll("#sprinkles_fill .cls-3").forEach((elm) => {
        elm.addEventListener("click", function(){
            console.log("clickKrymmel");
            elm.style.fill = freestyleColor;
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
        elm.style.fill = freestyleColor;
    });
}

function clickGlasur2(evt){
    console.log("clickGlasur2");
    evt.target.style.fill= freestyleColor;
}