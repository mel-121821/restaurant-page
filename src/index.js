//______Index JS File___________

// use the following command in terminal to update project page:
// npx webpack serve (Ctrl + C to turn off)
// Ctrl click url to view updated project
// http://localhost:8080/



import "./styles.css";
import { pageLoad } from "./page-load";
import { aboutLoad } from "./about";
import { menuLoad } from "./menu"

// Initial render
pageLoad();


const homeBtn = document.getElementsByTagName("button")[0];
const aboutBtn = document.getElementsByTagName("button")[1];
const menuBtn = document.getElementsByTagName("button")[2];

homeBtn.addEventListener("click", function () {
    clearContent()
    pageLoad();
});

aboutBtn.addEventListener("click", function () {
    clearContent()
    aboutLoad();
});

menuBtn.addEventListener("click", function () {
    clearContent();
    menuLoad();
});

function clearContent () {
    const content = document.getElementById("content")
    content.innerHTML = "";
    content.className = "";
}