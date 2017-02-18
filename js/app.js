/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/
var tTay = document.getElementById("name1");
tTay.innerHTML = "Tay-Tay";



/*2. Replace the n/a with the following: 

Project Manager*/
var projManager = document.getElementById("position2");
projManager.innerHTML = "Project Manager";


/*3. Replace the n/a with the following:

Concatenation*/
var pen = document.getElementById("alias3");
pen.innerHTML = " Concatenation";



/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/
var snoopy = document.getElementsByClassName("profile")[0];
snoopy.innerHTML = "Lorizzle ipsum dolizzle sit amizzle, consectetuer adipiscing hizzle. Nullizzle sapizzle velizzle, mah nizzle volutpizzle, suscipizzle fo shizzle, gravida vizzle, my shizz. Pellentesque bling bling tortizzle. Sed own yo'. Fo shizzle izzle ghetto fo shizzle mah nizzle fo rizzle, mah home g-dizzle turpizzle tempizzle fo.";
console.log(snoopy);


/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/
var samL = document.getElementsByClassName("profile")[2];
samL.innerHTML = "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.";




/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/
var chuckNor = document.createElement("div");
chuckNor.Id = "name7";
chuckNor.innerHTML ="Chuck Norris";
nameBox.appendChild(chuckNor);
// console.log(chuckNor);
 

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/
var grimm = document.createElement("div");
grimm.Id = "alias8";
grimm.innerHTML = "The Purple Monster"; 
aliasBox.appendChild(grimm);



//Final Boss
/*8. Create your own profile.*/
var Boss = document.getElementsByClassName("block3 col-sm-4")[2];
console.log(Boss);

var myName = document.createElement("div");
myName.className = "NameMine";
myName.innerHTML = "Marshmello";
Boss.appendChild(myName);

var myDis = document.createElement("div");
myDis.className = "Description";
myDis.innerHTML = "Rave DJ";
Boss.appendChild(myDis);

var theLife = document.createElement("div");
theLife.className = "Life";
theLife.innerHTML = "Marshmello's identity remains unknown, although it has been heavily suggested he is American DJ Chris Comstock, also known as Dotcom, as they are both alleged to have the same first names, birthdays, tattoos as well as similar music styles.";
Boss.appendChild(theLife);