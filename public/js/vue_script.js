

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

//LOOP
/*HTML:
<script src="https://vuejs.org/js/vue.js"></script> 
<ul id="myID">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>*/

var vueFunc = new Vue({
  el: '#myID',
  data: {
    items: [
      { message: firstBurger.burger() },
      { message: secondBurger.burger() },
			{ message: thirdBurger.burger() },
			{ message: newBurger1.burger() },
			{ message: newBurger2.burger() }
    ]
  }
})


