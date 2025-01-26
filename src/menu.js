// ________Menu Tab________

// use the following command in terminal to update project page:
// npx webpack serve (Ctrl + C to turn off)
// Ctrl click url to view updated project
// http://localhost:8080/

import pastries from "../img/donuts4.jpg"
import hotDrinks from "../img/coffee.jpg"
import coldDrinks from "../img/smoothie.jpg"
import sandwich from "../img/sandwich.jpg"
// import desserts from "../img/[].jpg"
// import catering from "../img/[].jpg"


function makeHeadliner () {
    const headliner = document.createElement("div");
    const orgIntro = document.createElement("h2")
    orgIntro.textContent = "Insert Slogan Here"
    headliner.appendChild(orgIntro);
    headliner.classList.add("headliner")
    return headliner
};

//_______________Menu Content___________________

//_______________Pastries___________________

function pastriesImg () {
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = pastries
    imgDiv.appendChild(img)
    imgDiv.classList.add("pastries");
    return imgDiv
}
    
function pastriesInfo () {
    const infoDiv = document.createElement("div");
    const itemHeading = document.createElement("h2");
    itemHeading.textContent = "Pastries"

     // Sweet Treats
    const itemCategory1 = document.createElement("h3");
    itemCategory1.textContent = "Sweet Treats"
    const p1 = document.createElement("p")
    p1.textContent = "Donuts | Cookies | Scones | Muffins | Tarts"
    const p1Prices = document.createElement("p");
    p1Prices.textContent = "$1.75 E. | $1.25 E. | $2.75 E. | $2.00 E. | $2.25 E."
    
    // Savory Snacks
    const itemCategory2 = document.createElement("h3");
    itemCategory2.textContent = "Savoury Snacks"
    const p2 = document.createElement("p")
    p2.textContent = "Croissants | Bagels | Tea Biscuts | Twists"
    const p2Prices = document.createElement("p");
    p2Prices.textContent = "$1.75 E. | $1.50 E. | $1.75 E. | $1.25 E."
    
    // Append Content
    infoDiv.appendChild(itemHeading);
    infoDiv.append(itemCategory1, p1, p1Prices, itemCategory2, p2, p2Prices);
    infoDiv.classList.add("intro");
    return infoDiv
};

//_______________Hot Drinks___________________

function hotDrinksImg () {
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = hotDrinks
    imgDiv.appendChild(img)
    imgDiv.classList.add("hot-drinks");
    return imgDiv
}
    
function hotDrinksInfo () {
    const infoDiv = document.createElement("div");
    const itemHeading = document.createElement("h2");
    itemHeading.textContent = "Hot Drinks"

    // Coffees
    const item1 = document.createElement("h3");
    item1.textContent = "Coffee"
    const p1 = document.createElement("p")
    p1.textContent = "Traditional blend | Dark Blend | Blondie | Decaf"
    const p1Size = document.createElement("p")
    p1Size.textContent = "S - $1.75 | M - $2.50 | L - $3.25";

    // Specialty Coffee
    const item2 = document.createElement("h3");
    item2.textContent = "Specialty Coffee"
    const p2 = document.createElement("p")
    p2.textContent = "Americano | Cappuccino | Latte | Espresso"
    const p2Size = document.createElement("p")
    p2Size.textContent = "S - $3.75 | M - $4.50 | L - $5.25";

    // Traditional Steeped Tea
    const item3 = document.createElement("h3");
    item3.textContent = "Traditional Steeped Tea"
    const p3 = document.createElement("p")
    p3.textContent = "English Breakfast | Chai | Peppermint | Earl Grey "
    const p3Size = document.createElement("p")
    p3Size.textContent = "S - $1.25 | M - $1.75 | L - $2.25";

    // Fruit Tea
    const item4 = document.createElement("h3");
    item4.textContent = "Fruit Tea"
    const p4 = document.createElement("p")
    p4.textContent = "Lemon | Blueberry | Apple Cinnamon | Peach | Raspberry"
    const p4Size = document.createElement("p")
    p4Size.textContent = "S - $1.25 | M - $1.75 | L - $2.25";

    // Hot Chocolate
    const item5 = document.createElement("h3");
    item5.textContent = "Hot Chocolate"
    const p5 = document.createElement("p")
    p5.textContent = "Traditional | White Chocolate | Peppermint | Mocha"
    const p5Size = document.createElement("p")
    p5Size.textContent = "S - $3.75 | M - $4.50 | L - $5.25";

    // Append Content
    infoDiv.appendChild(itemHeading);
    infoDiv.append(item1, p1, p1Size, item2, p2, p2Size, item3, p3, p3Size, item4, p4, p4Size, item5, p5, p5Size);
    infoDiv.classList.add("intro");
    return infoDiv
};

//_______________Cold Drinks___________________

function coldDrinksImg () {
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = coldDrinks
    imgDiv.appendChild(img)
    imgDiv.classList.add("cold-drinks");
    return imgDiv
}

