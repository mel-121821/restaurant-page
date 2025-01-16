// ________Menu Tab________

// use the following command in terminal to update project page:
// npx webpack serve (Ctrl + C to turn off)
// Ctrl click url to view updated project
// http://localhost:8080/

import pastries from "../img/heart-pastries.jpg"
// import drinks from "../img/[].jpg"
import sandwich from "../img/sandwich.jpg"
// import wraps from "../img/[].jpg"
// import cakes from "../img/[].jpg"
// import catering from "../img/[].jpg"


function makeHeadliner () {
    const headliner = document.createElement("div");
    const orgIntro = document.createElement("h2")
    orgIntro.textContent = "Insert Slogan Here"
    headliner.appendChild(orgIntro);
    headliner.classList.add("headliner")
    return headliner
};

function pastriesImg () {
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = pastries
    imgDiv.appendChild(img)
    imgDiv.classList.add("banner")
    return imgDiv
}
    
function pastriesInfo () {
    const infoDiv = document.createElement("div");
    const itemHeading = document.createElement("h2");
    itemHeading.textContent = "Pastries"
    const para = document.createElement("p");
    para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    infoDiv.appendChild(itemHeading);
    infoDiv.appendChild(para);
    infoDiv.classList.add("intro");
    return infoDiv
};
    
function sandwichImg () {
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = sandwich
    imgDiv.appendChild(img)
    imgDiv.classList.add("banner")
    return imgDiv
}
    
function sandwichInfo () {
    const infoDiv = document.createElement("div");
    const itemHeading = document.createElement("h2");
    itemHeading.textContent = "Sandwiches"
    const para = document.createElement("p");
    para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    infoDiv.appendChild(itemHeading);
    infoDiv.appendChild(para);
    infoDiv.classList.add("intro");
    return infoDiv
};

function menuLoad () {
    const content = document.querySelector('#content');
    content.appendChild(makeHeadliner());
    content.appendChild(pastriesImg());
    content.appendChild(pastriesInfo());
    content.appendChild(sandwichImg());
    content.appendChild(sandwichInfo());
}


export {menuLoad}