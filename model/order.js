function Order(name,email,phone,description){
	this.name = name;
	this.email = email;
	this.phone = phone;
	this.description = description;
	this.date = new Date();
	this.status = 0;
}
module.exports = Order;