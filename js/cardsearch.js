module.exports =  function setIMG()									
{
	return `
	<script>
	var obj = document.getElementById("mainbox");
	var index = new Array(2,3,5,7,8,9,11,15,16,17,18,21,22,23,24,25,26,31,32,33,34,35,41,42,43,51,52,53,54,55,61,62,65,67,68,69,71,73,75,76,77,78,81,82,83,84,87,91,92,95,102,108,111,112,113,116,117,118,119,120,121,122,123)
	var newIMG = new Array();

	var temp = 0;

	for(var i=0;i<124;i++)
	{
		newIMG[i] = document.createElement("img");
		newIMG[i].setAttribute("id", "i");
		newIMG[i].setAttribute("class","character");
		newIMG[i].src ='image/LO'+i+'.png' ;
		newIMG[i].style.display = "none";
		obj.appendChild(newIMG[i]);
	
		if(i==index[temp])
		{
			newIMG[i].style.display = "";
			temp++
		}
	}
}
setIMG();
</script>`;
};

function scarch()
{
	var tag = document.getElementById("input").value;
	for(var i in newIMG)
	{
		newIMG[i].style.display="none";
	}
	
	for(var i in chararray)
	{
		for(var j in chararray[i].tag)
		{
		if(chararray[i].tag[j]==tag)				//태그에 맞춰 그림 보여주기
			{

				newIMG[i].style.display="";
			}
		}				
	}
}
