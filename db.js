/**  Connection to Data Base**/
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'toor',
	database: 'cacke_db',
	charset: 'utf8_general_ci'
});
connection.connect();
connection.query('set names utf8');
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
exports.getAllOrders = function(_callback){

	var query = connection.query('select * from Orders', function(err, rows){
		_callback(rows);

	});

}

exports.deleteOrder = function(id,_callback){
	connection.query('delete from Orders where id = ?', id, _callback);
}

exports.changeStatus = function(id,status,_callback){
	connection.query('UPDATE Orders SET status=? where id=?',[status, id], _callback);
}