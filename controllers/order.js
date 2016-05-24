var Order = require('../model/order.js');
var db = require('../db.js');
exports.post = function(req,res){
	var order = new Order(req.body.user, req.body.email,req.body.phone, req.body.description);

	var isOrderSaved = db.saveOrder(order);
	if(isOrderSaved){
		res.writeHead(200);
		res.write("Your order was saved")
	}else{
		res.writeHead(500);
		res.write('Error,please validate all your fields')
	}
	res.end();
}