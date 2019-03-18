var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '828282',
  database : 'lastorigin'
});
const db = async()=>{
	try{
		const connection = await pool.getConnection(async conn => conn);
		try {
			const [rows] = await connection.query('select * from chardata');
			connection.release();
			console.log(rows);
			return rows
		}catch(err) {
				console.log('Query Error');
				connection.release();
			return false;
		}
	}catch(err) {
		console.log('DB Error');
		return false;
	}
};