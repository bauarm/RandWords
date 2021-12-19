function getValue(ids, tags) { //getValue('navLitter','input')
	var temp = [];
	var tableElem = document.getElementById(ids);
	
	
	var elements = tableElem.getElementsByTagName(tags);
	for ( i = 0; i < elements.length; i++) {
    var input = elements[i];
    var prot = input.value;
	temp.push(prot);
	}
	return temp;
	};

function getLitters(ids, tags) { //getLitters('navLitter', 'span')
	var temp = [];
	var tableElem = document.getElementById(ids);
	var elements = tableElem.getElementsByTagName(tags);
	for ( i = 0; i < elements.length; i++) {
    var input = elements[i];
    var prot = input.textContent;
	temp.push(prot.toLowerCase());
	}
    return temp;
	};
	
function makeArr(){ //makeArrs()
    var litArr = [];
    var litter = getLitters('navLitter', 'span');
	var elements = getValue('navLitter','input');
  for ( i = 0; i < elements.length; i++) {
    var input = elements[i];
    var litTemp = litter[i];
	
     for(j = 0; j < input; j++){
       litArr.push(litTemp);
	}
	}
	return litArr;
	};
	
//создание массива гласных

function makeVocalArr(){
var litters = makeArr();
var temp = ['a','e','i','o','u','y'];
var glas = [];
for(g = 0; g < temp.length; g++){
var element = temp[g];  
var idx = litters.indexOf(element);
while (idx != -1) {
glas.push(idx);
idx = litters.indexOf(element, idx + 1);
}
}
var sonr =[];
var sonrTemp =[];
for ( s = 0; s < glas.length; s++) {
    var input = glas[s];
	sonrTemp = litters[input];
	sonr.push(sonrTemp);
}
var a = sonr;
for ( var i = a.length;i-->0; ) {
var t = a[i],
j = Math.floor(i*Math.random());
a[i] = a[j];
a[j] = t;
}
return sonr;
}

//создание массива согласных
function makeAccordArr(){
var litters = makeArr();
var temp = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','c','t','v','w','x','z'];
var con = [];
for(g = 0; g < temp.length; g++){
var element = temp[g];  
var idx = litters.indexOf(element);
while (idx != -1) {
con.push(idx);
idx = litters.indexOf(element, idx + 1);
}
}
var cons =[];
var consTemp =[];
for ( s = 0; s < con.length; s++) {
    var input = con[s];
	consTemp = litters[input];
    cons.push(consTemp);
	}
var a = cons;
for ( var i = a.length;i-->0; ) {
var t = a[i],
j = Math.floor(i*Math.random());
a[i] = a[j];
a[j] = t;
}
return cons;
}


function getWord(exmid){
var word = document.getElementById(exmid).value;
var treshetka = [];
var names = word.toLowerCase();
var names = names.split('');
console.log(names);
for(j = 0; j < names.length; j++){
var element = names[j];
//console.log(element);
if(element=='a'){
treshetka.push(1);
}
else if (element=='e'){
treshetka.push(1);
}
else if (element=='i'){
treshetka.push(1);
}
else if (element=='o'){
treshetka.push(1);
}
else if (element=='u'){
treshetka.push(1);
}
else if (element=='y'){
treshetka.push(1);
}


else{
treshetka.push(2);
}
}
//console.log(treshetka);
return treshetka;
}
	
function refSon() {
var sonars = makeVocalArr();
var sonarsCont = sonars.length;
/*console.log(sonarsCont);*/
return sonars ;
}

//для обновления количества согласных букв в гуи
function refCon() {
var conson = makeAccordArr();
var consonCont = conson.length;
/*console.log(consonCont);*/
return conson ;
}
	
	
	
	function makeWords(exmid){//makeWords(exmid)
var sonars = refSon();
var conson = refCon();
var fina = getWord(exmid);
var num = fina.length; 
var glas = sonars.length;
var sogl = conson.length;
   
var expernames =[];
for(j = 0; j < num; j++){
	var LTS =[];
	var LTG =[];
	var element = fina[j];
	if(element==2){
		INS1 = Math.floor(Math.random() * sogl);
		var LTStemp = conson[INS1];
	    LTS.push(LTStemp);
	}
	else{
		ING2 = Math.floor(Math.random() * glas);
		var LTGtemp = sonars[ING2];
	    LTG.push(LTGtemp);
	}
var rnam = LTS + LTG ;
expernames.push(rnam);
}
var names = expernames.join('');
var names = names.toLowerCase();
//var names = names.split('');

return names;
}
	
function nameGen(exmid,idbl){
repword(idbl);

var element=document.getElementById(idbl);
      var tagcol = element.getElementsByClassName('gen-word');
     for (var i = 0; i<tagcol.length; i++) { 
       var names =makeWords(exmid);
	   var step = tagcol[i].innerHTML = names;
	 
	   //console.log(names);
	  }
};		
	
	//функция очистки полей для слов
	function repword(idbl){ //repword("rec_cl")
var element=document.getElementById(idbl);
 var tagcol = element.getElementsByClassName('gen-word');
   for (var i = 0; i<tagcol.length; i++) { 
     var getid = ranid();
     var putid = tagcol[i].setAttribute("id",(getid)); 
     var step = tagcol[i].innerHTML = "";
	  }
};


 /*function addword(idbl,names) {
    
	var count = 0;
	var element=document.getElementById(idbl);
      var tagcol = element.getElementsByClassName('gen-word');
     for (var i = 0; i<tagcol.length; i++) { 
       
	   var step = tagcol[i].innerHTML = names;
	 console.log(step);
	   console.log(names);
	  }
 }*/
	
	
function ranid(){	
var EnLt1 = ["a","e","i","o","y","u"];
var EnLt2 =["b","v","g","d","k","l","m","n","p","r","s","t","f","h","q","w"];
var EnLt3 =["1","2","3","4","5","6","7","8","9","0","_"];
var ltEnLt1 = EnLt1.length;
var ltEnLt2 = EnLt2.length;
var ltEnLt3 = EnLt3.length;
        num1 = Math.floor(Math.random() * ltEnLt2);
		num2 = Math.floor(Math.random() * ltEnLt3);
		num3 = Math.floor(Math.random() * ltEnLt1);
		num4 = Math.floor(Math.random() * ltEnLt3);
		num5 = Math.floor(Math.random() * ltEnLt2);
        num6 = Math.floor(Math.random() * ltEnLt1);
var numId =  EnLt2[num1] + EnLt3[num2]  + EnLt1[num3] + EnLt3[num4]+ EnLt2[num5]+ EnLt1[num6];
return(numId);
}
