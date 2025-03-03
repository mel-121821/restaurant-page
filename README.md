# restaurant-page

Restaurant Page - Instructions

[x] Start the project the same way you began the webpack tutorial project, by creating the package.json file and setting up Webpack.
Remember, you only need to install and configure the things you need for your project. For example, if you do not plan to have local image files linked in your HTML template, you will not need to install and configure html-loader.

[x] Create a .gitignore file in the root of your project. It should contain the text node_modules and dist on separate lines.

[x] Set up an HTML skeleton inside of src/template.html. Inside the body, add a header element that contains a nav with buttons (not links!) for different “tabs” (for example buttons for “Home”, “Menu” or “About” etc). Below the header, add a single div id="content".

[x] Inside of src/index.js write a console.log or alert statement and then run npx webpack serve. Open http://localhost:8080 in your browser and check your JavaScript is running.

[x] Inside div#content, create a homepage for your restaurant. You might want to include an image, headline, and some text about how wonderful the restaurant is; you do not have to make this look too fancy. It’s okay to hard-code these into the HTML for now just to see how they look on the page.

[x] Now remove everything inside div#content from the HTML (so you still have the header and nav with an empty div id="content" below it) and instead create them by using JavaScript only, e.g. by appending each new element to div#content once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of its own module and then import and call it inside of index.js.

[x] Next, set up your restaurant site to use tabbed browsing to access the Menu and Contact pages. Look at the behavior of this student’s live preview site for visual inspiration.
Put the contents of each “tab” inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

[x] Write the tab-switching logic inside of index.js. You should have event listeners for each button in the header navbar that wipes out the current contents of div#content and then runs the correct ‘tab module’ to populate it with the new contents again.

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

Name: bread-basket.jpg
Creator: Dominic Alberts from Pixabay
Url: https://pixabay.com/photos/baked-breads-basket-bread-basket-2313462/

Name: barista.jpg
Creator: Quang Nguyen Vinh 
Url: https://www.pexels.com/photo/woman-grinding-coffee-bean-2159129/



Menu Images: Pastries

Name: donuts3.jpg
Creator: Photo by Tania Mirón on Unsplash
Url: https://unsplash.com/photos/assorted-doughnuts-on-white-ceramic-tray-DmK5aEw6Tmc


Menu Images: Hot Drinks

Name: coffee
Creator: Not Named
URl: https://pixabay.com/photos/coffee-cup-caffeine-espresso-4618705/



Menu Images: Cold Drinks

Name: smoothie.jpg
Creator: AS Photograpy from Pixabay
URl: https://pixabay.com/photos/strawberry-smoothie-kefir-drink-cup-1418212/



Menu Images: Sandwiches

Name: sandwich.jpg
Creator: Álvaro Bernal
Url: https://unsplash.com/photos/bread-on-brown-round-plate-7I7h0T48eLQ



Menu Images: Cakes

Name: cake.jpg
Creator: Leeloo The First on Pexels
URl: https://www.pexels.com/photo/sliced-carrot-cake-on-a-white-plate-5594495/



Menu Images: Catering

Name: mini-sandwiches
Creator: Photo by Jem Sahagun on Unsplash
URl: https://unsplash.com/photos/sushi-on-white-ceramic-plate-UfY523zu--w


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

Useful Accessibility tip for high-contrast users:
https://stackoverflow.com/questions/52589391/css-box-shadow-vs-outline

Preventing text wrap with white-space:nowrap
https://developer.mozilla.org/en-US/docs/Web/CSS/white-space