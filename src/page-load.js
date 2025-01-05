//______Page Load Module__________

// ___pseudo code_____
// 1. Create a function to put elements on the page
// 2. Create a function to build each piece of content on the page
//   2a. One for headline
//   2b. One for banner image (need to add js image functionality to config file)
//   2c. One for intro text 

// use the following command in terminal to update project page:
// npx webpack serve 
// Ctrl click url to view updated project
// http://localhost:8080/

import bannerImg from "../img/banner-cupcake.jpg"


function pageLoad () {
    const content = document.querySelector('#content');
    console.log("pageLoad function is running")

    function makeHeadliner () {
        const headliner = document.createElement("div");
        const slogan = document.createElement("h2")
        slogan.textContent = "Insert slogan here"
        headliner.appendChild(slogan);
        headliner.classList.add("headliner")
        content.appendChild(headliner)
    };
    
    function makeBanner () {
        const banner = document.createElement("div");
        const img = document.createElement("img");
        img.src = bannerImg
        banner.appendChild(img)
        banner.classList.add("banner")
        content.appendChild(banner)
    }
    
    function makeIntro () {
        const intro = document.createElement("div");
        const para = document.createElement("p");
        para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        intro.appendChild(para);
        intro.classList.add("intro");
        content.appendChild(intro);
    }

    makeHeadliner();
    makeBanner();
    makeIntro();

}

export {pageLoad}

