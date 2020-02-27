let burgers = [
	{
		name: "Terayaki chicken 'Tasty' burger" , 
		desc: "500 gram with marinated grilled chicken, bean sprout, shredded lettuce, spring onions and terayaki sauce", 
		allergy: "gluten", 
		img: "https://www.seriouseats.com/recipes/images/2015/07/20150727-teriyaki-burger-recipe-15-1500x1125.jpg",
		calories: 550
	},
	{
		name: "Red chili 'The Destroyer' burger", 
		desc: "500 gram beefburger with lettuce, pickled onions, tomato, pepper jack cheese and spicy red chili sauce", 
		allergy: "lactose", 
		img: "https://www.butchers-sundries.com/ekmps/shops/trunetpackaging/images/premium-chilli-burger-mix-500g-10629-p.jpeg",
		calories: 650
	},
	{
		name: "Healthy quorn 'goNature' burger", 
		desc: "500 gram grilled qourn patty with, sauteed mushroom, tomatos and homemade guacamole", 
		allergy: "vegan", 
		img: "https://www.thespruceeats.com/thmb/UAh3Lv71pRikSXvICqkv8kVQJsg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/black-bean-burger-with-mashed-avocado--caramelized-onions-and-tomatoes-589977718-5ab84dcc30371300371106af.jpg",
		calories: 500
	},
	{
		name: "Placeholder", 
		desc: "Placeholder", 
		allergy: "Placeholder", 
		img: "https://www.pinnerus.com/wp-content/uploads/2019/09/70314260_2256459124463604_8250466909019723539_n.jpg",
		calories: 000
	}
];
new Vue({
  el: '#burgerSelect',
  data: {
  	burgers
  }
})