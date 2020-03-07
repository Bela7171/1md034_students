function menuItem(name, allergy, kCal, img) {
    this.name = name; // The this keyword refers to the object itself
    this.allergy = allergy;
    this.calorie = kCal;
    this.img = img;
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

 
/* EventListener
  let myButton = document.getElementById('confirmBtn');
  myButton.addEventListener("click", myButton.onclick);
  myButton.onclick = function () {
  console.log("Button clicked!");
  let fullName = document.getElementById('firstandlastname').value;
  let emailAdd = document.getElementById('email').value;
  function displayRadioValue() { 
            var ele = document.getElementsByName('gender'); 
            var counter = 0;
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked)   
                  counter++;
              }
              return ele[counter].value;
        }   
  let gender = displayRadioValue();         
  let result = new Array(fullName, emailAdd,gender);
  return console.log(result);
  }
*/

