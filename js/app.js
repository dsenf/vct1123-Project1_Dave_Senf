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

var colorsArray = [color1, color2, color3, color4];

// Run console.log(colorsArray) to see the results in the developer tools. (5 points)

console.log(colorsArray);





//Create a variable wrapper_Divs and use the getElementsByClassName method to assign the ‘wrapperDivs’ to the wrapper_Divs variable.

var wrapper_Divs = document.getElementsByClassName('wrapperDivs');

//Run console.log(wrapper_Divs) to see the results in the console.
console.log(wrapper_Divs);

//create the following variables: divOne, divTwo, divThree and divFour
//For example, var divOne = wrapper_Divs.item(0);  document.body.childNodes.item(0);   

// Assign it a value of wrapper_Divs with the item method and a value starting at zero all the way to 3.

var divOne = wrapper_Divs.item(0);
var divTwo = wrapper_Divs.item(1);
var divThree = wrapper_Divs.item(2);
var divFour = wrapper_Divs.item(3);


//Create an array variable allDivs and assign the above divNumber variables above as its values. 

var allDivs = [divOne, divTwo, divThree, divFour];


//Run console.log(allDivs) to see the results in the developer tools. This might be a good time to review the item method. (5 points)


//Use a “for” loop 
//Create a new variable myDiv, and assign it a value of allDivs[i]
//ON the myDiv variable use the style and backgroundImage properties
// to assign colorsArray[i] as its value (5 points)
 
//Create a variable update and use the createElement method to create a ‘section’

// Use the appendChild method on the myDiv variable to add update to the DOM. 
// Use the setAttribute method to pass in ‘id’, ‘ID’ + [i] as arguments. 

for (i = 0; i < 4; i++) {
  var myDiv = allDivs[i];
  console.log(myDiv);
  myDiv.style.backgroundImage = colorsArray[i];
  var update = document.createElement('section');
  myDiv.appendChild(update);
  update.setAttribute('id', 'ID' + [i]);
}

//Create a function called Artist with the following parameters 
//(artistname, album, label, year, albumImg, bio). 
//Inside the function use the ‘this’ keyword to the define the objects properties
//With each of the parameters provided above. 
//For example, this.artistname = artistname;. 

function Artist (artistname, album, label, year,bio) {
  this.artistname = artistname;
  this.album = album;
  this.label = label;
  this.year = year;
  this.bio = bio;
}
//Create four variables artist1, artist2, artist3 and artist4. 
//Use the new keyword with the Artist constructor function and pass into it as 
//arguments one of each of the blocks from the artist_Data.txt file for each variable.


