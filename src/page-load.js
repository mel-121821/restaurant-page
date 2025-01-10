//______Page Load Module__________

// ___pseudo code_____
// 1. Create a function to select the content div, assign it to a variable and return that variable 
// 2. Create a function that builds each element, assign it a class, and return it 
//   2a. One for headline
//   2b. One for banner image (need to add js image functionality to config file)
//   2c. One for intro text 
// 2. Create a function to append new elements to the content div
//   


// use the following command in terminal to update project page:
// npx webpack serve (Ctrl + C to turn off)
// Ctrl click url to view updated project
// http://localhost:8080/

import bannerImg from "../img/bread-basket.jpg"

// ok to separate functions here as there are no variables that need to be made private - no need for inner functions/lexical scope

// also each module can select the content div individually, no need to create a variable and try to pass it between modules. That creates additional complication 


function makeHeadliner () {
    const headliner = document.createElement("div");
    const slogan = document.createElement("h2")
    slogan.textContent = "Insert slogan here"
    headliner.appendChild(slogan);
    headliner.classList.add("headliner")
    return headliner
};
    
function makeBanner () {
    const banner = document.createElement("div");
    const img = document.createElement("img");
    img.src = bannerImg
    banner.appendChild(img)
    banner.classList.add("banner")
    return banner
}
    
function makeIntro () {
    const intro = document.createElement("div");
    const para = document.createElement("p");
    para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    intro.appendChild(para);
    intro.classList.add("intro");
    return intro
};

function pageLoad () {
    const content = document.querySelector('#content');
    content.appendChild(makeHeadliner());
    content.appendChild(makeBanner());
    content.appendChild(makeIntro());
}

    // makeHeadliner();
    // makeBanner();
    // makeIntro();



export {pageLoad}

