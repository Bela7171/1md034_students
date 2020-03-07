var select = new Vue({
  el: '#burgerSelect',
  data: {
  	burgers,
  	checked: []
  },
  methods: {

  }
})


var custInfo = new Vue({
	el: '#customerInfo',
	data: {
		name: '',
		email: '',
		street: '',
		number: '',
		picked: ''
	}
})

var confirmBtn = new Vue({
	el: '#confirm',
	data: {
	custBurger: [],	

	custName: '',
	custMail: '',
	custStreet: '',
	custNum:    '',
	custGender: ''
	},
	methods: {
		getOrder: function(){
			this.custBurger = select.checked;
			this.custName = custInfo.name;
			this.custMail = custInfo.email;
			this.custStreet = custInfo.street;
			this.custNum = custInfo.number;
			this.custGender = custInfo.picked;			
	}
}
})
