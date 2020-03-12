'use strict';
const socket = io();

const vm = new Vue ({
	el:'#app',
	data: {
		burgers,
		checked: [],
		name: '',
		email: '',
		picked: '',

		custBurger: [],	
		custName: '',
		custMail: '',
		custGender: '',
		custPayment: '',

		orders: {},
		localOrder: {
			orderId: '',
			details: {x: 0, y: 0},
			orderItems: [],
		},
		customerName: '',
		customerMail: '',
		customerGender: '',
		customerPay: 'Creditcard/Debitcard',
		numberOfOrder: 1,
		payArray: [
		{text: 'Credit/debitcard', value: 'Bank'},
		{text: 'Swish', value: 'Swish'},
		{text: 'Google pay', value: 'Google Pay'}
		],
	},
 methods: {
 	getOrder: function(){
 		this.custBurger = this.checked;
 		this.custName = this.name;
 		this.custMail = this.email;
 		this.custGender = this.picked;
 		this.custPayment = this.customerPay;			
 	},
 	getNext: function() {
 	/*	This function returns the next available key (order number) in
 		* the orders object, it works under the assumptions that all keys
 		* are integers. */
 		return this.numberOfOrder++;
 	},
 	addOrder: function(event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
       socket.emit('addOrder', {
       	orderId: this.getNext(),
       	details: this.localOrder.details,
       	orderItems: this.checked,
       	customerName: this.name,
       	customerMail: this.email,
       	customerGender: this.picked,
       	customerPay: this.customerPay,
       });
   },
   /*Display order*/
   displayOrder: function(event) {

   	let offset = {
   		x: event.currentTarget.getBoundingClientRect().left,
   		y: event.currentTarget.getBoundingClientRect().top,
   	};
   	this.localOrder.orderId= 'T',
   	this.localOrder.details= {
   		x: event.clientX - 10 - offset.x,
   		y: event.clientY - 10 - offset.y,
   	},
   	this.localOrder.orderItems= [''];
   }
}
})