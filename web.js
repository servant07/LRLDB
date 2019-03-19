var express = require('express');
var bodyparser = require('body-parser');	//post방식의 데이터를 인코딩하기 위한 모듈
var app = express();
var async = require('async');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '828282',
  database : 'lastorigin'
});
connection.connect();

//DB를 동기적으로 사용하기위한 코드
const dbqurey = (qurey)=>{
 	return new Promise((resolve, reject) =>{
 		connection.query(qurey, function (error, results, fields) {
 			if (error) rejcet(error);
 			else resolve(results);
 		})
 	})
 }


app.use(express.static('css'));
app.use(express.static('image'));
app.use(express.static('js'));
app.use(express.static('html'));
app.use(bodyparser.urlencoded({exrended:false}))

var base = new Array(2,3,5,7,8,9,11,15,16,17,18,21,22,23,24,25,26,31,32,33,34,35,41,42,43,51,52,53,54,55,61,62,65,67,68,69,71,73,75,76,77,78,81,82,83,84,87,91,92,95,102,108,111,112,113,116,117,118,119,120,121,122,123);

//최상위 디렉토리

app.get('/',function(rep,res){
	res.send( mainTemp(searchTemp(charlist(base))));
});


app.get('/character',async(rep, res)=>{
	res.send( mainTemp("미안 아직 데이터를 다 못 넣었어."));

})
app.post('/search',async(rep, res)=>{
		var x = new Array();
		x = await search(rep.body.input); 
		res.send( mainTemp(searchTemp(charlist(x))));
})
app.listen(80);

function mainTemp(body)
{
return `
<!DOCTYPE html>
<html>
<head>
	<title>LastOrigin DB</title>
	<link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
<h1>라스트 오리진 DB</h1><a href="/">캐릭터 목록</a>
<hr>
${body}
</body>
</html>
`;

}

function searchTemp(list)
{return `
<form action="/search" method='post'>
태그 검색 : <input type="text" name="input"><input type ='submit'>
</form>
<br>
<br>
<div id = "mainbox">
${list}
</div>
`

}


var _promise = function(param){

}


const search = async(keyword)=>
{
	var index = new Array(0);
	var k=0;

	var results = await dbqurey('select id, tag from chardata');
		for(var i in results)									
		{
			var _tag  = results[i].tag.split(',');	//태그 나누기
			for(var j in _tag)						//나눈 태그배열 탐색
			{
				if(_tag[j] == keyword)				//태그에 같은 키워드가 있을때
				{
					index[0]=results[i].id;			//인덱스에 id저장
					k++
				} 
			}
		}
	return index;
}
function charlist(index)
{
	var tag = "";

	for(var i in index){

			tag = tag+ "<a href = '/character?id=" +index[i]+ "'><img class = 'character' src='LO"+index[i]+".png'></a>\n";
		}

	return tag;
}


