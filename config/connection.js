var mysql = require('mysql');										// 	when deploying to heroku jawsdb, must use jawsdb_url codes
var connection; 													// 	var connection = mysql.createConnection({
if (process.env.JAWSDB_URL) { 										// 	port: 3306,
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : "password",
		database : 'burgers_db'
	});
};

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
