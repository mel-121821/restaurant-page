// ________About Tab________

// use the following command in terminal to update project page:
// npx webpack serve (Ctrl + C to turn off)
// Ctrl click url to view updated project
// http://localhost:8080/

import bannerImg from "../img/barista.jpg"

function makeHeadliner () {
    const headliner = document.createElement("div");
    const orgIntro = document.createElement("h2")
    orgIntro.textContent = "Insert Slogan Here"
    headliner.appendChild(orgIntro);
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
    
function makeAbout () {
    const about = document.createElement("div");
    const aboutHeading = document.createElement("h2");
    aboutHeading.textContent = "Intro to About Section"
    const para = document.createElement("p");
    para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    about.appendChild(aboutHeading);
    about.appendChild(para);
    about.classList.add("intro");
    return about
};

function aboutLoad () {
    const content = document.querySelector('#content');
    content.appendChild(makeHeadliner());
    content.appendChild(makeBanner());
    content.appendChild(makeAbout());
}


export {aboutLoad}


