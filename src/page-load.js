//______Page Load Module__________

// use the following command in terminal to update project page:
// npx webpack serve (Ctrl + C to turn off)
// Ctrl click url to view updated project
// http://localhost:8080/

import bannerImg from "../img/bread-basket.jpg"

function makeHeadliner () {
    const headliner = document.createElement("div");
    const slogan = document.createElement("h2")
    slogan.textContent = "Freshly baked, every day."
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
    
function makeInfo () {
    const info = document.createElement("div");
    const infoHeading = document.createElement("h2");
    infoHeading.textContent = "Secondary Slogan Here"
    const para = document.createElement("p");
    para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    info.appendChild(infoHeading);
    info.appendChild(para);
    info.classList.add("info");
    return info
};

function pageLoad () {
    const content = document.querySelector('#content');
    content.appendChild(makeHeadliner());
    content.appendChild(makeBanner());
    content.appendChild(makeInfo());
}

export {pageLoad}

