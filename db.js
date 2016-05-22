var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'toor',
	database: 'cacke_db'

});
connection.connect();



exports.saveOrder  = function (order){
	var query = connection.query('insert into Orders set ?', order, function(err, result){
		console.log(query.sql);
	});
}