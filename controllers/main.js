var db = require("../db");
exports.get = function(req, res){
   db.getAllToppings(function(rows){
   	res.render('index',{toppings:rows});
   })
    
    
}