var artist1 = new Artist('Autechre', 'Quaristice', 'Warp Records', '2008', 'quaristice_', "Autechre are an English electronic music duo consisting of Rob Brown and Sean Booth, both from Rochdale, Greater Manchester. Formed in 1987, they are one of the best known acts signed to UK electronic label Warp Records, through which all of Autechre's full-length albums have been released beginning with their 1993 debut Incunabula. \nThey gained initial recognition when they were featured on Warp's 1992 compilation Artificial Intelligence. Influenced by styles such as electro and acid house, the music of Autechre has evolved throughout their career from early, melodic techno recordings to later works often considered abstract and experimental, featuring complex algorithm-generated production and few stylistic conventions. Their work has been associated with the 1990s electronic genre known as intelligent dance music (IDM), though Booth has dismissed the label as \"silly.\"");
var artist2 = new Artist('Aphex Twin', 'Richard D. James Album and Come to Daddy', 'Warp Records', '1996', 'richardDJames', "Richard David James (born 18 August 1971), best known by the stage name Aphex Twin, is an English musician.[1] He is best known for his idiosyncratic work in electronic styles such as techno and ambient music in the 1990s, and has also been associated with the electronic subgenre known as intelligent dance music.[2][3] In 2001, Guardian journalist Paul Lester called James 'the most inventive and influential figure in contemporary electronic music'. Raised in Cornwall, James began performing as a rave DJ at local clubs and free parties in the late 1980s.[5] In 1991 his debut EP Analogue Bubblebath was released on Mighty Force, a local independent label, winning him acclaim and a cult following.[6][7] James co-founded the independent label Rephlex Records the same year. He attracted wider praise for his 1992 debut album Selected Ambient Works 85â€“92 and signed to the record label Warp the following year. His music became increasingly well-known through the 1990s with the charting albums Selected Ambient Works Volume II (1994) and ...I Care Because You Do (1995), and singles 'On' (1993), 'Come to Daddy' (1997), and 'Windowlicker' (1999). The latter two singles, accompanied by music videos directed by Chris Cunningham, brought James attention in the US market. James has also recorded under aliases including AFX, Caustic Window, and Polygon Window.[4] After releasing the Aphex Twin album Drukqs in 2001, James spent the following years releasing music mostly under other aliases, including the 2005 Analord EP series as AFX, a pair of 2007 releases as the Tuss, and archival material such as an unreleased 1994 LP in 2014 as Caustic Window. He returned as Aphex Twin in 2014 with the album Syro, which won the Grammy Award for Best Dance/Electronic Album. He has since released further charting EPs, including Cheetah (2016) and Collapse (2018).");
var artist3 = new Artist('Future Sounds of London', 'Dead Cities', 'Astralwerks/Virgin Records', '1996', 'deadCities', "The Future Sound of London (often abbreviated to FSOL) is a British electronic music group composed of Garry Cobain and Brian Dougans. The duo are often credited with pushing the boundaries of electronic music experimentation and of pioneering a new era of dance music. Although often associated with ambient music, Cobain and Dougans usually resist being typecast into any one particular genre. Their work covers many areas of electronic music, such as ambient techno, house music, trip hop, ambient dub, and acid techno. In addition to music composition, their interests have covered a number of areas including film and video, 2D and 3D computer graphics, animation in making almost all their own videos for their singles, radio broadcasting and creating their own electronic devices for sound making.They have released works under numerous aliases.\nThe artists were fairly enigmatic in the past but have become more candid with their fanbase in recent years with social websites like Myspace, YouTube, their forum and many interviews in which Cobain almost always speaks for the group.");
var artist4 = new Artist('Kraftwerk', 'Computer World', 'Kling Klang/Warner Brothers', '1981', 'computerWorld', "Kraftwerk (German: [kÊaftvÉ›ÉÌ¯k], lit. power station) is a German band formed in DÃ¼sseldorf in 1970 by Ralf HÃ¼tter and Florian Schneider. Widely considered as innovators and pioneers of electronic music, they were among the first successful acts to popularize the genre. The group began as part of West Germany's experimental krautrock scene in the early 1970s before fully embracing electronic instrumentation, including synthesizers, drum machines, and vocoders.\nOn commercially successful albums such as Autobahn (1974), Trans-Europe Express (1977), and The Man-Machine (1978), Kraftwerk developed a self-described \"robot pop\" style that combined electronic music with pop melodies, sparse arrangements, and repetitive rhythms, while adopting a stylized image including matching suits. Following the release of Electric CafÃ© (1986), member Wolfgang FlÃ¼r left the group in 1987; the band's other longtime percussionist, Karl Bartos, did the same in 1990. Founding member Schneider departed in 2008.\nThe band's work has influenced a diverse range of artists and many genres of modern music, including synthpop, hip hop, post-punk, techno, ambient, and club music. In 2014, the Recording Academy honoured Kraftwerk with a Grammy Lifetime Achievement Award. Their latest album 3-D The Catalogue was released in 2017. As of 2019, the remaining members of the band continue to tour.");

//Create an array variable allArtists and assign the artist(numbers 1 to 4) variables above as its values. 
//Your objects are now elements within this new array. 

var allArtists = [artist1, artist2, artist3, artist4];

//Run console.log(allArtists) to see the results in the developer tools. 
console.log(allArtists); 

//?Try console.log(allArtists[0].artistname)
//the result should be Autechre. 

console.log(allArtists[0].aristname);

//Create a getArtist function. 
//Create a variable called sections 
//and use the querySelectorAll method with a value
// of ‘.wrapperDivs>section’ assigned to the sections variable. 

function getArtist (artistname, album, label, year,bio) {
  var sections = document.querySelectorAll('wrapperDivs>section'). 
  this.album = album;
  this.label = label;
  this.year = year;
  this.bio = bio;
}

// Run console.log(sections) to see the results in the developer tools. (2.5 points)

console.log(sections);

//Creat “for” loop once again with these conditions: 
//var i = 0; i < sections.length; i++. 
//Create a new variable ‘artistList’, and assign its value as “<table”>

for (i = 0; i < sections.length; i++) {
    var artList = ('table');


  
}

//Next lets modify artistList by adding a row and some table data:
//artistList += <tr><td>Artist Name:</td><td>” + allArtists[i].artistname + “</td></tr>”;
//Repeat the above artistList modifications to include 
//the following properties, album, label, year. 
//In the first <td>…</td>, use the same formatting as above: Artist Album, Artist Label, Release Year.
//artistList += “</table>” ends our table element. 