function coldDrinksInfo () {
    const infoDiv = document.createElement("div");
    const itemHeading = document.createElement("h2");
    itemHeading.textContent = "Cold Drinks"

    // Cold Drinks
    const item1 = document.createElement("h3");
    item1.textContent = "Frappuccinos"
    const p1 = document.createElement("p")
    p1.textContent = "Chocolate | Mocha | Caramel | Chai | Chocolate Mint"
    const p1Size = document.createElement("p")
    p1Size.textContent = "S - $4.75 | M - $5.50 | L - $6.25";

    // Smoothies
    const item2 = document.createElement("h3");
    item2.textContent = "Smoothies"
    const p2 = document.createElement("p")
    p2.textContent = "Strawberry | Mixed Berry | Pina Colada | Peach Mango"
    const p2Size = document.createElement("p")
    p2Size.textContent = "S - $4.75 | M - $5.50 | L - $6.25";

    // Append Content
    infoDiv.appendChild(itemHeading);
    infoDiv.append(item1, p1, p1Size, item2, p2, p2Size);
    infoDiv.classList.add("intro");
    return infoDiv
}

//_______________Sandwiches___________________
    
function sandwichImg () {
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = sandwich
    imgDiv.appendChild(img)
    imgDiv.classList.add("sandwiches")
    return imgDiv
}
    
function sandwichInfo () {
    const infoDiv = document.createElement("div");
    const itemHeading = document.createElement("h2");
    itemHeading.textContent = "Sandwiches"

     // Homestyle
    const itemCategory1 = document.createElement("h3");
    itemCategory1.textContent = "Homestyle"
    const p1 = document.createElement("p")
    p1.textContent = "Turkey Club | BLT | Egg Salad | Ham & Cheese | Roast Beef"
    const p1Prices = document.createElement("p");
    p1Prices.textContent = "Single: $8.50 | Combo: $10.50" 

     // Artisanal
     const itemCategory2 = document.createElement("h3");
     itemCategory2.textContent = "Artisanal"
     const p2 = document.createElement("p")
     p2.textContent = "Avocado Chicken | Veggie Delight | Steak and Cheese | Buffalo Chicken Ranch"
     const p2Prices = document.createElement("p");
     p2Prices.textContent = "Single: $10.50 | Combo: $12.50" 
    
    // Wraps
    const itemCategory3 = document.createElement("h3");
    itemCategory3.textContent = "Wraps"
    const p3 = document.createElement("p")
    p3.textContent = "Vanilla | Chocolate | Red Velvet | Lemon | Carrot"
    const p3Prices = document.createElement("p");
    p3Prices.textContent = 'Slice: $2.50 | Log: $7.50  | 9" Round: 9.25 | 16x22" Slab: $25.50'
    
    // Append Content
    infoDiv.appendChild(itemHeading);
    infoDiv.append(itemCategory1, p1, p1Prices, itemCategory2, p2, p2Prices);
    infoDiv.classList.add("intro");
    return infoDiv
};

//_______________Desserts___________________

function dessertsInfo () {
    const infoDiv = document.createElement("div");
    const itemHeading = document.createElement("h2");
    itemHeading.textContent = "Desserts"

     // Pies
    const itemCategory1 = document.createElement("h3");
    itemCategory1.textContent = "Pies"
    const p1 = document.createElement("p")
    p1.textContent = "Apple | Pecan | Cherry | Blueberry | Peach"
    const p1Prices = document.createElement("p");
    p1Prices.textContent = "Slice: $3.50 | Mini: $5.50  | Full Size: 9.25"
    
    // Cakes
    const itemCategory2 = document.createElement("h3");
    itemCategory2.textContent = "Cakes"
    const p2 = document.createElement("p")
    p2.textContent = "Vanilla | Chocolate | Red Velvet | Lemon | Carrot"
    const p2Prices = document.createElement("p");
    p2Prices.textContent = 'Slice: $2.50 | Log: $7.50  | 9" Round: 9.25 | 16x22" Slab: $25.50'
    
    // Append Content
    infoDiv.appendChild(itemHeading);
    infoDiv.append(itemCategory1, p1, p1Prices, itemCategory2, p2, p2Prices);
    infoDiv.classList.add("intro");
    return infoDiv
};

 //_______________Catering??___________________


//_______________Content Display___________________

function menuLoad () {
    const content = document.querySelector('#content');
    content.classList.add("menu-item")
    content.appendChild(makeHeadliner());
    content.appendChild(pastriesImg());
    content.appendChild(pastriesInfo());
    content.appendChild(hotDrinksImg());
    content.appendChild(hotDrinksInfo());
    content.appendChild(coldDrinksImg());
    content.appendChild(coldDrinksInfo());
    content.appendChild(sandwichImg());
    content.appendChild(sandwichInfo());
}


export {menuLoad}