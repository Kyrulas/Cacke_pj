var Order = require('../model/order.js');
var db = require('../db.js');
exports.post = function(req,res){
	var order = new Order(req.body.user, req.body.email,req.body.phone, req.body.description);
	console.log(order);
	db.saveOrder(order);
	res.end();
}