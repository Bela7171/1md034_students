function menuItem(name, allergy, kCal, img) {
    this.name = name; // The this keyword refers to the object itself
    this.allergy = allergy;
    this.calorie = kCal;
    this.img = img;
    // use: getElementById('make-image').src="/path/to/images" + selected_text + ".jpg" ?
    this.info = function() {
    	let burgerInf = new Array(this.allergy, this.calorie);
		return burgerInf;
    }
    this.onload = function() {
    	var img = document.createElement('img');
		img.src = this.img;
		return img;
    }
  }
/*

  function inputer(burgerArray) {
  	for (var i = 0; i<burgerArray.length; i++){
  		var newDiv = document.createElement("div");
  		let burgerPic = burgerArray[i].onload();
  		burgerPic.height = "300";
  		burgerPic.width = "300";
  		document.getElementById(i+1).appendChild(burgerPic);

  		let note = burgerArray[i].info();
  		for(var j = 0; j<note.length; j++){
  		var x = document.createElement("LI");
  		var t = document.createTextNode( note[j]);
  		newDiv.appendChild(x).appendChild(t);
  		document.getElementById(i+1).appendChild(x);
  		}
  	}
  }

let firstBurger = new menuItem('Tasty', 'gluten', 550, "https://www.seriouseats.com/recipes/images/2015/07/20150727-teriyaki-burger-recipe-15-1500x1125.jpg");  
let secondBurger = new menuItem('TheDestroyer', 'lactose', 650, "https://www.butchers-sundries.com/ekmps/shops/trunetpackaging/images/premium-chilli-burger-mix-500g-10629-p.jpeg");
let thirdBurger = new menuItem('goNature', 'vegan', 600, "https://www.thespruceeats.com/thmb/UAh3Lv71pRikSXvICqkv8kVQJsg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/black-bean-burger-with-mashed-avocado--caramelized-onions-and-tomatoes-589977718-5ab84dcc30371300371106af.jpg");

let newBurger1 = new menuItem('Chicken', 'all text', null, 700);
let newBurger2 = new menuItem('Vegan', 'all text', null, 500);

var menu = new Array(firstBurger,secondBurger,thirdBurger);
inputer(menu);
*/
/*let burger1 = document.getElementById('b1');
let burgerPic = firstBurger.onload();
burgerPic.height = "300";
burgerPic.width = "300";
burger1.appendChild(burgerPic);
x.appendChild(t);
let txt = document.createTextNode(firstBurger.burger());
burger1.appendChild(txt);

let burger2 = document.getElementById('b2');
let burgerPic2 = secondBurger.onload();
burgerPic2.height = "300";
burgerPic2.width = "300";
burger2.appendChild(burgerPic2);
let txt2 = document.createTextNode(secondBurger.burger());
burger2.appendChild(txt2);

let burger3 = document.getElementById('b3');
let burgerPic3 = thirdBurger.onload();
burgerPic3.height = "300";
burgerPic3.width = "300";
burger3.appendChild(burgerPic3);
let txt3 = document.createTextNode(thirdBurger.burger());
burger3.appendChild(txt3);*/


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

/*var menu = new Array(firstBurger, secondBurger, thirdBurger, newBurger1, newBurger2);


for (let i = 0; i < 1; i++){
var x = document.createElement("LI");
var t = document.createTextNode( menu[i].burger());
x.appendChild(t);
document.getElementById("b1").appendChild(x);
}*/

