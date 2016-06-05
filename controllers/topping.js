var Topping = require('../model/topping.js');
var db = require('../db.js');



exports.addTopping = function(req,res){
	var topping = new Topping(req.body.name,req.body.description);
	db.saveTopping(topping, function(result){
		if(result.insertId){
			res.writeHead(200);
			res.write("" + result.insertId);
		}else{
			res.writeHead(500);
		}
		res.end();
	});
	
}
exports.addPhoto = function(req,res){
	db.addPhotoToTopping(req.file.filename,req.params.id,function(err,rows){
		if(rows.affectedRows == 0){
			res.writeHead(404);
			res.end();
		}else{
			res.writeHead(200);
			res.write("img/toppings/"+req.file.filename);
			res.end();
		}
	});
}

exports.deleteTopping = function(req,res){
	db.deleteTopping(req.params.id,function(err,result){
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

