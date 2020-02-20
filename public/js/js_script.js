
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


//let list = document.createElement("LI");
document.getElementById("b1").innerHTML = firstBurger.burger();
document.getElementById("b2").innerHTML = secondBurger.burger();
document.getElementById("b3").innerHTML = thirdBurger.burger();
document.getElementById("b4").innerHTML = newBurger1.burger();
document.getElementById("b5").innerHTML = newBurger2.burger();

