// ________Menu Tab________

// use the following command in terminal to update project page:
// npx webpack serve (Ctrl + C to turn off)
// Ctrl click url to view updated project
// http://localhost:8080/

import pastries from "../img/donuts4.jpg"
import hotDrinks from "../img/coffee.jpg"
import coldDrinks from "../img/smoothie.jpg"
import sandwich from "../img/sandwich.jpg"
import desserts from "../img/cake2.jpg"
import catering from "../img/cupcake.jpg"


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
    const itemType = document.createElement("h2");
    itemType.textContent = "Pastries"

     // Sweet Treats
    const item1 = document.createElement("h3");
    item1.textContent = "Sweet Treats"
    const p1 = document.createElement("p")
    p1.textContent = "Donuts | Cookies | Scones | Muffins | Tarts"
    const p1Amt = document.createElement("p");
    p1Amt.textContent = "$1.75 E. | $1.25 E. | $2.75 E. | $2.00 E. | $2.25 E."
    
    // Savory Snacks
    const item2 = document.createElement("h3");
    item2.textContent = "Savoury Snacks"
    const p2 = document.createElement("p")
    p2.textContent = "Croissants | Bagels | Tea Biscuts | Twists"
    const p2Amt = document.createElement("p");
    p2Amt.textContent = "$1.75 E. | $1.50 E. | $1.75 E. | $1.25 E."
    
    // Append Content
    infoDiv.appendChild(itemType);
    infoDiv.append(item1, p1, p1Amt, item2, p2, p2Amt);
    infoDiv.classList.add("info");
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
    const itemType = document.createElement("h2");
    itemType.textContent = "Hot Drinks"

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
    infoDiv.appendChild(itemType);
    infoDiv.append(item1, p1, p1Size, item2, p2, p2Size, item3, p3, p3Size, item4, p4, p4Size, item5, p5, p5Size);
    infoDiv.classList.add("info");
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
    const itemType = document.createElement("h2");
    itemType.textContent = "Cold Drinks"

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
    infoDiv.appendChild(itemType);
    infoDiv.append(item1, p1, p1Size, item2, p2, p2Size);
    infoDiv.classList.add("info");
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
    const itemType = document.createElement("h2");
    itemType.textContent = "Sandwiches"

     // Homestyle
    const item1 = document.createElement("h3");
    item1.textContent = "Homestyle"
    const p1 = document.createElement("p")
    p1.textContent = "Turkey Club | BLT | Egg Salad | Ham & Cheese | Roast Beef"
    const p1Amt = document.createElement("p");
    p1Amt.textContent = "Half Sandwich: $5.50 | Half Combo**: $8.50 | Full Sandwich: 7.50 | Full Combo**: $10.50" 

    // Artisanal
    const item2 = document.createElement("h3");
    item2.textContent = "Artisanal"
    const p2 = document.createElement("p")
    p2.textContent = "Avocado Chicken | Veggie Delight | Steak and Cheese | Buffalo Chicken Ranch"
    const p2Amt = document.createElement("p");
    p2Amt.textContent = "Half Sandwich: $6.50 | Half Combo**: $9.50 | Full Sandwich: 9.50 | Full Combo**: $12.50" 
    
    // Wraps
    const item3 = document.createElement("h3");
    item3.textContent = "Wraps"
    const p3 = document.createElement("p")
    p3.textContent = "Chicken Caesar | Farmer's Breakfast | Any sandwich option"
    const p3Amt = document.createElement("p");
    p3Amt.textContent = "Half Wrap: $5.00 | Half Combo**: $8.00 | Full Wrap: $7.00 | Full Combo**: $10.00" 

    // Side Options
    const sides = document.createElement("p");
    sides.textContent = "**Any combo item comes with your choice of Caesar salad, garden salad, fresh cut fries or sweet potato fries**"
    
    // Append Content
    infoDiv.appendChild(itemType);
    infoDiv.append(item1, p1, p1Amt, item2, p2, p2Amt, item3, p3, p3Amt, sides);
    infoDiv.classList.add("info");
    return infoDiv
};

//_______________Desserts___________________

function dessertsImg () {
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = desserts
    imgDiv.appendChild(img)
    return imgDiv
}

function dessertsInfo () {
    const infoDiv = document.createElement("div");
    const itemType = document.createElement("h2");
    itemType.textContent = "Desserts"

     // Pies
    const item1 = document.createElement("h3");
    item1.textContent = "Pie"
    const p1 = document.createElement("p")
    p1.textContent = "Apple | Pecan | Cherry | Blueberry | Peach"
    const p1Amt = document.createElement("p");
    p1Amt.textContent = "Slice: $3.50 | Mini: $5.50  | Full Size: 9.25"
    
    // Cupakes
    const item2 = document.createElement("h3");
    item2.textContent = "Cake"
    const p2 = document.createElement("p")
    p2.textContent = "Vanilla | Chocolate | Red Velvet | Lemon | Carrot"
    const p2Amt = document.createElement("p");
    p2Amt.textContent = 'Slice: $2.50 | Log: $7.50  | 9" Round: 9.25 | 16x22" Slab: $25.50'

    const item3 = document.createElement("h3");
    item3.textContent = "Cupcakes"
    const p3 = document.createElement("p")
    p3.textContent = "Strawberry Cream | Oreo | Caramel | Any cake flavour"
    const p3Amt = document.createElement("p");
    p3Amt.textContent = "Single Cupcake: $2.50 | 1/2 Dozen: $12.50 | Dozen: $24.00"

    // Cheesecakes
    const item4 = document.createElement("h3");
    item4.textContent = "Cheesecake"
    const p4 = document.createElement("p")
    p4.textContent = "New York Style | Key Lime | Cherry | Caramel | Peach"
    const p4Amt = document.createElement("p");
    p4Amt.textContent = "Slice: $4.50 | Mini: $6.50  | Full Size: 10.25"
    
    // Append Content
    infoDiv.appendChild(itemType);
    infoDiv.append(item1, p1, p1Amt, item2, p2, p2Amt, item3, p3, p3Amt, item4, p4, p4Amt);
    infoDiv.classList.add("info");
    return infoDiv
};

 //_______________Catering??___________________

 function cateringImg () {
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = catering
    imgDiv.appendChild(img)
    return imgDiv
}

function cateringInfo () {
    const contact = document.createElement("div")
    const contactHeading = document.createElement("h2");
    contactHeading.textContent = "Planning an Event?"
    const p1 = document.createElement("p");
    p1.textContent = "MyBakery provides catering services for weddings, social gatherings and corporate events. To submit an order, email us at:"
    const email = document.createElement("p");
    email.textContent = "info@mybakery.ca" 
    const p2 = document.createElement("p");
    p2.textContent = "Or give us a call:"
    const phone = document.createElement("p");
    phone.textContent = "(888)-123-456" 

    contact.appendChild(contactHeading);
    contact.append(p1, email, p2, phone);
    contact.classList.add("info");
    return contact
}

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
    content.appendChild(dessertsImg());
    content.appendChild(dessertsInfo());
    content.appendChild(cateringImg());
    content.appendChild(cateringInfo());
}


export {menuLoad}