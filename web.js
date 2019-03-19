var express = require('express');
var app = express();
app.get('/',(rep,res)=>{
	res.send("test");
})
app.listen(8001);