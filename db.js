/**  Connection to Data Base**/
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'toor',
	database: 'cacke_db'

});
connection.connect();
/*****************************/


/** Method that is shown outside */
exports.saveOrder  = function (order){
	var isOrderValid = validateOrder(order);
	if(isOrderValid){
		var query = connection.query('insert into Orders set ?', order, function(err, result){
			console.log(query.sql);
		});
	}
	return isOrderValid;
}
/***************************/

/** Method that validate Order object before save to Data Base */
function validateOrder(order){
	if(order.name == ''){
		return false;
	}
	if(order.phone == ''){
		return false;
	}
	if(order.description == ''){
		return false;
	}
	return true;
}
/*****************************************************************/