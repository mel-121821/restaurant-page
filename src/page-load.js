//______Page Load Module__________

// ___pseudo code_____
// 1. Create a function to put elements on the page
// 2. Create a function to build each piece of content on the page
//   2a. One for headline
//   2b. One for banner image
//   2c. One for intro text 



function pageLoad () {
    const content = document.querySelector('#content');
    console.log("pageLoad function is running")

    function makeHeadliner () {
        const headliner = document.createElement("div");
        headliner.textContent = "Insert slogan here"
        headliner.classList.add("headliner")
        content.appendChild(headliner)
    }
    
    function makeBanner () {
    
    }
    
    function makeIntro () {
    
    }

    makeHeadliner();

}

export {pageLoad}

