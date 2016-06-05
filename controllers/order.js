var Order = require('../model/order.js');
var db = require('../db.js');

exports.addOrder = function(req,res){
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

exports.getAll = function(req,res){
	
	db.getAllOrders(function(rows){
			var orders = {orders:rows};
			res.render('home',orders);
	})
}

exports.changeStatus = function(req,res){
	db.changeStatus(req.params.id,req.params.status,function(err,result){
			if(result.affectedRows == 0){
					res.writeHead(404);
					res.end();
			}else{
					res.writeHead(200);
					res.end();
			}
	});
}

exports.deleteOrder = function(req,res){
	db.deleteOrder(req.params.id,function(err,result){
		if(err){
			console.log('error ' + err);
			res.writeHead(500);
			res.end();
		}else{
			if(result.affectedRows == 0){
					res.writeHead(404);
					res.end();
			}else{
					res.writeHead(200);
					res.end();
			}
		}
	});
	
}