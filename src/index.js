//______Index JS File___________

// _________pseudo code______

// 1. Each piece of functionality should be its own module
// 2. Create content for div#content using JS modules
// 3. Append each new element to div#content once page is loaded
// 4. Since we are set up to write code in multiple files, write the initial page-load function in its own module (a seperate file) and call it inside of index.js



import "./styles.css";
import { pageLoad } from "./page-load";

console.log("JS is working");

pageLoad();