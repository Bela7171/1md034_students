
function menuItem(name, info, allergy, kCal) {
    this.name = name; // The this keyword refers to the object itself
    this.info = info;
    this.allergy = allergy;
    this.calorie = kCal;
    // use: getElementById('make-image').src="/path/to/images" + selected_text + ".jpg" ?
    this.burger = function() {
    	return this.name + ' ' + this.calorie;
    }
  }
 
let firstBurger = new menuItem('b1', 'allt', 'gluten', 550);  
let secondBurger = new menuItem('b2', 'all text', 'lactose', 650);
let thirdBurger = new menuItem('b3', 'all text', null, 600);

let newBurger1 = new menuItem('b4', 'all text', null, 700);
let newBurger2 = new menuItem('b5', 'all text', null, 500);

console.log( firstBurger.burger() );
console.log( secondBurger.burger() );
console.log( thirdBurger.burger() );