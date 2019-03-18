function CharClass()
	{
		this.number = 0
		this.imgsrc = "";
		this.name = ""
		this.type = ""
		this.grade = ""
		this.tag = new Array();
		this.LV=1;
		this.hp = 0;
		this.att = 0;
		this.def = 0;
		this.cri = 0;
		this.hit = 0;
		this.ap = 0;
		this.eva = 0;	//회피
		this.grwhp = 0;
		this.grwatt = 0;
		this.grwdef = 0;
		this.inchp = 0;
		this.incatt = 0;
		this.incdef = 0;
		this.inccri = 0;
		this.inchit = 0;
		this.inceva = 0;
		this.core=0;
		this.equip = new Array("","","");
		this.res = new Array();
	}
var chararray = new Array;

for(var i=0;i<124;i++)
{
	chararray[i] = new CharClass();
	chararray[i].number = i;
	chararray[i].imgsrc = 'image/LO'+i+'.png';
}

/*
chararray[].tag = new Array();
chararray[].att = 
chararray[].cri = 
chararray[].def = 
chararray[].hit =
chararray[].ap = 
chararray[].eva =
chararray[].res = new Array();*/

chararray[3].tag = new Array("경장","지원기","이동불가","행동력감소","받는피해증가");
chararray[3].att = 48;
chararray[3].cri = 0.025;
chararray[3].def = 3;
chararray[3].hit = 1.6;
chararray[3].ap = 4.05;
chararray[3].eva = 0.075;
chararray[3].res = new Array(10,16,3);


chararray[5].tag = new Array("경장","공격기","이동불가","공격지원","ap증가");
chararray[5].att = 53;
chararray[5].cri = 0.06;
chararray[5].def = 5;
chararray[5].hit =1.42;
chararray[5].ap = 4.04;
chararray[5].eva =0.1;
chararray[5].res = new Array(10,16,10);

chararray[7].tag = new Array("기동","공격기","방어력감소","방어력관통");
chararray[7].att = 58;
chararray[7].cri = 20;
chararray[7].def = 2;
chararray[7].hit = 1;
chararray[7].ap = 4.52;
chararray[7].eva =0.21;
chararray[7].res = new Array(7,16,20);
/*
chararray[8].tag = new Array();
chararray[8].att = 
chararray[8].cri = 
chararray[8].def = 
chararray[8].hit =
chararray[8].ap = 
chararray[8].eva =
chararray[8].res = new Array();*/