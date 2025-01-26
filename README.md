# restaurant-page

Restaurant Page - Instructions

[x] Start the project the same way you began the webpack tutorial project, by creating the package.json file and setting up Webpack.
Remember, you only need to install and configure the things you need for your project. For example, if you do not plan to have local image files linked in your HTML template, you will not need to install and configure html-loader.

[x] Create a .gitignore file in the root of your project. It should contain the text node_modules and dist on separate lines.

[x] Set up an HTML skeleton inside of src/template.html. Inside the body, add a header element that contains a nav with buttons (not links!) for different “tabs” (for example buttons for “Home”, “Menu” or “About” etc). Below the header, add a single div id="content".

[x] Inside of src/index.js write a console.log or alert statement and then run npx webpack serve. Open http://localhost:8080 in your browser and check your JavaScript is running.

[x] Inside div#content, create a homepage for your restaurant. You might want to include an image, headline, and some text about how wonderful the restaurant is; you do not have to make this look too fancy. It’s okay to hard-code these into the HTML for now just to see how they look on the page.

[] Now remove everything inside div#content from the HTML (so you still have the header and nav with an empty div id="content" below it) and instead create them by using JavaScript only, e.g. by appending each new element to div#content once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of its own module and then import and call it inside of index.js.

[] Next, set up your restaurant site to use tabbed browsing to access the Menu and Contact pages. Look at the behavior of this student’s live preview site for visual inspiration.
Put the contents of each “tab” inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

[] Write the tab-switching logic inside of index.js. You should have event listeners for each button in the header navbar that wipes out the current contents of div#content and then runs the correct ‘tab module’ to populate it with the new contents again.

Deployment Instructions

[] Make a new branch to deploy from by running git branch gh-pages. You only need to do this the first time you deploy. The rest of the steps should be done every time you deploy or redeploy your project.

[] Make sure you have all your work committed. You can use git status to see if there’s anything that needs committing.

[] Run git checkout gh-pages && git merge main --no-edit to change branch and sync your changes from main so that you’re ready to deploy.

[] Now let’s bundle our application into dist with your build command. For now, that’s npx webpack.

[] Now there are a few more commands. Run each of these in order:
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main

[] Recall that the source branch for GitHub Pages is set in your repository’s settings. Get this changed to the gh-pages branch. That should be everything!

__________________________________________________________

Images: 

Bg Image:

Name: bg.jpg
Creator: Анастасия Белоусова from Pixabay
Url: https://pixabay.com/photos/flour-bread-dough-bake-bakery-5290444/


Banner Options Home/About Pages: 

Name: banner-cupcake.jpg
Creator: Blandine JOANNIC from Pixabay
Url: https://pixabay.com/photos/cupcakes-chocolate-muffin-food-5116009/

Name: bread-basket.jpg
Creator: Dominic Alberts from Pixabay
Url: https://pixabay.com/photos/baked-breads-basket-bread-basket-2313462/

Name: barista.jpg
Creator: Quang Nguyen Vinh 
Url: https://www.pexels.com/photo/woman-grinding-coffee-bean-2159129/

Name: apple-pie.jpg
Creator: Priscilla Du Preez 🇨🇦
Url: https://unsplash.com/photos/brown-pie-on-white-ceramic-plate-2RXt6CQY_0c

Name: apple-pie-2.jpg
Creator: Priscilla Du Preez 🇨🇦
Url: https://unsplash.com/photos/brown-pie-on-white-ceramic-plate-W8F9kM7F-5U


Menu Images: Pastries

Name: heart-pastries.jpg
Creator: Tikovka1355 from Pixabay
Url: https://pixabay.com/photos/cookies-food-snack-breakfast-baked-5711139/

Name: donuts.jpg
Creator: Jana from Pixabay
Url: https://pixabay.com/photos/donut-pastry-sweet-sugar-box-5331966/

Name: donuts4.jpg
Creator: Nik (helloimnik) from Unsplash
Url: https://unsplash.com/photos/baked-doughnuts-with-sprinklers-YpsnJ6eGjVs 


Menu Images: Hot Drinks

Name: coffee
Creator: Not Named
URl: https://pixabay.com/photos/coffee-cup-caffeine-espresso-4618705/


Menu Images: Cold Drinks

Name: smoothe.jpg
Creator: AS Photograpy from Pixabay
URl: https://pixabay.com/photos/strawberry-smoothie-kefir-drink-cup-1418212/


Menu Images: Sandwiches

Name: sandwich.jpg
Creator: Álvaro Bernal
Url: https://unsplash.com/photos/bread-on-brown-round-plate-7I7h0T48eLQ

Name: sandwich2.jpg
Creator: Deepthi Clicks on Unsplash
Url: https://unsplash.com/photos/a-sandwich-with-meat-cheese-tomatoes-and-lettuce-xhCpU7ja5EQ



Menu Images: Cakes

Name:
Creator:
URl: 


Menu Images: Catering

Name:
Creator:
URl: 


__________________________________________________________

Tools:

Pull color palette from an image: https://coolors.co/image-picker


VS Keyboard Shortcuts: 
Use Ctrl + h to replace multiple words at once
https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf


__________________________________________________________

Resources:

Change git repo directory location:
https://stackoverflow.com/questions/11384928/change-git-repository-directory-location

Fixing unintended body overflow: 
https://css-tricks.com/findingfixing-unintended-body-overflow/

Clear content of a Div:
https://www.geeksforgeeks.org/how-to-clear-the-content-of-a-div-using-javascript/

Minmax fn info:
https://developer.mozilla.org/en-US/docs/Web/CSS/minmax

Calc fn info:
https://developer.mozilla.org/en-US/docs/Web/CSS/calc

Scale and Crop Images with CSS Object Fit: 
https://www.digitalocean.com/community/tutorials/css-cropping-images-object-fit

Append Multiple elements using append():
https://dev.to/dcodeyt/append-multiple-elements-using-append-302h#:~:text=on%20Parent%20Nodes-,append(),nodes%20to%20a%20parent%20node.&text=As%20you%20can%20see%2C%20you,append%20everything%20to%20the%20parent.