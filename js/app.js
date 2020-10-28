// Create a variable addToHead and use the querySelector method to assign the ‘head’ element to the addToHead variableaddToHead variable and use querySelector to get the CSS head element
var addToHead = document.querySelector('head');

// Create a ‘link’ element that will be assigned to your cssLink variable and store it in a variable.
var cssLink = document.createElement('link');

// Use the appendChild method on the addToHead variable to add cssLink to the DOM

addToHead.appendChild(cssLink);

// With your cssLink variable, use the setAttribute method to pass in ‘rel’, ‘stylesheet’ as arguments
cssLink.setAttribute('rel', 'stylesheet');

// Repeat the previous step with ‘href’, ‘css/style.css’ as arguments
cssLink.setAttribute('href', 'css/style.css');


// Create a variable wrapper and use the createElement method to create a ‘div’ that will be assigned to the wrapper variable
var wrapper = document.createElement('div');

//Use the classList method to add the class name ‘wrapper’ to the wrapper variable. (5 points)
wrapper.classList.add("wrapper");

// Create a variable bodY and use the querySelector method to assign the ‘body’ element to the bodY variable

var bodY = document.querySelector('body');

// Use the appendChild method on the bodY variable to add wrapper to the DOM.
bodY.appendChild(wrapper);


// Inside the block statement of our loop, create a new variable ‘divs’, 
// and use the createElement method to create a ‘div’ element that will be assigned to your divs variable. (2.5 points)
//Use the appendChild method on the wrapper variable to add divs to the DOM. (2.5 points)
//Use the classList method to add the class name ‘wrapperDivs’ to your divs variable.



  for (i = 0; i < 4; i++) {
    var divs = document.createElement('div');
    wrapper.appendChild(divs);
    divs.classList.add("wrapperDivs");
    
   }
// Create these variables: color1, color2, color3 and color4. Assign each of these values to each of the above created variables.
var color1 = "linear-gradient(135deg, #0B132B 0%, #3A506B 100%)";
var color2 = "linear-gradient(330deg, #5BC0BE 0%, #3A506B 100%)";
var color3 = "linear-gradient(35deg, #0B132B 0%, #5BC0BE 100%)";
var color4 = "linear-gradient(235deg, #5BC0BE 0%, #3A506B 100%)"; 

//Create an array variable colorsArray and assign each of the color variables above as its values

var colorAray = (color1, color2, color3, color4);

// Run console.log(colorsArray) to see the results in the developer tools. (5 points)
console.log(colorsArray);
