

function menuItem(name, info, allergy, kCal) {
    this.name = name; // The this keyword refers to the object itself
    this.info = info;
    this.allergy = allergy;
    this.calorie = kCal;
    // use: getElementById('make-image').src="/path/to/images" + selected_text + ".jpg" ?
    this.burger = function() {
    	return this.name + ' ' + this.calorie + '\n';
    }
  }
 //document.getElementById("myID").innerHTML = "välj en burgare";

let firstBurger = new menuItem('Classic', 'all text', 'gluten', 550);  
let secondBurger = new menuItem('Mega', 'all text', 'lactose', 650);
let thirdBurger = new menuItem('Super', 'all text', null, 600);

let newBurger1 = new menuItem('Chicken', 'all text', null, 700);
let newBurger2 = new menuItem('Vegan', 'all text', null, 500);


//Not Loop
/*HTML
<div id="myID">
    <h1>Välj en burgare:</h1>
    <li id='b1'></li>
</div>
document.getElementById("b1").innerHTML = firstBurger.burger();
document.getElementById("b2").innerHTML = secondBurger.burger();
document.getElementById("b3").innerHTML = thirdBurger.burger();
document.getElementById("b4").innerHTML = newBurger1.burger();
document.getElementById("b5").innerHTML = newBurger2.burger();*/


// LOOP
/*HTML
<div id="myID">
    <h1>Välj en burgare:</h1>
</div>*/

var menu = new Array(firstBurger, secondBurger, thirdBurger, newBurger1, newBurger2);


for (let i = 0; i < 5; i++){
var x = document.createElement("LI");
var t = document.createTextNode( menu[i].burger());
x.appendChild(t);
document.getElementById("myID").appendChild(x);
}

