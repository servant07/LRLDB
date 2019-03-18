var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '828282',
  database : 'lastorigin'
});
connection.connect();

 const dbqurey = (qurey)=>{
 	return new Promise((resolve, reject) =>{
 		connection.query(qurey, function (error, results, fields) {
 			if (error) rejcet(error);
 			else resolve(results);
 		})
 	})
 }

const a = async(qurey)=>{
	try{
		let res = await dbqurey(qurey);
		console.log(res);
	} catch(e){
	console.log(e);
	}
}

console.log(a('select * from chardata'));
a('select * from chardata');
a('select id from chardata');
connection.end();