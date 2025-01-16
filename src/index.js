//______Index JS File___________

// _________pseudo code______

// 1. Each piece of functionality should be its own module
// 2. Create content for div#content using JS modules
// 3. Append each new element to div#content once page is loaded
// 4. Since we are set up to write code in multiple files, write the initial page-load function in its own module (a seperate file) and call it inside of index.js

// 5. Set up tabbed browsing to access menu and contact pages 
//   5a. Will need a function to clear current contents before re-populating 
//   5b. Put the contents of each "tab" in its own module
// 6. Tab-switching logic should go in index.js

// use the following command in terminal to update project page:
// npx webpack serve (Ctrl + C to turn off)
// Ctrl click url to view updated project
// http://localhost:8080/



import "./styles.css";
import { pageLoad } from "./page-load";
import { aboutLoad } from "./about";
import { menuLoad } from "./menu"

console.log("JS is working");

// Initial render
pageLoad();


const homeBtn = document.getElementsByTagName("button")[0];
const aboutBtn = document.getElementsByTagName("button")[1];
const menuBtn = document.getElementsByTagName("button")[2];

homeBtn.addEventListener("click", function () {
    console.log("Home btn clicked");
    clearContent()
    pageLoad();
});

aboutBtn.addEventListener("click", function () {
    console.log("About btn clicked");
    clearContent()
    aboutLoad();
});

menuBtn.addEventListener("click", function () {
    console.log("Menu btn clicked");
    clearContent();
    menuLoad();
});

function clearContent () {
    document.getElementById("content").innerHTML = "";
}